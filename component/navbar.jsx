import React from "react";
import Image from "next/image";
import style from "../styles/navbar.module.css";
import Link from "next/link";

export default function navbar() {
  return (
    <section>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mt-4">
            <Link href="/landing-page/landing-page">
              <Image src="/images/Group 980 1.png" width={100} height={30} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex" role="search">
                <Link href="/before-login/before-login">
                  <button className={style.buttonnavbarmasuk}>Masuk</button>
                </Link>
                <Link href="/before-login/before-login">
                  <button className={style.buttonnavbardaftar}>Daftar</button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
