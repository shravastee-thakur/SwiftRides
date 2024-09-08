import "remixicon/fonts/remixicon.css";
import "./App.css";
import Book from "./Components/Book";
import Facilities from "./Components/Facilities";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Fleet from "./Components/Fleet";
import Accordion from "./Components/Accordian";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <Facilities />
      <Fleet />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
