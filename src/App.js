import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Card from "./card"
class App extends Component {

  state = {

    name1: "wahab",
    name2: "danny",
    name3: "renegades",
    name4: "python",
    name5: "bi20"

  }

  namechanger = (event) => {


    const value = event.target.id;

    console.log(value);


    console.log(event.target.value)

    this.setState({

      [value]: event.target.value


    })


  }

  render() {

    return (

      <div className="bg-black" >
        <div className='bg-red tc grow  shadow-3'>
          <h1>WELCOME</h1>
        </div>
        <div className="bg-dark-gray  tc " >
          <Card name={this.state.name1} id="name1" img='a' change={this.namechanger}></Card>


          <Card name={this.state.name2} id="name2" img='b' change={this.namechanger}></Card>

          <Card name={this.state.name3} id="name3" img='c' change={this.namechanger}      ></Card>
          <Card name={this.state.name4} id="name4" img='d' change={this.namechanger}       ></Card>
          <Card name={this.state.name5} id="name5" img='e' change={this.namechanger}       ></Card>

        </div>
      </div>


    )
  }

}
export default App