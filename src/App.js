import Routes from "./Routes";
import Header from "./component/layout/Header";
import Content from "./component/layout/Content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Content>
                <Routes/>
            </Content>
        </div>
    );
}

export default App;
