import './App.css';
import Category from './components/Category';
import { friedChicken } from './components/foods/friedChicken';
import { desserts } from './components/foods/desserts';

export default function App() {
  return (
  <main>
    <h1>Uncle Haris Fried Chicken</h1>
    <Category title={"Fried Chicken"} foods={friedChicken} />
    <Category title={"Desserts"} foods={desserts} />
  </main>
  );
}
