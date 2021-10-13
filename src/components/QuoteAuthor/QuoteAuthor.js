import { useState, useEffect } from "react";
import axios from 'axios';

function QuoteAuthor({author}) {
  const [data,setData] = useState([]);

  useEffect(() => {
      axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=10`)
      .then(res => {
          //console.log(res.data.data);
          setData(res.data.data);
      })
      .catch((error) => console.log(error))
  }, [])


  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", color:"#333333"}}>
      {  data.length >= 1 ?
        <div>
          <div style={{fontSize:"36px", lineHeight:"42px", fontWeight:"bold", margin:"5%", paddingBottom:"10px"}}>{author}</div>
          {data.map((quote, i) => {
            return (
              <div key={i} style={{marginTop:"10%", marginBottom:"10%"}}>
                <div style={{width:"100vh", borderLeft:"8px solid #F7DF94", paddingBottom:"15px", paddingTop:"15px"}}>
                    <div style={{fontSize:"24px", fontWeight:"500",lineHeight:"120%", paddingLeft:"30px"}} >
                        {quote.quoteText}
                    </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
        : <div></div>
      }
    </div>
  );
  }
  
  export default QuoteAuthor;