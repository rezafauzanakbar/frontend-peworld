import React, { useEffect, useState } from "react";
import style from "../../../styles/edit-profile.module.css";
import Navbar from "../../../component/navbar_perekrut";
import Footer from "../../../component/footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [update, setUpdate] = useState({
    name_perekrut: user.name_perekrut,
    email: user.email,
    perusahaan: user.perusahaan,
    jabatan: user.jabatan,
    phone: user.phone,
    address: user.email,
    description: user.description,
    instagram: user.instagram,
    lingkedin: user.linkedin,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_perekrut;
    getUser(id);
  }, []);

  const getUser = (id) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/detail/${id}`)
      .then((res) => {
        console.log(res.data.rows);
        setUser(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_perekrut;
    const body = {
      name_perekrut: update.name_perekrut,
      email: update.email,
      perusahaan: update.perusahaan,
      jabatan: update.jabatan,
      phone: update.phone,
      address: update.email,
      description: update.description,
      instagram: update.instagram,
      lingkedin: update.linkedin,
    };
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/perekrut/update/${id}`, body)
      .then((res) => {
        console.log(res.data);
        alert("Update Success");
        return router.push("/perekrut/profile/profile");
      })
      .catch((err) => {
        console.log(err);
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
              <div className="col-md-4">
                {user.map((data, index) => (
                  <div key={index.id_perekrut} className={style.profile}>
                    <div className="text-center">
                      <Image
                        className={style.pictureuser}
                        src={`${process.env.NEXT_PUBLIC_API_URL}/foto user/${data.photo}`}
                        alt=""
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="mt-3">
                      <h5>{data.perusahaan}</h5>
                    </div>
                    <div className="mt-1">
                      <span>{data.jabatan}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-secondary">{data.address}</span>
                    </div>
                  </div>
                ))}

                <div>
                  <div className="mt-3">
                    <button
                      onClick={(e) => onSubmit(e)}
                      className={style.buttonsave}
                    >
                      Simpan
                    </button>
                  </div>
                  <div className="mt-3">
                    <Link href="/perekrut/profile/profile">
                      <button className={style.buttoncancel}>Batal</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                {user.map((data, index) => (
                  <div
                    key={index.id_perekrut}
                    className={style.containereditprofile}
                  >
                    <div className={style.title}>
                      <h5>Data Diri</h5>
                      <hr />
                    </div>
                    <form>
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
                            defaultValue={data.perusahaan}
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                perusahaan: e.target.value,
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
                            Bidang
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={data.jabatan}
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                jabatan: e.target.value,
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
                            Kota
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={data.address}
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                address: e.target.value,
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
                            Description
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={
                              data.description == null
                                ? "Masukan detail anda"
                                : data.description
                            }
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                description: e.target.value,
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
                            Email
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={data.email}
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                email: e.target.value,
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
                            Instagram
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={data.instagram}
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                instagram: e.target.value,
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
                            No Telephone
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={data.phone}
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                phone: e.target.value,
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
                            Linkedin
                          </label>
                          <input
                            type="text"
                            className="input form-control"
                            id=""
                            defaultValue={
                              data.linkedin == null
                                ? "Masukkan link lingkedin"
                                : data.linkedin
                            }
                            aria-describedby=""
                            onChange={(e) =>
                              setUpdate({
                                ...update,
                                linkedin: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
