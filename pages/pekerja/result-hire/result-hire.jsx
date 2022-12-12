import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/beranda.module.css";
import Navbar from "../../../component/navbar-login";
import Footer from "../../../component/footer";
import Link from "next/link";

export default function ResultHire() {
  const [hire, setHire] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    getData(id);
  }, []);

  const getData = (id) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/hire/user/${id}`)
      .then((res) => {
        setHire(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <Navbar />
      <div className={style.containertobjobs}>
        <div className="container">
          <div className={style.nametitle}>
            <h5>Top Jobs</h5>
          </div>
        </div>
      </div>
      <div className={style.containerhome}>
        <div className="container">
          <div className={style.containermain}>
            <div>
              <h5>Hiring You :</h5>
              <hr />
            </div>
            {hire.map((data, index) => (
              <div key={index}>
                <div className="container">
                  <div>
                    <span className="text-secondary">Name Project :</span>
                    <h5>{data.name_project}</h5>
                  </div>
                  <div>
                    <span className="text-secondary">
                      Description Project :{" "}
                    </span>
                    <p className="mt-1">{data.description_project}</p>
                  </div>
                  <div>
                    <Link href={`/pekerja/result-hire/${data.id_hire}`}>
                      <button className="btn btn-success">Accept</button>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
