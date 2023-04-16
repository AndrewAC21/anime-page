import { Route } from "wouter";
import { AnimesContextProvider } from "./context/AnimesContext";
import Home from "./pages/Home";
import SpecificAnime from "./pages/SpecificAnime";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <AnimesContextProvider>
        <SearchBar />
        <Route path="/" component={Home}></Route>
        <Route path="/anime/:id" component={SpecificAnime}></Route>
      </AnimesContextProvider>
    </>
  );
}

export default App;
