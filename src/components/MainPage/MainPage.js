import { useHistory } from "react-router";


function MainPage({author, quote, field}) {
    let history = useHistory();

    return (
        <div className="App" >
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", marginTop:"7%", marginBottom:"15px"}}>
                <div style={{width:"100vh", borderLeft:"8px solid #F7DF94", paddingBottom:"15px", paddingTop:"15px"}}>
                    <div style={{fontSize:"36px", fontWeight:"500",lineHeight:"120%", paddingLeft:"30px"}} >
                        {quote}
                    </div>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center",marginLeft:"25%", marginTop:"5%"}}>
                <div style={{fontSize:"24px", fontWeight:"bold", color:"#4F4F4F"}}>
                    {author}
                </div>
                <div style={{fontSize:"14px", fontWeight:"500", color:"#828282"}}>
                    {field}
                </div>
            </div>
            
        </div>
    );
}

export default MainPage;