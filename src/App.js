import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      category: 'All',
    }
  }

  render() {
    const cats = categories.map((item, index) => {
      return (
        <button
          key={(`category-${index}`)}
          onClick={(e) => {
            this.setState({ category: item});
          }}
        >{item}</button>
      )
    })

    const products = inventory.filter((item) => {
      return item.category === "Toys"
    }).map(({ name, id, category, description, price }, index ) => {
      return (
        <div key={`product=${id}`}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{price}</p>
          <p>{category}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <p>{this.state.category}</p>



        <ul>
          {cats}
        </ul>

        <ul>
          {products}
        </ul>

      </div>
    );
  }
}

export default App;
