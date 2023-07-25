import React, { useEffect } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  useEffect(() => {
    var modal = document.getElementById("myModal");
    var span = document.getElementById("close");

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <button id="close" className="close">
            &times;
          </button>
          <p>
            Selamat datang di aplikasi Seni! Di sini Anda akan belajar lebih
            banyak tentang karya seni tradisional yang ada di sekitar Anda.
            Gunakan dua jari untuk memperbesar. Setiap pemindaian kode QR akan
            membuka lokasi
          </p>
        </div>
      </div>
      <div id="spline">
        <Spline scene="https://prod.spline.design/zDTdTtLm0GVaN2GR/scene.splinecode" />
      </div>
      <h1 id="heading">Angklung</h1>
      <p>
        Angklung adalah alat musik bambu yang telah ada sejak berabad-abad lalu
        dan merupakan bagian penting dari budaya Sunda. Alat musik ini dimainkan
        dengan cara digoyangkan untuk menghasilkan suara dan dapat dimainkan
        dalam berbagai genre, termasuk musik tradisional Sunda, jazz, dan pop.
      </p>
    </>
  );
}

export default App;
