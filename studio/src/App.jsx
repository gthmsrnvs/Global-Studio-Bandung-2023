import React, { useEffect } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";
import soundFile from "./assets/sdo.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const audio = new Audio(soundFile);

  function playSound() {
    audio.play();
  }

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
      <div id="content">
        <div id="spline">
          <Spline scene="https://prod.spline.design/zDTdTtLm0GVaN2GR/scene.splinecode" />
        </div>
        <div id="text">
          <div className="headingContainer">
            <h1 id="heading">Angklung</h1>
            <button onClick={playSound} className="soundButton">
              <FontAwesomeIcon icon={faVolumeUp} />
            </button>
          </div>
          <p>
            Angklung adalah alat musik bambu yang telah ada sejak berabad-abad
            lalu dan merupakan bagian penting dari budaya Sunda. Alat musik ini
            dimainkan dengan cara digoyangkan untuk menghasilkan suara dan dapat
            dimainkan dalam berbagai genre, termasuk musik tradisional Sunda,
            jazz, dan pop.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
