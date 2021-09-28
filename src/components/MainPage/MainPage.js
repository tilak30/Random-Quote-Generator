import { useHistory } from "react-router";


function MainPage({author, quote, field}) {
    let history = useHistory();

    return (
        <div className="App">
            <div>
                {quote}
            </div>
            <div onClick={() => {
                history.push("/AuthorQuote");
            }}>
                <div>
                    {author}
                </div>
                <div>
                    {field}
                </div>
            </div>
            
        </div>
    );
}

export default MainPage;