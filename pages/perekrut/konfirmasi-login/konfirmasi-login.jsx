import React from "react";
import style from "../../../styles/konfirmasi-login.module.css";
import Image from "next/image";
import Link from "next/link";

export default function KonfirmasiLogin() {
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
                      <Image src="/images/logo.png" width={30} height={30} />
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
                  <h2>Please login with your account</h2>
                </div>
                <div className={style.descriptionrightlogin}>
                  <p>
                    We have an email containing a password reset instruction to
                    your email. please check your email.
                  </p>
                </div>
                <div>
                  <form>
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
                          aria-describedby
                          placeholder="Masukan alamat email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
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
                          aria-describedby
                          placeholder="Masukan kata sandi"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="mt-3">
                    <button className={style.buttonlogin}>Masuk</button>
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
