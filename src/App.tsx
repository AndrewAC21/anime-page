import { Route } from "wouter";
import { AnimesContextProvider } from "./context/AnimesContext";
import Home from "./pages/Home";
import SpecificAnime from "./pages/SpecificAnime";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <AnimesContextProvider>
        <Navbar />
        <Route path="/" component={Home}></Route>
        <Route path="/anime/:id">
          {(params) => <SpecificAnime params={params} />}
        </Route>
      </AnimesContextProvider>
    </>
  );
}

export default App;
