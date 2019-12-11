


import React from 'react'

import Navbar from './Navbar'
import BookList from './BookList'
import ThemeContextProvider from './context/ThemeContext'
import ThemeToggle from './context/ThemeToggle'

import AuthContextProvider from './context/AuthContext'




const App2 = () => {




    return (

        <div>

            <ThemeContextProvider>
                
                    <Navbar />

                    <BookList />

                    <ThemeToggle />
              


            </ThemeContextProvider>


        </div>


    )







}


export default App2;