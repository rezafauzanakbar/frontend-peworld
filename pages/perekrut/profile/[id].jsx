import React from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "../../../component/footer";
import Navbar from "../../../component/navbar_perekrut";
import Link from "next/link";
import style from "../../../styles/profile-perekrut.module.css";
import Image from "next/image";

//SSG
// export async function getStaticProps(context) {
//   const { id } = context.params;
//   try {
//     const response = await axios({
//       method: "GET",
//       url: `${process.env.NEXT_PUBLIC_API_URL}/perekrut/detail/${id}`,
//     });
//     return {
//       props: {
//         data: response.data.rows,
//       },
//       revalidate: 10,
//       notFound: false,
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: null,
//       },
//       revalidate: 10,
//       notFound: true,
//     };
//   }
// }

// export async function getStaticPaths() {
//   const response = await axios({
//     method: "GET",
//     url: `${process.env.NEXT_PUBLIC_API_URL}/perekrut`,
//   });
//   const paths = response.data.rows.map((item) => {
//     return { params: { id: item.id_perekrut.toString() } };
//   });
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }

//SSR
export async function getServerSideProps(context) {
  try {
    const { id } = context.params;
    const response = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/perekrut/detail/${id}`,
    });
    // console.log(response.data)
    return {
      props: {
        data: response.data.rows,
        error: false,
        errorMessage: "",
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        error: true,
        errorMessage: "error API",
      },
    };
  }
}

export default function Detail(props) {
  const router = useRouter();
  const logout = () => {
    swal({
      title: "Logout",
      text: "Are you sure that you want to logout?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        localStorage.clear();
        swal({
          title: "Logout",
          text: "Logout Successfully!",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            return router.push("/before-login/before-login");
          }
        });
      }
    });
  };
  return (
    <section>
      <Navbar />
      <div className={style.containercustomprofile}>
        <div className={style.latarunguprofile}></div>
        <div className={`text-center ${style.latarwhiteprofile}`}>
          <div className="container">
            {props.data.map((data, index) => (
              <div key={index.id_perekrut} className={style.containerprofile}>
                <div className="text-center">
                  <Image
                    className={style.profilepicture}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/foto user/${data.photo}`}
                    alt=""
                    height={150}
                    width={150}
                  />
                </div>
                <div className="mt-3">
                  <h5>{data.perusahaan}</h5>
                </div>
                <div className="mt-1">
                  <span>{data.jabatan}</span>
                </div>
                <div className="mt-1">
                  <span className="text-secondary">{data.address}</span>
                </div>
                <div className="mt-3">
                  <span className="text-secondary">{data.description}</span>
                </div>
                <Link href="/perekrut/edit-profile/edit-profile">
                  <div className="mt-4">
                    <button className={style.buttonhireprofile}>
                      Edit Profile
                    </button>
                  </div>
                </Link>
                <div className="mt-1">
                  <button onClick={logout} className={style.buttonhirelogout}>
                    Log Out
                  </button>
                </div>
                <div className="text-center mt-5">
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <Image
                          src="/images/mail (4).png"
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">{data.email}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <Image
                          src="/images/instagram.png"
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="col-auto">
                        {data.instagram == null ? (
                          <span className="text-secondary">
                            @your_instagram
                          </span>
                        ) : (
                          <span className="text-secondary">
                            {data.instagram}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <Image
                          src="/images/Vector (1).png"
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">{data.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <div className="col-auto">
                        <Image
                          src="/images/linkedin 1.png"
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="col-auto">
                        {data.linkedin == null ? (
                          <span className="text-secondary">
                            @your_lingkedin
                          </span>
                        ) : (
                          <span className="text-secondary">
                            {data.linkedin}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
