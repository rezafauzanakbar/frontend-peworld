import React, { useState } from "react";
import style from "../../../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";
import swal from "sweetalert";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/login/perekrut`, form)
      .then((res) => {
        swal({
          title: "Login",
          text: "Login Successfully!",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            localStorage.setItem("data", JSON.stringify(res.data.token.data));
            localStorage.setItem("token", res.data.token.token);
            router.push("/home/beranda");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div>
        <div className={style.containerfluid}>
          <div className="row">
            <div className="col-md-6">
              <div className="loginsideleft">
                <div className={style.bgleftlogin}>
                  <div className="row">
                    <div className="col-auto">
                      <Image
                        src="/images/logo.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="col-auto">
                      <span className={style.namelogoleftlogin}>Perworld</span>
                    </div>
                  </div>
                  <h1 className={style.titleleftlogin}>
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={style.loginsideright}>
                <div className={style.titlerightlogin}>
                  <h1>Halo, Pewpeople</h1>
                </div>
                <div className={style.descriptionrightlogin}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus harum expedita iure a modi id dignissimos totam
                    cupiditate fugit maiores? Inventore similique velit
                    provident libero aspernatur accusantium repellendus incidunt
                    saepe.
                  </p>
                </div>
                <div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="form-label"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="input form-control"
                          id=""
                          aria-describedby=""
                          placeholder="Masukan alamat email"
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3 form-group">
                      <label
                        style={{ color: "#696f79" }}
                        className="form-label"
                      >
                        Kata Sandi
                      </label>
                      <input
                        type="password"
                        className="input form-control"
                        id=""
                        aria-describedby=""
                        placeholder="Masukan kata sandi"
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                      />
                    </div>
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      href=""
                    >
                      <div
                        style={{
                          textAlign: "right",
                          color: "#5e50a1",
                        }}
                        className="mt-3"
                      >
                        Lupa kata sandi?
                      </div>
                    </Link>

                    <div className="mt-3">
                      <button className={style.buttonlogin}>Masuk</button>
                    </div>
                  </form>
                  <div className="mt-3 text-center">
                    <span
                      style={{ color: "#999999", size: 13 }}
                      className="mb-3"
                    >
                      Anda belum punya akun?
                    </span>
                    <Link
                      style={{
                        textAlign: "right",
                        color: "#5e50a1",
                        textDecoration: "none",
                      }}
                      href="/perekrut/register/register"
                    >
                      Daftar disini
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
