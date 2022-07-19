import Header from "./Components/Header/Header";
import Contacts from "./Components/Contacts/Contacts";
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills"
import Portfolio from "./Components/Portfolio/Portfolio"
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
