import { useState } from 'react';
import Home from './components/Home';
import './styles/App.css';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

function App() {
  const handleRefresh = () => {
    window.location.reload();
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  const modeIcon = isDarkMode ? <MdOutlineWbSunny />
  : <IoMdMoon />;


  return (
    <>
      <section className="container-app">
        <header>
          <h1 onClick={handleRefresh}>Shortly</h1>
          <button onClick={toggleDarkMode} className="toggle-button">{modeIcon}</button>
        </header>
        
        <main>
          <Home/>
        </main>
      </section>
    </>
  )
}

export default App;