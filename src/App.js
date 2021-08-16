import logo from './logo.svg';
import './App.css';
import Content from './Components/Content/Content';
import Intro from './Components/Intro/Intro';
import Way from './Components/Way/Way';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">

     
      <Menu/>
      <Intro/>
     <Content/>
     <h1>this is netflixa</h1>
    </div>
  );
}

export default App;
