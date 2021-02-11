import React from "react";
import styled from "styled-components";
import intro from "../Images/intro.jpeg"

const Page = styled.div`
padding-top: 70px;
display: flex;
justify-content: center;
height: 100vh;
width: 100%;
color: ${props => props.theme.titleColor};
background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;
`;

function Home() {
  return (
    <Page>
    <div className="Home">
      <h1>Confiez vos rêves à des experts du Web</h1><br/>
      <img src={intro} alt="introduction"/>
      <h3 className="intro-text">Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
      <br/><br/><br/>Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</h3>
    </div>
    </Page>
  )

}

export default Home;