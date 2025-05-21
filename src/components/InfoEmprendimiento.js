import React from 'react';
import '../styles/InfoEmprendimiento.css';

function InfoEmprendimiento() {
  return (
    <div className="info-container">
      <h1>Emprendimiento e Innovación en Colombia</h1>
      <p>
        El emprendimiento es una fuerza clave para el desarrollo económico del país, fomentando la generación de empleo, la inclusión social y la transformación digital. En Colombia, cada vez más personas están apostando por crear sus propias empresas, especialmente en sectores como tecnología, comercio y servicios.
      </p>

      <div className="image-text-row">
        <img
          src="../../images/mujeresemprenden.jpeg"
          alt="Emprendimiento Femenino"
          className="info-image"
        />
        <div className="side-text">
          <p>
            El emprendimiento femenino impulsa la equidad, dinamiza la economía y crea comunidades más resilientes. Las mujeres emprendedoras generan empleo, innovación y bienestar social.
          </p>
        </div>
      </div>

      <h2>Conceptos Clave</h2>
      <ul>
        <li><strong>Emprendimiento:</strong> Es la capacidad de identificar oportunidades y convertirlas en proyectos sostenibles y con impacto.</li>
        <li><strong>Innovación:</strong> Introducción de ideas nuevas que generan valor, ya sea en productos, servicios o procesos.</li>
        <li><strong>PYME:</strong> Pequeñas y Medianas Empresas que representan más del 90% del tejido empresarial colombiano.</li>
      </ul>

      <h2>Organizaciones de Apoyo</h2>
      <ul>
        <li><strong>INNpulsa Colombia:</strong> Entidad que promueve el crecimiento empresarial y la innovación.</li>
        <li><strong>Parque E:</strong> Incubadora de negocios enfocada en emprendimientos innovadores y sostenibles.</li>
        <li><strong>Cámara de Comercio:</strong> Brinda formación, redes de apoyo y acceso a financiación.</li>
        <li><strong>SENA:</strong> Ofrece formación y asesoría técnica a emprendedores en todo el país.</li>
      </ul>
    </div>
  );
}

export default InfoEmprendimiento;
