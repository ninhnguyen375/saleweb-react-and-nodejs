import React, { Component } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state = {
      products: [],
      producers: [],
      intervalIsSet: false
    }
  }
  // init state
  getDataFromDB = () => {
    fetch("/api/getProducts")
      .then(data => data.json())
      .then(res => this.setState({ products: res.data }))
  }
  componentDidMount(){
    this.getDataFromDB()
    if(!this.state.intervalIsSet){
      let interval = setInterval(this.getDataFromDB, 1000);
      this.setState({intervalIsSet: interval})
    }
  }
  componentWillMount(){
    if(this.state.intervalIsSet){
      this.setState({intervalIsSet: null})
    }
  }
  render() {
    return (
      <div className="App">
        <div className="ListCard">
          {
            this.state.products.map((product, index) => {
              return (<ProductCard
                key={index}
                product_name={product.product_name}
              />)
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
