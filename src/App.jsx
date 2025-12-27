import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/ProductCard';
import Button from './components/Button';

// In this page i learn about props in react js. that means how to pass (props) data from parent component to the child component.

function App() {
  return (
    <>
    <center>
      
    <ProductCard 
    title="iPhone 15"
    price={80000}
    brand="Apple"
    required={false}
    />

    <ProductCard 
    title="samsung Galaxy s23"
    price={90000}
    brand="Samsung"
    required={true}
    />

    <Button title="MacBook">
      <button>Buy Now</button>
      <p>Price: ₹12,0000</p>
    </Button>

    <Button title="imac">
      <button>Show</button>
      <p>Price: ₹15,0000</p>
    </Button>



    </center>
    </>
  )
}

export default App; 