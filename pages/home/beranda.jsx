import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import style from "../../styles/beranda.module.css";
import Navbar from "../../component/navbar-login";
import NavbarPerekrut from "../../component/navbar_perekrut";
import Footer from "../../component/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("id_user");
  const [asc, setAsc] = useState("asc");
  const [query, setQuery] = useState("");
  const [local, setLocal] = useState("");
  const [hire, setHire] = useState([]);

  useEffect(() => {
    getDatalocal();
    getData(sort, asc, 3, page);
  }, [sort, asc, page]);

  const getDatalocal = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    setLocal(data);
  };

  const getData = (sort, asc, limit, page) => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/user?sort=${sort}&asc=${asc}&limit=${limit}${
          page ? `&page=${page}` : ""
        }`
      )
      .then((res) => {
        setHire(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const NextPage = () => {
    setPage(page + 1);
    getData(sort, asc, 3, page);
  };

  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      getData(sort, asc, 3, page - 1);
    }
  };

  //SORTING
  const handleSorting = () => {
    if (sort == "id_user") {
      setSort("name");
    } else {
      setSort("id_user");
    }
    getData(sort, asc, 3, page);
  };

  // ASCENDING
  const handleSortingAsc = () => {
    if (asc == "asc") {
      setAsc("desc");
    } else {
      setAsc("asc");
    }
    getData(sort, asc, 3, page);
  };

  const search = (data) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <section>
      {local.level == 1 ? <NavbarPerekrut /> : <Navbar />}
      <div className={style.containertobjobs}>
        <div className="container">
          <div className={style.nametitle}>
            <h5>Top Jobs</h5>
          </div>
        </div>
      </div>
      <div className={style.containerhome}>
        <div className="container">
          <div className={style.containersearch}>
            <form>
              <div className="row">
                <div className="col-md-9">
                  <div className={style.searchhome}>
                    <input
                      className={style.inputsearchhome}
                      type="text"
                      placeholder="Search for name"
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={style.categoryhome}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className={style.containersort}>
                          <div className="btn-group">
                            <button
                              type="button"
                              className={style.buttonsort}
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="text-secondary">
                                <i className="fa fa-caret-down" /> Sort
                              </span>
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  onClick={() => handleSorting()}
                                >
                                  Sortir berdasarkan {sort.toUpperCase()}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  onClick={() => handleSortingAsc()}
                                >
                                  Sortir berdasarkan {asc.toUpperCase()}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={style.containerbuttonsearch}>
                          <button className={style.buttonsearch}>Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className={style.containermain}>
            {hire == "" ? (
              <span className="text-center">Data not found!</span>
            ) : (
              search(hire).map((data, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col-md-2">
                      <div className="text-center mt-3">
                        <Image
                          className={style.pictureuser}
                          src={`${process.env.NEXT_PUBLIC_API_URL}/foto user/${data.photo}`}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h5>{data.name}</h5>
                      </div>
                      <div>
                        {data.title == null ? (
                          <span className="text-secondary">Programmer</span>
                        ) : (
                          <span className="text-secondary">{data.title}</span>
                        )}
                      </div>
                      <div>
                        {data.city == null ? (
                          <span className="text-secondary">
                            <i className="fa fa-location-dot" />
                            Bandung
                          </span>
                        ) : (
                          <span className="text-secondary">
                            <i className="fa fa-location-dot" />
                            {data.city}
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        <ul className={style.ulskill}>
                          <li className={style.listskilluser}>PHP</li>
                          <li className={style.listskilluser}>Javascript</li>
                          <li className={style.listskilluser}>HTML</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="mt-5">
                        <Link href={`/profile/${data.id_user}`}>
                          <button className={style.buttonviewprofile}>
                            Lihat Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="btn btn-warning-custom page-link"
                disabled={page == 1}
                onClick={() => PreviousPage()}
              >
                Previous
              </button>
            </li>
            <li style={{ marginLeft: 3 }}>
              <button className="btn btn-warning-custom page-link">
                {page}
              </button>
            </li>
            <li style={{ marginLeft: 3 }} className="page-item">
              <button
                className="btn btn-warning-custom page-link"
                disabled={hire <= 0}
                onClick={() => NextPage()}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}
