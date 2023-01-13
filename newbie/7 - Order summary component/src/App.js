import './css/app.css';

import Hero from './components/Hero';
import Order from './components/Order';
import Price from './components/Price';
import Button from './components/Button';
import Cancel from './components/Cancel';

function App() {
  return (
      <div className="card-wrapper">
        <Hero />
        <Order />
        <Price />
        <Button />
        <Cancel />
      </div>
  );
}

export default App;
