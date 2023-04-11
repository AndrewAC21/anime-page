import { Route } from "wouter";
import Home from "./pages/Home";
import SpecificAnime from "./pages/SpecificAnime";
function App() {
  return (
    <>
      <Route path="/" component={Home}></Route>
      <Route path="/anime/:id" component={SpecificAnime}></Route>
    </>
  );
}

export default App;
