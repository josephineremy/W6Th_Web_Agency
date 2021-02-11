import { useState } from "react";
import './App.css'
import styled from "styled-components";
// import Splash from "./Components/SplashScreen";
import { ThemeProvider } from "styled-components";
import Splash from './Components/Nav';
import About from './Pages/About';
import Works from './Pages/Works';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import StudyCases from './StudyCases/StudyCases';
import ScrollToTop from './Components/ScrollToTop';

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
  toggleBackground: "#1e3d75",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
  toggleBackground: "#75cbfa"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;
`;



function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <div className="App">
      <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}
        />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/works" exact component={Works}/>
        <ScrollToTop />
        <Switch>
          <Route path="/works/:projectId" component={StudyCases}/>
        </Switch>
        <Page />
      </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
