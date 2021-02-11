import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import projects from "../StudyCases/projects";

const Page = styled.div`
display: flex;
justify-content: center;
height: 100vh;
width: 100%;
color: ${props => props.theme.titleColor};
background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;
`;


function Works() {
  return (
    <Page>
    <div className="Works">
      <h1 className="pageTitle">Les projets menés par Digital Influence</h1>
      <section>
        <div className="projects d-flex row">
          {projects.map (({id, slug, title, subtitle, image}) => (
          <div key={id} className="card col-lg-5 col-md-7 col-sm-10 col-xs-10">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle text-muted">{subtitle}</h6>
            </div>
            <img src={image} className="d-block user-select-none" width="100%" aria-label="Placeholder: Image cap" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180"/>
            <div className="card-body">
              <Link to={`/works/${slug}-study-case`}>En savoir plus</Link>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
    </Page>
  )

}

export default Works;