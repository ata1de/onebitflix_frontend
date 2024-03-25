import React from 'react'
import CardComponent from './CardComponent';
import { Container } from 'reactstrap'; 

type CardItem = {
    title: string;
    url_background: string;
    description: string
  };
  
  // Lista de objetos
  const cardItems: CardItem[] = [
    { title: 'PROJETOS', url_background: '/homeNoAuth/imgProjects.png', description: 'Aqui existem cursos de projetos práticos que abrangem desde a concepção de ideias até a implementação de soluções robustas. Aprenda a gerenciar projetos de forma eficiente e a transformar suas ideias em realidade.' },
    { title: 'GIT E GITHUB', url_background: '/homeNoAuth/imgGit.png', description: 'Domine o Git e o GitHub, as ferramentas essenciais para o versionamento de código e o trabalho colaborativo em projetos de software. Aprenda a criar repositórios, gerenciar branches, colaborar em equipes e muito mais.' },
    { title: 'MOBILE', url_background: '/homeNoAuth/imgMobile.png', description: 'Aprofunde seus conhecimentos em desenvolvimento mobile e aprenda a criar aplicativos incríveis para dispositivos móveis. Explore frameworks e técnicas avançadas para tornar suas aplicações mais eficientes.' },
    { title: 'BACK-END', url_background: '/homeNoAuth/imgBackend.png', description: 'Conheça cursos de back-end que abrangem os fundamentos e as tecnologias mais recentes para desenvolver servidores robustos e escaláveis. Aprenda a criar APIs, integrar bancos de dados, gerenciar autenticação e muito mais.' },
    { title: 'FRONT-END', url_background: '/homeNoAuth/imgFrontend.png', description: ' Explore o universo do desenvolvimento front-end e aprenda a criar interfaces web modernas e responsivas. Além de aprender o básico, HTML, CSS, JavaScript, domine frameworks populares para criar experiências de usuário incríveis.' },
    { title: 'CARREIRA', url_background: '/homeNoAuth/imgCareer.png', description: 'Prepare-se para impulsionar sua carreira no mundo da tecnologia. Este curso oferece orientações práticas sobre entrevistas, construção de portfólio, networking e desenvolvimento de habilidades soft e hard para se destacar no mercado de trabalho.' },
];


const CardSection = () => {
    return (
        <div>
            <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
                {cardItems.map((item, index) => (
                    <CardComponent
                        key={index}
                        title={item.title}
                        urlBackground={item.url_background}
                        description = {item.description}
                    />
                ))}
            </Container>
        </div>
    );
};

export default CardSection;