import React from 'react'
import Cart from './cart'

const items = [
  { id: 1, name: 'Taco Shell', price: 2.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 1.99, qty: 5 },
  { id: 3, name: 'Sugar', price: 5.25, qty: 1 },
]
class App extends React.Component {
  render() {
    return (
      <div>
        <Cart initialItems={items} />
      </div>
    );
  }
}
export default App;




