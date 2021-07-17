import Routes from "./Routes";
import Header from "./component/layout/Header";
import MainContent from "./component/layout/MainContent";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent>
                <Routes/>
            </MainContent>
        </div>
    );
}

export default App;
