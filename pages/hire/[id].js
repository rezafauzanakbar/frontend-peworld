import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/hire.module.css";
import Navbar from "../../component/navbar_perekrut";
import Footer from "../../component/footer";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { id } = context.params;
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:3001/user/detail/${id}`,
    });
    return {
      props: {
        data: response.data,
      },
      revalidate: 10,
      notFound: false,
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
      revalidate: 10,
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const response = await axios({
    method: "GET",
    url: `http://localhost:3001/user/all`,
  });
  const paths = response.data.rows.map((item) => {
    return { params: { id: item.id_user.toString() } };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

const Detail = (props) => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [perekrut, setPerekrut] = useState("");
  const [form, setForm] = useState({
    id_user: "",
    id_perekrut: "",
    name_project: "",
    description_project: "",
    email: "",
    phone: "",
    name: "",
  });

  useEffect(() => {
    getUser();
    getPerekrut();
  }, []);

  const getUser = () => {
    const data = props.data.map((data) => data.id_user);
    setUser(data[0]);
  };

  const getPerekrut = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_perekrut;
    setPerekrut(id);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      id_user: user,
      id_perekrut: perekrut,
      name_project: form.name_project,
      description_project: form.description_project,
      email: form.email,
      phone: form.phone,
      name: form.name,
    };
    axios
      .post(`http://localhost:3001/hire/insert`, body)
      .then((res) => {
        console.log(res.data);
        alert("Hire Successfully");
        router.push("/perekrut/result-hire/result-hire");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <Navbar />
      <div className={style.containereditprofile}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {props.data.map((data, index) => (
                <div key={index} className={style.profile}>
                  <div className="text-center">
                    <img
                      className={style.pictureuser}
                      src={`http://localhost:3001/foto user/${data.photo}`}
                      alt=""
                    />
                  </div>
                  <div className="mt-3">
                    <h5>{data.name}</h5>
                  </div>
                  <div className="mt-2">
                    {data.title == null ? (
                      <span className="text-secondary">Programmer</span>
                    ) : (
                      <span className="text-secondary">{data.title}</span>
                    )}
                  </div>
                  <div className="mt-2">
                    {data.city == null ? (
                      <span className="text-secondary">Bandung, Indonesia</span>
                    ) : (
                      <span className="text-secondary">
                        {data.city}, Indonesia
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    {data.description == null ? (
                      <span className="text-secondary">
                        Hello, nice to meet you. Iam Programmer profesional!
                      </span>
                    ) : (
                      <span className="text-secondary">{data.description}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-8">
              <div className={style.containerform}>
                {props.data.map((data, index) => (
                  <div key={index}>
                    <h1>Hubungi {data.name}</h1>
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nihil, voluptatibus quas harum dolore, molestiae
                      doloremque consectetur perferendis illum quis magni nisi
                      eos nostrum id. Aliquid dicta voluptas autem quae
                      voluptatem!
                    </span>
                  </div>
                ))}

                <form onSubmit={(e) => onSubmit(e)} className="mt-5">
                  <div className="form-group">
                    <div className="mb-3 form-group">
                      <label
                        style={{ color: "#696f79" }}
                        className="form-label"
                      >
                        Tujuan tentang pesan ini
                      </label>
                      <input
                        type="text"
                        className="input form-control"
                        id=""
                        onChange={(e) =>
                          setForm({ ...form, name_project: e.target.value })
                        }
                      />
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
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
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
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
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
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
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
                        onChange={(e) =>
                          setForm({
                            ...form,
                            description_project: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className={style.buttonhire}>
                      Hire
                    </button>
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
};

export default Detail;
