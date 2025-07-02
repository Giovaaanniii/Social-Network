import "./App.css";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper-app">
          <Navigation />
      <Profile />
      </div>

    </>
  );
}

export default App;
