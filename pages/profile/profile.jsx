import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import style from "../../styles/profile.module.css";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar-login";
import Link from "next/link";
import { useRouter } from "next/router";

export default function profile() {
  const router = useRouter();
  const [experience, setExperience] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  const [local, setLocal] = useState("");
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    getDataLocal();
    getByID(id);
    getPortofolio(id);
    getExperience(id);
  }, []);

  const getDataLocal = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    setLocal(data);
  };

  const getByID = (id) => {
    axios
      .get(`http://localhost:3001/user/detail/${id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPortofolio = (id) => {
    axios
      .get(`http://localhost:3001/portofolio/user/${id}`)
      .then((res) => {
        setPortofolio(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getExperience = (id) => {
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

  const deleteExperience = (id_experience) => {
    swal({
      title: "Delete Experience",
      text: "Are you sure that you want to delete?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        axios
          .delete(`http://localhost:3001/experience/delete/${id_experience}`)
          .then((res) => {
            swal({
              title: "Delete Experience",
              text: "Delete Successfully!",
              icon: "success",
              dangerMode: true,
            }).then(async (confirm) => {
              if (confirm) {
                return router.push("/profile/profile");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const deletePortofolio = (id_portofolio) => {
    swal({
      title: "Delete Portofolio",
      text: "Are you sure that you want to delete?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        axios
          .delete(`http://localhost:3001/portofolio/delete/${id_portofolio}`)
          .then((res) => {
            swal({
              title: "Delete Portofolio",
              text: "Delete Successfully!",
              icon: "success",
              dangerMode: true,
            }).then(async (confirm) => {
              if (confirm) {
                return router.push("/profile/profile");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
      <Navbar />
      <div className="containercustomprofile">
        <div className={style.latarunguprofile}></div>
        <div className={style.latarwhiteprofile}>
          <div className="container">
            <div className="row">
              {profile.map((data, index) => (
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
                      <Link href="/pekerja/edit-profile/edit-profile">
                        <span className="text-secondary">
                          <i class="fa fa-pencil"></i> Edit
                        </span>
                      </Link>
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
                      <Link href="/hire/hire">
                        <div className="text-center mt-4">
                          <button className={style.buttonhireprofile}>
                            Hire
                          </button>
                        </div>
                      </Link>
                    ) : (
                      <div className="text-center mt-4">
                        <button
                          onClick={logout}
                          className={style.buttonhireprofile}
                        >
                          Log Out
                        </button>
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
                                      <button
                                        onClick={(e) =>
                                          deletePortofolio(
                                            data.id_portofolio,
                                            e
                                          )
                                        }
                                        type="button"
                                        className="btn btn-danger"
                                      >
                                        <i
                                          className="fa fa-trash"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
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
                                  <button
                                    onClick={(e) =>
                                      deleteExperience(data.id_experience, e)
                                    }
                                    type="button"
                                    className="btn btn-danger my-1"
                                  >
                                    <i
                                      className="fa fa-trash"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Delete
                                  </button>
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
