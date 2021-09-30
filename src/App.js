import './App.css';
import SearchPet from './components/SearchPet';
import PetDetails from './components/PetDetails'
import { Router, Link } from "@reach/router";

function App() {
  return (
    <>
      <header>
        <div className="logo"></div>
      </header>

      <Router>
        <SearchPet path="/" />
        <PetDetails path="/pet-details/:id" />
      </Router>
    </>
  );
}

export default App;
