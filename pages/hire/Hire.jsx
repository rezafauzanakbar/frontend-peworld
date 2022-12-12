import React from "react";
import style from "../../styles/hire.module.css";
import Navbar from "../../component/navbar_perekrut";
import Footer from "../../component/footer";
import Image from "next/image";

export default function Hire() {
  return (
    <section>
      <Navbar />
      <div className={style.containereditprofile}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={style.profile}>
                <div className="text-center">
                  <Image
                    className={style.pictureuser}
                    src="/images/Ellipse 330 (1).png"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <h5>Lous Tomlinson</h5>
                </div>
                <div className="mt-2">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-secondary">Bandung, Indonesia</span>
                </div>
                <div className="mt-3">
                  <span className="text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure commodi soluta quam architecto odit maxime aliquam
                    maiores debitis veniam a
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className={style.containerform}>
                <div>
                  <h1>Hubungi Lous Tomlinson</h1>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nihil, voluptatibus quas harum dolore, molestiae doloremque
                    consectetur perferendis illum quis magni nisi eos nostrum
                    id. Aliquid dicta voluptas autem quae voluptatem!
                  </span>
                </div>
                <form className="mt-5">
                  <div className="form-group">
                    <div className="mb-3 form-group">
                      <label
                        style={{ color: "#696f79" }}
                        className="form-label"
                      >
                        Tujuan tentang pesan ini
                      </label>
                      <input type="text" className="input form-control" id="" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-3 form-group">
                      <label
                        style={{ color: "#696f79" }}
                        className="form-label"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="input form-control"
                        id=""
                        placeholder="Masukan nama lengkap"
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
                        placeholder="Masukan email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-3 form-group">
                      <label
                        style={{ color: "#696f79" }}
                        className="form-label"
                      >
                        No Handphone
                      </label>
                      <input
                        type="text"
                        className="input form-control"
                        id=""
                        placeholder="Masukan no handphone"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-3 form-group">
                      <label
                        style={{ color: "#696f79" }}
                        className="form-label"
                      >
                        Deskripsi
                      </label>
                      <input
                        type="text"
                        className="input form-control"
                        id=""
                        placeholder="Deskripsikan/jelaskan lebih detail"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className={style.buttonhire}>Hire</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
