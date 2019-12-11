import React from 'react';
import 'tachyons';

const Card =(props)=>{
    return(
        <div className=" tc measure-wide bg-gray grow br4 b--solid bw1 ac ma2 pa2 dib  shadow-5">
            <img  src={'https://robohash.org/'+props.img+'?size=200x200'}></img>
            <h1>{props.name}</h1>
            <p>lorem ipsum</p>
            
            <input type="text" id={props.id} className="tc b--solid " onChange={props.change} value={props.name} ></input>
        </div>


    );


}

export default Card