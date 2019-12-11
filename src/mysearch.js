import React from 'react'
import {Component} from 'react'
import './App2.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class Mysearch extends Component {


constructor() {

super()



this.state={


    names:[
        {
            id:0,
            name:'huawei',
            image:"https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg"

        },
        {
            id:1,
            name:'samsung',
            image:"https://5.imimg.com/data5/OJ/WP/GLADMIN-22658164/mi-a1-black-500x500.png"

        },
        {
            id:2,
            name:'sony',
            image:"https://assets.mspimages.in/c/tr:w-200,h-320,cm-pad_resize/14985-53-1.jpg"

        }],

mobile:''


}




}


search=(event)=> {

const text=event.target.value;



const mobilename=text.toLowerCase();



console.log(mobilename)

this.setState({

mobile:mobilename

})



}




message=()=>{
    if(this.state.mobile.length >0) {

       return (

               <h3 className="message">    You searched for {this.state.mobile}         </h3>
       ); }

       else {

            return ( <h3 className="message">  Type to Search </h3> )

       }


       

   }








render() {

   
    
const searching=this.state.names.map(x=> {


    if(this.state.mobile==x.name){


    return(

       
          <div key={x.id} className="div3">

              {x.name}
              <img src={x.image}/>
          </div>  
       
       

    );  }

    else {

        return null

         

    }

   

    

})




return(

<div>
<form className="form1">


<label>    Search Phone  :    </label>
<input type="text" onChange={this.search}/>

</form>
<br/>
<div className="message">   {this.message()}      </div>
<h3>  {searching}     </h3>

</div>

);



}


}

export default Mysearch;