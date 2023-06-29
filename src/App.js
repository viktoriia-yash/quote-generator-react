import React, { useEffect, useState } from "react";
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
        <div className="quotation-mark-container">
          <p className="quotation-mark">&#8220;</p>
        </div>
        <div className="advice-quote">
          <h2>{quote}</h2>
        </div>
        <div className="quote-author">
          <div>{author}</div>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={fetchNewQuote}>
            New Quote
          </button>
        </div>
        <div className="quotation-mark-container">
          <p className="quotation-mark">&#8221;</p>
        </div>
      </div>
      <p className="credit">
        <a
          href="https://github.com/viktoriia-yash/quote-generator-react"
          className="github"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Viktoriia Yashkina
      </p>
    </div>
  );
}

export default App;
