import React, { Component } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { AuthContext } from './context/AuthContext'


class Navbar extends Component {
    render() {

        return (
            <AuthContext.Consumer>{(authContext) => (

                <ThemeContext.Consumer>{(themecontext) => {

                    const { isLightTheme, light, dark } = themecontext;

                    const theme = isLightTheme ? light : dark;

                    const { isAuthenticated,toggleAuth}=AuthContext


                    return (

                        <nav style={{ background: theme.ui, color: theme.syntax }}>

                            <h1>   Context Api     </h1>

                            <ul>

                                <li>    Home        </li>
                                <li>    About        </li>
                                <li>    Contact        </li>

                            </ul>

                            <div onClick={toggleAuth} >   AUTH            </div>

                            {isAuthenticated?"lOGGED IN":"lOGGEDOUT"}

                        </nav>

                    )
                }}</ThemeContext.Consumer>



            )}
            </AuthContext.Consumer>
        );

    }

}


export default Navbar;