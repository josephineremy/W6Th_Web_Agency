import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";


  const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.toggleBackground};
  color: yellow;
  &:focus {
    outline:none;
  }
  transition: all .5s ease;
  `;


// const Container = styled.div`
//   display:flex;
//   flex-direction: column;
//   align-items: center;
//   `;

// const Title = styled.h1`
//   color: ${props => props.theme.titleColor};
//   transition: all .5s ease;
//   `;

// const TagLine = styled.span`
//   color: ${props => props.theme.tagLineColor};
//   font-size: 18px;
//   transition: all .5s ease;
//   `;

const Splash = (props) => {
    const changeTheme = () => {
      if (props.theme ==="light") {
        props.setTheme("dark");
      } else {
        props.setTheme("light");
      }
    };

    const navStyle = {
      color: 'white'
    }


    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <div>
    <nav>
      <ul className="nav-links">
      <Link style={navStyle} to="/"><h3>DIGITAL INFLUENCE</h3></Link>
        <Link style={navStyle} to="/about"><li>Agence</li></Link>
        <Link style={navStyle} to="/works"><li>Projets</li></Link>
        <Toggle onClick={changeTheme}>
        {icon}
      </Toggle>
      </ul>
    </nav>
  </div>
  )

}

export default Splash;