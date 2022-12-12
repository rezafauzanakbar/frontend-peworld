import React, { useState } from "react";
import axios from "axios";
import style from "../../../styles/register-pekerja.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    level: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      form.name == "" ||
      form.email == "" ||
      form.phone == "" ||
      form.password == "" ||
      form.confirmpassword == ""
    ) {
      swal({
        title: "Register",
        text: "Must be input all field",
        icon: "warning",
        dangerMode: true,
      }).then(async (confirm) => {
        if (confirm) {
        }
      });
    } else {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        confirmpassword: form.confirmpassword,
        level: form.level,
      };
      if (form.confirmpassword !== form.password) {
        swal({
          title: "Register",
          text: "password must be same",
          icon: "warning",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
          }
        });
      } else {
        swal({
          title: "Register",
          text: "Are you sure that you want to register?",
          icon: "warning",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            axios
              .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, body)
              .then((res) => {
                swal({
                  title: "Register",
                  text: "Register Successfully!",
                  icon: "success",
                  dangerMode: true,
                }).then(async (confirm) => {
                  if (confirm) {
                    router.push("/pekerja/login/login");
                  }
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      }
    }
  };
  return (
    <section>
      <div className={style.containerfluid}>
        <div className="row">
          <div className="col-md-6">
            <div className="loginsideleft">
              <div className={style.bgleftlogin}>
                <div className="row">
                  <div className="col-auto">
                    <Link href="/landing-page/landing-page">
                      <Image
                        src="/images/logo.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </Link>
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
                  cupiditate fugit maiores? Inventore similique velit provident
                  libero aspernatur accusantium repellendus incidunt saepe.
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
                        Nama
                      </label>
                      <input
                        type="text"
                        className="input form-control"
                        id=""
                        aria-describedby=""
                        placeholder="Masukan nama panjang"
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3 form-group">
                    <label style={{ color: "#696f79" }} className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input form-control"
                      id=""
                      aria-describedby=""
                      placeholder="Masukan Masukkan alamat email"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <label style={{ color: "#696f79" }} className="form-label">
                      No Handphone
                    </label>
                    <input
                      type="number"
                      className="input form-control"
                      id=""
                      aria-describedby=""
                      placeholder="Masukan no handphone"
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <label style={{ color: "#696f79" }} className="form-label">
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
                  <div className="mb-3 form-group">
                    <label style={{ color: "#696f79" }} className="form-label">
                      Konfirmasi Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="input form-control"
                      id=""
                      aria-describedby=""
                      placeholder="Masukan konfirmasi kata sandi"
                      onChange={(e) =>
                        setForm({ ...form, confirmpassword: e.target.value })
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <button type="submit" className={style.buttonlogin}>
                      Daftar
                    </button>
                  </div>
                </form>
                <div className="mt-3 text-center">
                  <span style={{ color: "#999999", size: 13 }} className="mb-3">
                    Anda sudah punya akun?
                  </span>
                  <Link
                    style={{
                      textAlign: "right",
                      color: "#5e50a1",
                      textDecoration: "none",
                    }}
                    href="/pekerja/login/login"
                  >
                    Masuk disini
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
