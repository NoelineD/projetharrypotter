import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Form from "./components/Form";
// import History from "./components/History/history";
// import Quiz from "./components/Quiz/quiz.js";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://hp-api.herokuapp.com/api/characters"
      );
      const modifiedData = response.data.splice(0, 30).filter((el) => {
        return el.name.includes(search);
      });
      setData(modifiedData);
    };

    fetchData();
  }, [search]);

  return (
    <div className="App">


      {/* <Header />
      
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="History" element={<History />} />
        <Route path="Quiz" element={<Quiz/>}></Route>
      </Routes>
      </BrowserRouter> */}
      
      <Header/>
      <Hero/>
      <span> <p>Type a Character's Name here  :</p> 
        <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      /> </span>
      {data !== null ? <Characters data={data} /> : null}
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
