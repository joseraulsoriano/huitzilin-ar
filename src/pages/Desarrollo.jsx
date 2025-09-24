import { useEffect, useState } from "react";
import "../styles/Desarrollo.css";
import NavBar from "../components/NavBar";
import NegroHuit from "../assets/definitivomain.svg"
import Logo from "../assets/huitzillin_logo 1.svg";
import Plano from "../assets/plane.png";
import Footer from "../components/Footer";
import React from 'react';
import Top from "../assets/top.png";
import { useModelViewer } from "../hooks/useModelViewer";
import LoadingSpinner from "../components/LoadingSpinner";

const Desarrollo = () => {
  const handleDragStart = (e) => e.preventDefault();
  const { isLoading, isError, activateAR } = useModelViewer();
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const esMovilDetectado = /android|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setEsMovil(esMovilDetectado);
  }, []);
    
  const handleAR = () => {
    const success = activateAR();
    if (!success) {
      alert('AR no está disponible en este dispositivo o navegador.');
    }
  };
      //const handleChangeMaterial = () => {
        //setCounter(counter + 1)
        //if(counter%2 ===0){
            //setMaterial("/Huitzillin_fibra.glb");
            //setLabelMaterial("Modelo CAD")
            
        //}
       // else {
          //  setMaterial("/definit.glb");
           // setLabelMaterial("Fibra de Carbono")
       // }
        //console.log(counter);
     // }
    

    return (
        <>
        <NavBar></NavBar>

            <header className="header-desarrollo">
            
            <h3 >HUITZILLIN V1</h3>
            
            <p>
              El Futuro de los No-Tripulados
            </p>
            {/*<button className="ar-button-secondary" onClick={handleChangeMaterial}>{labelMaterial}</button>*/}
            {esMovil && (
  <button onClick={handleAR} className="ar-button-primary">
    Conoce Huitzillin en AR
  </button>
)}
            <div className="ar-container">
              {isLoading && (
                <LoadingSpinner 
                  size="large" 
                  text="Cargando modelo 3D..." 
                />
              )}
              {isError && (
                <div className="error-message">
                  <p>Error al cargar el modelo 3D. Por favor, recarga la página.</p>
                </div>
              )}
              <model-viewer
                id="modelo"
                src="final_design.glb"
                ar
                ar-modes="scene-viewer webxr quick-look"
                auto-rotate
                camera-controls
                environment-image="neutral"
                shadow-intensity="1"
                ar-scale="auto"
                exposure="1.2"
                camera-orbit={!esMovil ? "90deg 0deg 0m" : "90deg 0deg auto"}
                class="model-viewer"
                style={{ display: isLoading || isError ? 'none' : 'block' }}
              ></model-viewer>
            </div>
            
            </header>
            <main>

              <section className="specs-huitzillin">
              <div className="info-desarrollo">
                <h3>HUITZILLIN V1</h3>
                <p>El proyecto “Huitzillin” es un demostrador y validador de tecnología enfocado al desarrollo de Aeronaves No Tripuladas tipo RPAS con objetivos de aplicación civil e industrial. Consiste en una aeronave no tripulada controlada a distancia con capacidades de despegue y aterrizaje vertical, y vuelo estático y de ala fija. Su objetivo esta enfocado en misiones de vigilancia, rastreo e identificación de objetivos clave, sobresaliendo por sus capacidades de autonomía, eficiencia, versatilidad y escalabilidad. </p>
                <p>La aeronave está diseñada con un módulo VTOL de cuadricóptero que le permite despegar y aterrizar desde cualquier lugar al igual que mantener un vuelo estático y estable sobre un punto en específico del cual se quiera obtener imágenes. La aeronave esta diseñada para volar largas distancias por lo que cuenta con sistemas de transmisión de video y telemetría en tiempo real a una estación terrena la cual ayuda a monitorear y controlar el vuelo en todo momento. </p>
            </div>
              </section>
          
                <section className="specs-huitzillin">
                
                <div className="info-desarrollo">
                <h4>HUITZILLIN V1</h4>
                <h3>Especificaciones generales</h3>

                <div className="table-specs">
                    <p>CONFIGURACIÓN GENERAL</p>
                    <p>VTOL</p>
                </div>
                <div className="table-specs">
                    <p>ENVERGADURA</p>
                    <p>2.78 M</p>
                </div>
                <div className="table-specs">
                    <p>LONGITUD</p>
                    <p>1.5 M</p>
                </div>
                <div className="table-specs">
                    <p>TIPO DE ALA</p>
                    <p>ALA ALTA TRAPEZOIDAL SECCIONADA</p>
                </div>
                <div className="table-specs">
                    <p>VELOCIDAD (VC)</p>
                    <p>120 KM/H</p>
                </div>
                <div className="table-specs">
                    <p>VELOCIDAD MÁXIMA</p>
                    <p>180 KM/H</p>
                </div>
                <div className="table-specs">
                    <p>TIEMPO ESTIMADO DE VUELO</p>
                    <p>3 HORAS</p>
                </div>
            </div>

            {/*<img src={Top} alt="" />*/}
                </section>
               
            </main>
            <Footer></Footer>
            
        </>
    )
}

export default Desarrollo;