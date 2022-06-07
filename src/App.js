import About from "./components/About/About"
import Info from "./components/Info/Info"
import Interests from "./components/Interests/Interests"
import Handles from "./components/Handles/Handles"
import Socials from "./components/Socials/Socials"
import "./app.css"
function App() {
    return (
        <div className="app">

          <Info />
          <Handles />
       
  
          <About />
            <Interests />
            <Socials/>
     
      </div>

  );
}

export default App;
