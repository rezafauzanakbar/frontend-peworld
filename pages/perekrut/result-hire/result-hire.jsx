import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/beranda.module.css";
import Navbar from "../../../component/navbar_perekrut";
import Footer from "../../../component/footer";
import Link from "next/link";

export default function ResultHire() {
  const [hire, setHire] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_perekrut;
    getData(id);
  }, []);

  const getData = (id) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/hire/perekrut/${id}`)
      .then((res) => {
        setHire(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHire = (id_hire) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/hire/delete/${id_hire}`)
      .then((res) => {
        console.log(res);
        alert("Delete Success");
        return router.push("/perekrut/result-hire/result-hire");
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
            {hire == "" ? (
              <span className="text-center">Loading...</span>
            ) : (
              hire.map((data, index) => (
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
                      <button
                        onClick={(e) => deleteHire(data.id_hire, e)}
                        className="btn btn-danger"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
