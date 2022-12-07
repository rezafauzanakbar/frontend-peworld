import React from "react";
import style from "../styles/footer.module.css";

export default function footer() {
  return (
    <footer className={style.footerlandingpage}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container mt-5">
              <div>
                <img
                  className={style.logofooter}
                  src="/images/Group 978 1.png"
                  alt="profile picture"
                />
              </div>
              <div className="mt-4">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias assumenda, doloremque dolorum perferendis sed
                  incidunt veniam doloribus neque. Animi accusantium odio quia
                  hic sint velit est voluptates quo illum atque.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <hr className={style.linebottomfooter} />
        <div className="row">
          <div className="col-md-6 mt-3">
            <h6>2020 Pewworld. All right reserved</h6>
          </div>
          <div className="col-md-6 mt-3">
            <form style={{ textAlign: "right" }}>
              <button className={style.teleponefooter}>Telepon</button>
              <button className={style.emailfooter}>Email</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
