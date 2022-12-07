import React from "react";
import style from "../../../styles/reset-password.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ResetPassword() {
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
                  <h1>Reset Password</h1>
                </div>
                <div className={style.descriptionrightlogin}>
                  <p>
                    Enter your user account's verified email address and we will
                    send you a password reset link.
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
                          Email
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
                  </form>
                  <div className="mt-3">
                    <button className={style.buttonlogin}>
                      Send password reset email
                    </button>
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
