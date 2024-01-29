import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos! Meu nome é
            <span className="purple"> William Victor, </span>
            sou natural de <span className="purple"> São Paulo, Brasil.</span>
            Atualmente, estou dedicando meu tempo ao curso de Tecnólogo em
            Desenvolvimento de Software Multiplataforma na Fatec Zona Sul, com
            previsão de conclusão no final de 2024. <br /> Para além dos
            estudos, tenho algumas outras paixões e hobbies que me acompanham:{" "}
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames, explorando mundos virtuais e
              desafiando minhas habilidades.
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar, descobrindo novos lugares e absorvendo
              diversas culturas.
            </li>
            <li className="about-activity">
              <ImPointRight /> Passear em parques, aproveitando a natureza e
              momentos de descontração.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que façam a diferença!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
