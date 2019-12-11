import React from 'react';
import {Component} from 'react';


class Lifecycle extends Component {

constructor()       {




super()

this.state={

state_name:" State Name",

questions:["Capital Of Spain ?","Founder Of Apple ?","RTX Manufacturers ?","Largest Mountain In The World"],


choices:[ ["Madrid","Manchester" ,"Norway","Swiss"],
            ["Steve Jobs","Eric","Nathan","Bruce Wayne"],
            ["AMD","DELL","Microsoft","NVIDIA"         ],    
            ["K2","Everest","Karakoram","Fuji"         ] ],


i:0,
j:0,

answers:["Madrid","Steve Jobs","NVIDIA","Everest"],

user_answers:[],

score:0


}

}

  


 
 

change=()=>{


this.setState({

state_name:"New Name"

})   }






getChoice=(choice)=>{


if(this.state.user_answers.length===this.state.answers.length){

return null;

}


console.log(choice);

this.state.user_answers.push(choice);

console.log(this.state.user_answers);

if(this.state.user_answers.length >0){

  

  if(this.state.user_answers[this.state.i]==this.state.answers[this.state.i]){


this.setState({

score:this.state.score+10

})
  }
}

if(this.state.i===this.state.choices.length-1){

 


  return null;
}


this.setState({

i:this.state.i+1

})

}





render(){

 
  console.log("Length of user answers is "+this.state.user_answers.length)
    
  
  const {i}=this.state;
    console.log(i);
    console.log("Scores : "+this.state.score);

const display =this.state.choices[i].map((x,id)=>{      
return (

    

<li key={id}>   
    
    
    <ul onClick={()=>this.getChoice(x)}> {x}     </ul>   
    
      </li>



);



})








return(

<div>
<h1>     Quiz   </h1>

  <br/>     <br/>


<h3 className="heading3">  Q  {this.state.i +1} :  {this.state.questions[this.state.i]}        </h3>

        <div className="score">   Score : {this.state.score}  </div>

          <div>
           
        

           <h4>     {display}    </h4>     



          </div>

</div>
);



}





}

export default Lifecycle;