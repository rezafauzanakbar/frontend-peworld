import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import style from "../../styles/profile.module.css";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar-login";
import NavbarPerekrut from "../../component/navbar_perekrut";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { id } = context.params;
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:3001/user/detail/${id}`,
    });
    return {
      props: {
        data: response.data,
      },
      revalidate: 10,
      notFound: false,
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
      revalidate: 10,
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const response = await axios({
    method: "GET",
    url: `http://localhost:3001/user/all`,
  });
  const paths = response.data.rows.map((item) => {
    return { params: { id: item.id_user.toString() } };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export default function detail(props) {
  const router = useRouter();
  const [experience, setExperience] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  const [local, setLocal] = useState("");

  //hook useEffect
  useEffect(() => {
    getDataLocal();
    getPortofolio();
    getExperience();
  }, []);

  const getDataLocal = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    setLocal(data);
  };

  const getPortofolio = () => {
    const data = props.data.map((data) => data.id_user);
    const id = data[0];
    axios
      .get(`http://localhost:3001/portofolio/user/${id}`)
      .then((res) => {
        setPortofolio(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getExperience = () => {
    const data = props.data.map((data) => data.id_user);
    const id = data[0];
    axios
      .get(`http://localhost:3001/experience/user/${id}`)
      .then((res) => {
        console.log(res);
        setExperience(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    swal({
      title: "Logout",
      text: "Are you sure that you want to logout?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        localStorage.clear();
        swal({
          title: "Logout",
          text: "Logout Successfully!",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            return router.push("/before-login/before-login");
          }
        });
      }
    });
  };

  return (
    <section>
      {local.level == 1 ? <NavbarPerekrut /> : <Navbar />}
      <div className="containercustomprofile">
        <div className={style.latarunguprofile}></div>
        <div className={style.latarwhiteprofile}>
          <div className="container">
            <div className="row">
              {props.data.map((data, index) => (
                <div className="col-md-4">
                  <div className={style.profile}>
                    <div className="text-center">
                      <img
                        className={style.pictureuser}
                        src={`http://localhost:3001/foto user/${data.photo}`}
                        alt="profile picture"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      {data.id_user !== local.id_user ? (
                        " "
                      ) : (
                        <Link href="/pekerja/edit-profile/edit-profile">
                          <span className="text-secondary">
                            <i class="fa fa-pencil"></i> Edit
                          </span>
                        </Link>
                      )}
                    </div>
                    <div>
                      <h5 className="mt-3">{data.name}</h5>
                    </div>
                    <div className="mt-1">
                      {data.title == null ? (
                        <span className="text-secondary">Programmer</span>
                      ) : (
                        <span className="text-secondary">{data.title}</span>
                      )}
                    </div>
                    <div className="mt-1">
                      {data.city == null ? (
                        <span className="text-secondary">
                          Bandung, Indonesia
                        </span>
                      ) : (
                        <span className="text-secondary">
                          {data.city}, Indonesia
                        </span>
                      )}
                    </div>
                    <div className="mt-1">
                      <span className="text-secondary">Freelancer</span>
                    </div>
                    <div className="mt-4">
                      {data.description == null ? (
                        <span className="text-secondary">
                          Hello, nice to meet you. I'am Programmer profesional!
                        </span>
                      ) : (
                        <span className="text-secondary">
                          {data.description}
                        </span>
                      )}
                    </div>
                    {local.level == 1 ? (
                      <Link href={`/hire/${data.id_user}`}>
                        <div className="text-center mt-4">
                          <button className={style.buttonhireprofile}>
                            Hire
                          </button>
                        </div>
                      </Link>
                    ) : local.id_user == data.id_user ? (
                      <div className="text-center mt-4">
                        <button
                          onClick={logout}
                          className={style.buttonhireprofile}
                        >
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <div className="text-center mt-4">
                        <button className={style.buttonhireprofile}></button>
                      </div>
                    )}
                    <div className="mt-4">
                      <div>
                        <h5>Skill</h5>
                      </div>
                      <div className="mt-3">
                        <li className={style.skilluserprofile}>Python</li>
                        <li className={style.skilluserprofile}>Laravel</li>
                        <li className={style.skilluserprofile}>Golang</li>
                        <li className={style.skilluserprofile}>Javascript</li>
                        <li className={style.skilluserprofile}>PHP</li>
                        <li className={style.skilluserprofile}>HTML</li>
                        <li className={style.skilluserprofile}>C++</li>
                        <li className={style.skilluserprofile}>Kotlin</li>
                        <li className={style.skilluserprofile}>Swift</li>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <div className="row mt-3">
                          <div className="col-md-2">
                            <img src="/images/mail (4).png" />
                          </div>
                          <div className="col-md-10">
                            <span className="text-secondary">{data.email}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row mt-3">
                          <div className="col-md-2">
                            <img src="/images/instagram.png" />
                          </div>
                          <div className="col-md-10">
                            {data.instagram == null ? (
                              <span className="text-secondary">
                                @your_instagram
                              </span>
                            ) : (
                              <span className="text-secondary">
                                {data.instagram}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row mt-3">
                          <div className="col-md-2">
                            <img src="/images/github.png" />
                          </div>
                          <div className="col-md-10">
                            {data.github == null ? (
                              <span className="text-secondary">
                                @your_github
                              </span>
                            ) : (
                              <span className="text-secondary">
                                {data.github}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row mt-3">
                          <div className="col-md-2">
                            <img src="/images/gitlab.png" />
                          </div>
                          <div className="col-md-10">
                            {data.gitlab == null ? (
                              <span className="text-secondary">
                                @your_gitlab
                              </span>
                            ) : (
                              <span className="text-secondary">
                                {data.gitlab}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-8">
                <div className={style.experienceprofile}>
                  <div className="container container-custom-history">
                    <div className="history-user">
                      <p>
                        <button
                          className="btn btn-custom"
                          data-bs-toggle="collapse"
                          href="#portofolio"
                          role="button"
                          aria-expanded="true"
                          aria-controls="portofolio"
                        >
                          <h6>Portofolio</h6>
                        </button>
                        <button
                          className="btn btn-custom"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#pengalamakerja"
                          aria-expanded="false"
                          aria-controls="pengalamakerja"
                        >
                          <h6 className="text-secondary">Pengalaman Kerja</h6>
                        </button>
                      </p>
                      <div
                        className="collapse multi-collapse show"
                        id="portofolio"
                      >
                        <div className={style.portofolioprofile}>
                          <div className="container">
                            <div className="row">
                              {portofolio == "" ? (
                                <div className="text-center">
                                  <img
                                    className={style.picturedatanotfound}
                                    src="/images/data not found.webp"
                                  />
                                  <span className="text-secondary">
                                    Sorry, you don't have portofolio!
                                  </span>
                                </div>
                              ) : (
                                portofolio.map((data) => (
                                  <div className="col-md-4 mb-3">
                                    <div className={style.card}>
                                      <img
                                        className={style.pictureportofolio}
                                        src={`http://localhost:3001/image portofolio/${data.image}`}
                                      />
                                      <div className="card-body text-center">
                                        <p>{data.title_portofolio}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="collapse multi-collapse show"
                        id="pengalamakerja"
                      >
                        {experience == "" ? (
                          <div className="text-center">
                            <img
                              className={style.picturedatanotfound}
                              src="/images/data not found.webp"
                            />
                            <span className="text-secondary">
                              Sorry, you don't have experience!
                            </span>
                          </div>
                        ) : (
                          experience.map((data) => (
                            <div className="mt-3">
                              <div className="row">
                                <div className="col-md-2 text-center">
                                  <img
                                    className={style.picturepengalamankerja}
                                    src="/images/Rectangle 672.png"
                                  />
                                </div>
                                <div className="col-md-10">
                                  <div>
                                    <h5>{data.job_title}</h5>
                                  </div>
                                  <div>
                                    <span>{data.company}</span>
                                  </div>
                                  <div>
                                    <div className="row">
                                      <div className="col-auto">
                                        <span className="text-secondary">
                                          {String(data.date_in).slice(0, 10)} -{" "}
                                          {String(data.date_out).slice(0, 10)}
                                        </span>
                                      </div>
                                      <div className="col-auto">
                                        <span className="text-secondary">
                                          6 months
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-3">
                                    {data.description == null ? (
                                      <span>
                                        This is my experience being a
                                        profesional Programmer.
                                      </span>
                                    ) : (
                                      <span>{data.description}</span>
                                    )}
                                  </div>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
