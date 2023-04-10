import "./App.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import HomeScreen from "./Screens/HomeScreen";
import ProductDescScreen from "./Screens/ProductDescScreen";
// import Rating from "react-rating";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Rating
        emptySymbol="glyphicon glyphicon-heart-empty"
        fullSymbol="glyphicon glyphicon-heart"
      /> */}
      <Routes>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductDescScreen} />
      </Routes>
    </div>
  );
}

export default App;
