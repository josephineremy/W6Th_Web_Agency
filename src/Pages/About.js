import React from "react";
import styled from "styled-components";

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


function About() {
  return (
    <Page>
    <div className="About">
      <h1 className="intro-text">DIGITAL INFLUENCE est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h1>
      <br></br><br></br>
      <h3 className="intro-text">De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
      <br></br><br></br>Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</h3>
    </div>
    </Page>
  )

}

export default About;