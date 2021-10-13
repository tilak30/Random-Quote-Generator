import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import QuoteAuthor from "./components/QuoteAuthor/QuoteAuthor";

function App() {
  const [quote, setQuote] = useState("“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”");
  const [author, setAuthor] = useState("Bill Gates");
  const [field, setField] = useState("business");

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
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div onClick={handleClick} className="header" style={{display:"flex", width:"100%", justifyContent:"end", marginRight:"10px", marginTop:"10px"}}>
            <div style={{paddingRight:"10px", fontSize:"20px"}}>random</div>
            <img style={{paddingRight:"10px", height:"22px"}} src="https://img.icons8.com/ios-glyphs/50/000000/refresh--v2.png" alt="loader"/>
          </div>
        </Link>
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
