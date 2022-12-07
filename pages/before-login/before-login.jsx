import React from "react";
import style from "../../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BeforeLogin() {
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
                        width={30}
                        height={30}
                        alt="image logo"
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
                  <Link href="/pekerja/login/login">
                    <div className="mt-3">
                      <button className={style.buttonlogin}>
                        Sebagai User
                      </button>
                    </div>
                  </Link>

                  <Link href="/perekrut/login/login">
                    <div className="mt-3">
                      <button className={style.buttonlogin}>
                        Sebagai Perekrut
                      </button>
                    </div>
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
