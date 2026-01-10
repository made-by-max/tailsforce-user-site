import "./App.css";
import PetGrid from "./components/PetGrid/PetGrid";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <div className="App">
      <>
        <TopNav />
        <PetGrid />
      </>
    </div>
  );
}
