import React from 'react'
import { Component } from 'react'


class Todoapp extends Component {

    constructor() {

        super()


        this.state = {

            todo: [

                { id: 1, content: "Play outside" },
                { id: 2, content: "Get New parts" }
            ]

        }

    }

    delete = (id) => {

        console.log(id)

        const name = this.state.todo.filter(x => {


            return x.id != id

        });

        this.setState({

            todo: name


        })


    }






    render() {

        const { todo } = this.state;

        const list = todo.map(x => {

            if (todo.length > 0) {

                return (

                    <div className="collection-item" key={x.id}>

                        <span onClick={() => this.delete(x.id)}>     {x.content}   </span>


                    </div>

                );

            }

            else return (<div>         No to do                    </div>)



        })



        return (


            <div className="todos collection">

                {list}

            </div>


        );





    }






}



export default Todoapp;