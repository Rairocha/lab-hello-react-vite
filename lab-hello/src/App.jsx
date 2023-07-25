// src/App.jsx
import './App.css';

import Actions from "./components/Actions.jsx";
import Button from "./components/Button.jsx";
import NavBar from "./components/NavBar.jsx";
import Message from "./components/Message.jsx";

import logo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";
import image1 from "./assets/icon1.png";
import image2 from "./assets/icon2.png";
import image3 from "./assets/icon3.png";
import image4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="headerImages">
        <nav id='navbar'>
          <ul>
          <NavBar image={logo} />
          <NavBar image={menu} />
          </ul>
        </nav>
        </div>
        <div className="headerContent">
          
          <Message />
          <Button />
        </div>
      </header>
      <section className="section">
        <Actions image={image1} name={'Declarative'} message={'React makes it painless to create interactive UIs'}/>
        <Actions image={image2} name={'Components'} message={'Build encapsulated components that manage their state.'}/>
        <Actions image={image3} name={'Single-Way'} message={"A set of immutable values are passed to the component's."}/>
        <Actions image={image4} name={'JSX'} message={'Statically-typed, designed to run on modern browsers.'}/>
      </section>
    </div>
  );
}

export default App;