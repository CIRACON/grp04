import logo from './logo.svg';
import './App.css';
import { CharacterSearch } from './components/CharacterSearch';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className='nav'>
          <section>
            <Link to="/">Search</Link>
          </section>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CharacterSearch />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
