import "./MainPage.css";
import { Link } from "react-router-dom";


function MainPage({author, quote, field}) {

    return (
        <div className="App" >
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", marginTop:"7%", marginBottom:"15px"}}>
                <div style={{width:"100vh", borderLeft:"8px solid #F7DF94", paddingBottom:"15px", paddingTop:"15px"}}>
                    <div style={{fontSize:"36px", fontWeight:"500",lineHeight:"120%", paddingLeft:"30px"}} >
                        {quote}
                    </div>
                </div>
            </div>
            <Link to="/AuthorQuote" style={{ textDecoration: 'none' }}>
                <div className="author" style={{display:"flex", justifyContent: "space-between", alignItems:"center", width:"45%", height:"15vh", paddingLeft:"50px", paddingRight:"25px", marginLeft:"25%", marginTop:"5%"}}>
                    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                        <div className="authorname">
                            {author}
                        </div>
                        <div style={{fontSize:"14px", fontWeight:"500", color:"#828282", paddingTop:"5px"}}>
                            {field}
                        </div>
                    </div>
                    <img style={{height: "20px"}} src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-3.png"/>
                </div> 
            </Link>           
        </div>
    );
}

export default MainPage;