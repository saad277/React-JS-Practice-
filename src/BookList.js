

import React, { Component } from 'react'
import {ThemeContext} from './context/ThemeContext'




class BookList extends Component {

static contextType=ThemeContext;

    render() {

const{isLighttheme ,light,dark}=this.context

const theme=isLighttheme?light:dark


        return (

            <div className="book-list container" style={{color:theme.syntax,background:theme.bg}}>

            <ul>

                <li style={{backkground:theme.ui}}>    the way        </li>
                <li style={{backkground:theme.ui}}>     Kingsmen       </li>
                <li style={{backkground:theme.ui}}>     13 reasons       </li>

            </ul>


            </div>




)





    }





}


export default BookList;