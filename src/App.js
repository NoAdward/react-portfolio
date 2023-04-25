import "./App.scss";
import Contact from "./components/Contact/Contact";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Visual from "./components/Visual/Visual";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Featured />
      <Visual />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
