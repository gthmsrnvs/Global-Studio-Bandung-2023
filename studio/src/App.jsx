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
          <p>Gunakan dua jari untuk melakukan zoom</p>
        </div>
      </div>
      <div>
        <Spline scene="https://prod.spline.design/zDTdTtLm0GVaN2GR/scene.splinecode" />
      </div>
      <h1>Angklung</h1>
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
