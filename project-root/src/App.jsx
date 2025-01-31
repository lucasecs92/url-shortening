import Home from './components/Home';
import './styles/App.css';

function App() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <section className="container-app">
        <header>
          <h1 onClick={handleRefresh}>Shortly</h1>
        </header>
        
        <main>
          <Home/>
        </main>
      </section>
    </>
  )
}

export default App;