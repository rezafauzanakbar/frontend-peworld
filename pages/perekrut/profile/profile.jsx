import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "../../../component/footer";
import Navbar from "../../../component/navbar_perekrut";
import Link from "next/link";
import style from "../../../styles/profile-perekrut.module.css";

export default function profile() {
  const router = useRouter();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_perekrut;
    getUser(id);
  }, []);

  const getUser = (id) => {
    axios
      .get(`http://localhost:3001/perekrut/detail/${id}`)
      .then((res) => {
        console.log(res.data.rows);
        setUser(res.data.rows);
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
      <Navbar />
      <div className={style.containercustomprofile}>
        <div className={style.latarunguprofile}></div>
        <div className={`text-center ${style.latarwhiteprofile}`}>
          <div className="container">
            {user.map((data) => (
              <div className={style.containerprofile}>
                <div className="text-center">
                  <img
                    className={style.profilepicture}
                    src={`http://localhost:3001/foto user/${data.photo}`}
                    alt=""
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
                <div className="mt-3">
                  <span className="text-secondary">{data.description}</span>
                </div>
                <Link href="/perekrut/edit-profile/edit-profile">
                  <div className="mt-4">
                    <button className={style.buttonhireprofile}>
                      Edit Profile
                    </button>
                  </div>
                </Link>
                <div className="mt-1">
                  <button onClick={logout} className={style.buttonhirelogout}>
                    Log Out
                  </button>
                </div>
                <div className="text-center mt-5">
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <img src="/images/mail (4).png" />
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">{data.email}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <img src="/images/instagram.png" />
                      </div>
                      <div className="col-auto">
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
                    <div className="mt-3">
                      <div className="col-auto">
                        <img src="/images/Vector (1).png" />
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">{data.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <img src="/images/linkedin 1.png" />
                      </div>
                      <div className="col-auto">
                        {data.linkedin == null ? (
                          <span className="text-secondary">
                            @your_lingkedin
                          </span>
                        ) : (
                          <span className="text-secondary">
                            {data.linkedin}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
