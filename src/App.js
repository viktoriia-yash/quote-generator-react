import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("Hi");
  const [author, setAuthor] = useState("Hello");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="advice-quote">
          <h2>{quote}</h2>
          <div>{author}</div>
        </div>
        <div className="btn-container">
          <button onClick={fetchNewQuote}>I need advice</button>
        </div>
      </div>
    </div>
  );
}

export default App;
