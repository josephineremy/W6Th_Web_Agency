import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "./projects";
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


const StudyCase = () => {

  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
  console.log(projectId)
    setCurrentProject(
      projects.find((project) => `${project.slug}-study-case` === projectId)
      );
  }, [projectId]);

  return (
    <Page>
    {currentProject && (
      <div>
      <h1>{currentProject.title}</h1><br></br>
      <img src={currentProject.image} alt="the one project illustration"/>
      <h3 className="intro-text">{currentProject.subtitle}</h3>
      <p className="intro-text">{currentProject.description}</p>
    </div>
    )}
  </Page>
  );
}

export default StudyCase;