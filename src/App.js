import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      currentCategory: 'All',
    }
  }

  render() {
    const { currentCategory } = this.state;
    

    const cats = categories.map((item, index) => {

      const isSelected = currentCategory === item;
      console.log(currentCategory, item)
      const selected = isSelected ? 'selected': 'not-selected'

      return (
        <button
          key={(`category-${index}`)}
          onClick={(e) => {
            this.setState({ currentCategory: item});
          }}
          className={selected}
        >{item}</button>
      )
    })


    const products = inventory.filter(item => 
       item.category === currentCategory || currentCategory === 'All',
    ).map(({ name, id, category, description, price } ) => {
      
      const isSelected = currentCategory === category

      const selected = isSelected ? 'selected': ''

      return (
        <div 
          className={selected}
          key={`product=${id}`}
        >
          <h1>{name}</h1>
          <p>{description}</p>
          <p>${price}</p>
          <p>{category}</p>
        </div>
      )
    })

    return (
      <div className="App">

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
