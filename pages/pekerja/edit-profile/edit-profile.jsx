import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import style from "../../../styles/edit-profile.module.css";
import Navbar from "../../../component/navbar-login";
import Footer from "../../../component/footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [experience, setExperience] = useState({
    id_user: "",
    job_title: "",
    company: "",
    date_in: "",
    date_out: "",
    description: "",
  });

  const [imagePortofolio, setImagePortofolio] = useState();
  const [portofolio, setPortofolio] = useState({
    id_user: "",
    title_portofolio: "",
    link: "",
    type: "",
  });

  const [update, setUpdate] = useState({
    name: user.name,
    job_desk: user.job_desk,
    city: user.city,
    skill: user.skill,
    github: user.github,
    gitlab: user.gitlab,
    instagram: user.instagram,
    description: user.description,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    getUser(id);
  }, []);

  const getUser = (id) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user/detail/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    const body = {
      name: update.name,
      job_desk: update.job_desk,
      city: update.city,
      skill: update.skill,
      github: update.github,
      gitlab: update.gitlab,
      instagram: update.instagram,
      description: update.description,
    };
    swal({
      title: "Update Profile",
      text: "Are you sure that you want to update?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        axios
          .put(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, body)
          .then((res) => {
            swal({
              title: "Update Profile",
              text: "Update Successfully!",
              icon: "success",
              dangerMode: true,
            }).then(async (confirm) => {
              if (confirm) {
                return router.push("/profile/profile");
              }
            });
          });
      }
    });
  };

  const handleAddImagePortofolio = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("images").innerHTML = fileUploaded.name;
    setImagePortofolio(fileUploaded);
  };

  const handleSubmitExperience = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    const form = {
      id_user: id,
      job_title: experience.job_title,
      company: experience.company,
      date_in: experience.date_in,
      date_out: experience.date_out,
      description: experience.description,
    };
    swal({
      title: "Add Experience",
      text: "Are you sure that you want to Add?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/experience/insert`, form)
          .then((res) => {
            swal({
              title: "Add Experience",
              text: "Add Successfully!",
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

  const handleSubmitPortofolio = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    const inputForm = new FormData();
    inputForm.append("id_user", id);
    inputForm.append("title_portofolio", portofolio.title_portofolio);
    inputForm.append("image", imagePortofolio);
    inputForm.append("link", portofolio.link);
    inputForm.append("type", portofolio.type);
    swal({
      title: "Add Portofolio",
      text: "Are you sure that you want to Add?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        axios
          .post(
            `${process.env.NEXT_PUBLIC_API_URL}/portofolio/insert`,
            inputForm
          )
          .then((res) => {
            swal({
              title: "Add Portofolio",
              text: "Add Successfully!",
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

  return (
    <section>
      <Navbar />
      <div className="containercustomprofile">
        <div className={style.latarunguprofile}></div>
        <div className={style.latarwhiteprofile}>
          <div className="container">
            <div className="row">
              {user == "" ? (
                <span className="text-center">Loading...</span>
              ) : (
                user.map((data, index) => (
                  <div key={index.id_user} className="col-md-4">
                    <div className={style.profile}>
                      <div className="text-center">
                        <label htmlFor="addImage" style={{ cursor: "pointer" }}>
                          <Image
                            className={style.pictureuser}
                            src={`${process.env.NEXT_PUBLIC_API_URL}/foto user/${data.photo}`}
                            alt="profile picture"
                            width={150}
                            height={150}
                          />
                        </label>
                        <input
                          className={style.input}
                          type="file"
                          id="addImage"
                        />
                      </div>
                      <div>
                        <h5 className="mt-3">{data.name}</h5>
                      </div>
                      <div className="mt-1">
                        {data.job_desk == null ? (
                          <span className="text-secondary">Programmer</span>
                        ) : (
                          <span className="text-secondary">
                            {data.job_desk}
                          </span>
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
                    </div>
                    <div>
                      <div className="mt-3">
                        <Link href="/profile/profile">
                          <button className={style.buttonsave}>Simpan</button>
                        </Link>
                      </div>
                      <div className="mt-3">
                        <Link href="/profile/profile">
                          <button className={style.buttoncancel}>Batal</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}

              <div className="col-md-8">
                <div className={style.containereditprofile}>
                  <div className={style.title}>
                    <h5>Data Diri</h5>
                    <hr />
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Nama Lengkap
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.name}
                            onChange={(e) =>
                              setUpdate({ ...update, name: e.target.value })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Job desk
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.job_desk}
                            onChange={(e) =>
                              setUpdate({ ...update, job_desk: e.target.value })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Domisili
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.city}
                            onChange={(e) =>
                              setUpdate({ ...update, city: e.target.value })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Skill
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.skill}
                            onChange={(e) =>
                              setUpdate({ ...update, skill: e.target.value })
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Github
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.github}
                            onChange={(e) =>
                              setUpdate({ ...update, github: e.target.value })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Gitlab
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.gitlab}
                            onChange={(e) =>
                              setUpdate({ ...update, gitlab: e.target.value })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Instagram
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.instagram}
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                instagram: e.target.value,
                              })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Deskripsi singkat
                        </label>
                        {user.map((data, index) => (
                          <input
                            key={index.id_user}
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby=""
                            defaultValue={data.description}
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                description: e.target.value,
                              })
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <button type="submit" className={style.buttonsave}>
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div className={style.containereditskill}>
                  <div className={style.title}>
                    <h5>Skill</h5>
                    <hr />
                  </div>
                  <form action="">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            aria-describedby
                            placeholder="Java"
                          />
                        </div>
                      </div>
                      <div className="pt-1 col-md-2">
                        <button className={style.buttonsave}>Simpan</button>
                      </div>
                    </div>
                  </form>
                </div> */}
                <div className={style.containereditexperience}>
                  <div className={style.title}>
                    <h5>Pengalaman Kerja</h5>
                    <hr />
                  </div>
                  <form onSubmit={(e) => handleSubmitExperience(e)}>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Nama Pekerjaan
                        </label>
                        <input
                          type="text"
                          className="input form-control"
                          id=""
                          aria-describedby=""
                          placeholder="Web developer"
                          onChange={(e) =>
                            setExperience({
                              ...experience,
                              job_title: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="mb-3 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Nama Perusahaan
                            </label>
                            <input
                              type="text"
                              className="input form-control"
                              id=""
                              aria-describedby=""
                              placeholder="PT JNE Express"
                              onChange={(e) =>
                                setExperience({
                                  ...experience,
                                  company: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="mb-3 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Date In
                            </label>
                            <input
                              type="date"
                              className="input form-control"
                              id=""
                              aria-describedby=""
                              placeholder="DD-MM-YYYY"
                              onChange={(e) =>
                                setExperience({
                                  ...experience,
                                  date_in: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="mb-3 form-group">
                              <label
                                style={{ color: "#696f79" }}
                                className="form-label"
                              >
                                Date Out
                              </label>
                              <input
                                type="date"
                                className="input form-control"
                                id=""
                                aria-describedby=""
                                placeholder="DD-MM-YYYY"
                                onChange={(e) =>
                                  setExperience({
                                    ...experience,
                                    date_out: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Deskripsi Singkat
                            </label>
                            <input
                              type="text"
                              className="input form-control"
                              id=""
                              aria-describedby=""
                              placeholder="Deskripsikan pekerjaan anda"
                              onChange={(e) =>
                                setExperience({
                                  ...experience,
                                  description: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={style.addpengalamankerja}
                      >
                        Tambahkan pengalaman kerja
                      </button>
                    </div>
                  </form>
                </div>
                <div className={style.containereditportofolio}>
                  <div className={style.title}>
                    <h5>Portofolio</h5>
                    <hr />
                  </div>
                  <form onSubmit={(e) => handleSubmitPortofolio(e)}>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Nama Aplikasi
                        </label>
                        <input
                          type="text"
                          className="input form-control"
                          id=""
                          aria-describedby=""
                          placeholder="Masukan nama aplikasi"
                          onChange={(e) =>
                            setPortofolio({
                              ...portofolio,
                              title_portofolio: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Link repository
                        </label>
                        <input
                          type="text"
                          className="input form-control"
                          id=""
                          aria-describedby=""
                          placeholder="Masukan link repository"
                          onChange={(e) =>
                            setPortofolio({
                              ...portofolio,
                              link: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          Type portofolio
                        </label>
                        <div className="row">
                          <div className="col-md-4">
                            <div className={style.containerchoiceapps}>
                              <div className="row text-center">
                                <div className="col-auto">
                                  <input
                                    type="checkbox"
                                    value="0"
                                    onChange={(e) =>
                                      setPortofolio({
                                        ...portofolio,
                                        type: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="col-auto">
                                  <span className="text-secondary">
                                    Aplikasi Mobile
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className={style.containerchoiceapps}>
                              <div className="row text-center">
                                <div className="col-auto">
                                  <input
                                    type="checkbox"
                                    value="1"
                                    onChange={(e) =>
                                      setPortofolio({
                                        ...portofolio,
                                        type: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="col-auto">
                                  <span className="text-secondary">
                                    Aplikasi Web
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Image Portofolio
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="images"
                        onChange={handleAddImagePortofolio}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={style.addpengalamankerja}
                      >
                        Tambahkan Portofolio
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Footer />
    </section>
  );
}
