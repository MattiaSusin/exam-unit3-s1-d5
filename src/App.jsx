import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TopBar from './components/TopBar';
import ContentMain from "./components/ContentMain";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <ContentMain/>
      <MyFooter/>
    </div>
  );
}

export default App;
