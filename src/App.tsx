import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Logo from "./Logo";
import Park from "./Park";
import Resume from "./Resume";
import Work from "./Work";
import { Card, Container } from "./components/StyledComponent";

function App() {
  return (
  <Container>
    <Card bgcolor="black">
      <Logo />
    </Card>
    <Card bgcolor="#607d8b" id="aboutme">
      <AboutMe />
    </Card>
    <Card bgcolor="#757575" id="work">
      <Work />
    </Card>
    <Card bgcolor="indigo" id="resume">
      <Resume />
    </Card>
    <Card bgcolor="#3a3a3a" id="contact">
      <Contact />
    </Card>
    <Card bgcolor="teal" id="park">
      <Park />
    </Card>
  </Container>
  )
}

export default App
