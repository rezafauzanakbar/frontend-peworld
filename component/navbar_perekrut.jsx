import React, { useEffect, useState } from "react";
import style from "../styles/navbar-login.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavbarPerekrut() {
  const [local, setLocal] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setLocal(data);
  }, []);
  return (
    <div className={style.navbarcustom}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid m-2">
            <Link href="/home/beranda">
              <Image src="/images/Group 980 1.png" width={100} height={30} />
            </Link>
            <div className="row">
              <div className="col-auto">
                <Link href="/perekrut/result-hire/result-hire">
                  <i className="fa fa-bell" />
                </Link>
              </div>
              <div className="col-auto">
                <i className="fa fa-envelope" />
              </div>
              <div className="col-auto">
                <Link href={`/perekrut/profile/${local.id_perekrut}`}>
                  <img
                    className={style.navbarpictureuser}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/foto user/${local.photo}`}
                    alt="profile picture"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
