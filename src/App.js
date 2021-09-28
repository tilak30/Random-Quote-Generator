import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import QuoteAuthor from "./components/QuoteAuthor/QuoteAuthor";
import Random from "./components/Random/Random";

function App() {
  const [quote, setQuote] = useState("Most people never run far enough on their first wind to find out they've got a second.");
  const [author, setAuthor] = useState("William James");
  const [field, setField] = useState("sports");

  const handleClick = () => {

    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.data[0].quoteText);
        setAuthor(data.data[0].quoteAuthor);
        setField(data.data[0].quoteGenre);
      });
  };

  return (
    <div className="App">
      <Router>
        <Random handleClick={handleClick} />
        <Switch>
          <Route exact path="/" >
            <MainPage author={author} quote={quote} field={field} />
          </Route>
          <Route exact path="/AuthorQuote">
            <QuoteAuthor author={author}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
