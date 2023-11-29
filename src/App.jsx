import Header from './components/Header';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-wrap px-2 py-8 md:px-0">
        <Card />
      </div>
    </>
  );
}

export default App;
