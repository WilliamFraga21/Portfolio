import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> APRESENTAR </span> ME
            </h1>
            <p className="home-about-body">
              Iniciei minha jornada na programação quando gerenciava um servidor
              de Minecraft para PC, o que me levava a mexer um pouco no código
              para personalizar o servidor.
              <br />
              <br />
              {/* <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i> */}
              <br />
              <br />
              Atualmente, possuo um conhecimento mais abrangente no mundo da
              web, dominando as linguagens:
              <br />
              <br />
              <ul class=" purple">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Vuex</li>
              </ul>
              <br />
              <br />
              Além disso, também sou proficientemente versado em outras
              linguagens:
              <ul class="purple">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Android (Java para Android)</li>
                <li>Java</li>
              </ul>
              <br />
              Meus conhecimentos estendem-se ainda a:
              <ul class="purple">
                <li>SQL</li>
                <li>SQL Server</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>MariaDB</li>
                <li>PowerBI</li>
                <li>AWS (EC2, S3)</li>
              </ul>
              <br />
              <br />
              Sempre que possível, dedico tempo ao estudo aprofundado das
              linguagens mencionadas ou para explorar novas adições ao meu
              repertório.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE ME EM</h1>
            <p>
              Sinta-se à vontade para se{" "}
              <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/WilliamFraga21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/william-victor-soares-silva-marques-fraga-1a7104233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/william_fraga00/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
