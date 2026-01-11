import "./App.css";
import PetHome from "./pages/PetHome";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <div className="App">
      <>
        <TopNav />
        <PetHome />
      </>
    </div>
  );
}
