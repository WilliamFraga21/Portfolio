import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import newhop from "../../Assets/Projects/NewHope.png";
import solucoes from "../../Assets/Projects/solucoes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newhop}
              isBlog={false}
              title="New-Hope-Front"
              description="Durante meu estágio na faculdade, desenvolvi um projeto significativo que consistiu na criação de um website focado em explorar os impactos da hospitalização no estado emocional e psicológico de pacientes afetados por doenças crônicas. A iniciativa visava fornecer uma plataforma informativa e sensível, destacando os efeitos da internação na saúde mental dos indivíduos. O site foi concebido como uma ferramenta para conscientização e compreensão mais profunda dos desafios enfrentados por aqueles que lidam com doenças crônicas e hospitalização, contribuindo assim para um ambiente mais empático na área da saúde (Vue.js,Bootstrap)"
              ghLink="https://github.com/New-Hope-Saude-Mental/New_Hope_Front"
              demoLink="https://new-hope-front-new-hope.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solucoes}
              isBlog={false}
              title="Soluções-Planejadas"
              description="Desenvolvi um site para uma empresa especializada em marcenaria, com foco principal na produção de móveis escolares destinados a escolas. O projeto visou atender às necessidades específicas de alunos e professores, priorizando eficiência e compreensão. O site foi concebido para refletir a dedicação da empresa em fornecer soluções de mobiliário escolar de alta qualidade, promovendo um ambiente propício ao aprendizado, conforto e praticidade para todos os usuários. (Vue.js,Bootstrap,Vuex)"
              ghLink="https://github.com/Solucao-planejadas/Landing_page_solucao"
              demoLink="https://solucoesplanejadas.com.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="connectFreela"
              description="Como parte de um projeto acadêmico, meu grupo e eu optamos por desenvolver um site voltado para freelancers, seguindo o modelo do 99freelas. O conceito central do projeto permitia que prestadores de serviços e contratantes se cadastrassem, apresentassem suas necessidades ou portfólios, e conectassem-se para colaborações profissionais.

              Para garantir uma arquitetura eficiente, optamos por separar o front-end do back-end. Utilizamos serviços da AWS, hospedando o back-end na EC2 e armazenando imagens na S3. O banco de dados MySQL, também na AWS, foi empregado para gerenciar os dados de maneira segura e eficaz. Além disso, contamos com a plataforma Vercel para implantar e hospedar o front-end, garantindo uma experiência de usuário otimizada.
              
              Este projeto representou não apenas a aplicação prática de conhecimentos adquiridos, mas também a capacidade de implementar uma solução completa e escalável para atender às demandas do mundo real no cenário do mercado de freelancers. FrontEnd(Vue.js,Vuex,Boostrap) Backend(PHP,Laravel)"
              ghLink="https://github.com/Code-Intech"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
