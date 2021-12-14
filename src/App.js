import './App.css';
import HomePage from './Pages/Home';
import Products from './utilities/FakeData/Product.json';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-regal-blue">
        {Products.map((item, i) => (
          <div key={Math.random()}>{JSON.stringify(item)}</div>
        ))}
      </h1>
      <HomePage />
    </div>
  );
}

export default App;
