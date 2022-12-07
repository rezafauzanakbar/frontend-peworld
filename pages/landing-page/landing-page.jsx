import React from "react";
import style from "../../styles/landing-page.module.css";
import Navbar from "../../component/navbar";
import Image from "next/image";
import Footer from "../../component/footer";
export default function landingpage() {
  return (
    <section>
      <div className="container">
        <Navbar />
        <div className="row mt-5">
          <div className="col-md-6">
            <div className={style.containersideleftlandingpage}>
              <div className="mt-5">
                <h1>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
              </div>
              <div className="mt-4">
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  aliquid unde reiciendis? Labore ullam sapiente odit ipsam
                  soluta quaerat magnam unde sed hic debitis distinctio nisi
                  cumque, vel minima quibusdam!
                </span>
              </div>
              <div className="mt-4">
                <button className={style.startbutton}>
                  Mulai Dari Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div>
              <img
                className={style.pictureonelandingpage}
                src="/images/Group 1195.png"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <img
                className={style.picturetwolandingpage}
                src="/images/Group 1194.png"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={style.reasonchoicepeworld}>
              <div>
                <h1>Kenapa harus mencari tallent dipeworld</h1>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-auto">
                    <div className={style.ceckedtalent}>
                      <i class="fa fa-check" style={{ color: "white" }}></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>lorem ipsum dolor sit amet</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <div className={style.ceckedtalent}>
                      <i class="fa fa-check" style={{ color: "white" }}></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>lorem ipsum dolor sit amet</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <div className={style.ceckedtalent}>
                      <i class="fa fa-check" style={{ color: "white" }}></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>lorem ipsum dolor sit amet</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto">
                    <div className={style.ceckedtalent}>
                      <i class="fa fa-check" style={{ color: "white" }}></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>lorem ipsum dolor sit amet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className={style.skilltalent}>
              <div>
                <h1>Skill Talent</h1>
              </div>
              <div className="mt-3">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid quaerat deserunt voluptas doloremque, harum
                  accusantium tempora nesciunt sapiente reprehenderit dolores
                  impedit voluptates quo amet consequuntur culpa laudantium.
                  Magni, ducimus exercitationem.
                </span>
              </div>
              <div className="mt-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>Java</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>Kotlin</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>PHP</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>Javascript</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>Golang</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>C++</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>Ruby</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-2">
                        <div className={style.ceckedskilltalent}>
                          <i class="fa fa-check" style={{ color: "white" }}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>10+ Bahasa lainnya</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className={style.picturethereelandingpage}
                src="/images/Group 1196.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.containeropinionlandingpage}>
        <div className="row text-center">
          <div>
            <h1>Their opinion about peworld</h1>
          </div>
          <div className={style.containeropinionuser}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className={style.card}>
                    <div className="text-center">
                      <img
                        className={style.pictureopinion}
                        src="/images/Ellipse 320.png"
                      />
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-3">
                        <h3>Harry Styles</h3>
                      </div>
                      <div>
                        <span className="text-secondary">Web Developer</span>
                      </div>
                      <div className="mt-2">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim, aut. Necessitatibus quos aspernatur
                          impedit culpa.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className={style.card}>
                    <div className="text-center">
                      <img
                        className={style.pictureopinion}
                        src="/images/Ellipse 323.png"
                      />
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-3">
                        <h3>Niall Hora</h3>
                      </div>
                      <div>
                        <span className="text-secondary">Web Developer</span>
                      </div>
                      <div className="mt-2">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim, aut. Necessitatibus quos aspernatur
                          impedit culpa.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className={style.card}>
                    <div className="text-center">
                      <img
                        className={style.pictureopinion}
                        src="/images/Ellipse 325.png"
                      />
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-3">
                        <h3>Louis Tomlinson</h3>
                      </div>
                      <div>
                        <span className="text-secondary">Web Developer</span>
                      </div>
                      <div className="mt-2">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim, aut. Necessitatibus quos aspernatur
                          impedit culpa.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={style.containerstartlandingpage}>
          <div className={style.bgstartlandingpage}>
            <div className="row">
              <div className="col-md-6 text-center">
                <div className={style.leftside}>
                  <h3>lorem ipsum dolor sit amet</h3>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className={style.rightside}>
                  <button className={style.startbuttontwo}>
                    Mulai Dari Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
