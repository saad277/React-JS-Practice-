import React from 'react';
import {Component} from 'react';


class About extends Component {

   
   
    constructor(){

      
super()


    this.state={

            element:" ",
            compound:""

    }



    }

   
click(e){


console.log(e.target);




}



search=(event)=>{



let data=event.target.value;





this.setState({

    element:data

})



}


send=(event)=>{

event.preventDefault();
console.log(this.state.element);

}

render() {

console.log(this.props);

const {pass}=this.props;

console.log(pass);

const list=pass.map(x=>{

return(

<p>     {x}    </p>

);


});


    return(

<div>
<h1 onClick={this.click}>   About page         </h1>

<form onSubmit={this.send}>      
<input type="text" onChange={this.search}/>

<button >  Submit </button>

<h1>      Props      </h1>
<br/>

<h3>    {list}    </h3>

</form>

</div>

);




}

}

export default About;