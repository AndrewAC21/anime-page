import { Route } from "wouter";
import { AnimesContextProvider } from "./context/AnimesContext";
import Home from "./pages/Home";
import SpecificAnime from "./pages/SpecificAnime";
function App() {
  return (
    <>
      <AnimesContextProvider>
        <Route path="/" component={Home}></Route>
        <Route path="/anime/:id" component={SpecificAnime}></Route>
      </AnimesContextProvider>
    </>
  );
}

export default App;
