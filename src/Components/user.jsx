import React, { useState, useEffect } from "react";

/* if i use.. 

 -->   import React from "react";
       THEN----> const planet = React.useState("Earth");

*/


const User = (props) => {
    const [planet, setPlanet] = useState("Earth");
    const [msg, setMsg] = useState("Hyyy...");

   // console.log(planet);
    // console.log(msg);
    // setPlanet("Jupiter");   <- B'coz of this command it's make rerender.. and go to in infinite loop, Give so many error.
    // provide two thing.. 
    // 1) the value and 2) the function to update the state

    ///// componentDidMount()
    useEffect(() => 
    {
       // setPlanet("Marse");
       // setMsg("Hellow..");

       ///// Heavy computation
        console.log("Component mounting");

        ///// componentWillUnmount()
        return console.log("by.. by");
    }, []);

    // if(planet) {
    //     console.log("Planet changed");
    // }   <- it check planet's value is changed or not.

    // it write in second way...

    ///// componentDidUpdate() 
    ////// shouldComponentUpdate
    useEffect(() => {
        console.log("Planet changes");
    }, [planet]);

    return (
        <div>
            <h1> { props.name} </h1>
            <p> { props.description} </p>
            {/* <h5> { planet}</h5> */}
            <button onClick={() => setPlanet("Pluto")}>{planet}</button>
            <h4> {msg}</h4>
        </div>
    );
};

/* class User extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            planet: "Earth",
        };   //  it's individual data .. it's called state 
        console.log("I'm from constructor");
    }

    // static getDerivedStateFromProps(prop, state) {
    //     console.log("I'm from get Derived State from props");
    //     return {
    //         planet: "Jupiter"
    //     };
    // }\

    componentDidMount(){
        this.setState({ planet: "Jupiter"});
    }

    shouldComponentUpdate(nextProp, nextState){
        console.log("From shouldComponentUpdate");
        console.log({
            nextProp,
            nextState,
        });
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("From  getSnapshotBeforeUpdate");
        console.log({
            prevProps, prevState
        });
        return true;
    }

    componentDidUpdate(){
        console.log("From  componentDidUpdate");
        console.log(this.state);
    }

    componentWillUnmount(){
        console.log("Bye.. Bye.. ");
    }

    render() {
        // view
        // logic
        
        console.log("I'm from render");
        //Component Life-Cycle Methods
        return (
            <div>
                <h1> { this.props.name} </h1>
                <p> { this.props.description} </p>
                <h4> { this.state.planet } </h4>
            </div>
        );
    }
}*/


export default User;
// props => properties/parameters ... A data that is being passed from one component to another 


// state => A set of data that an individual component holds.

// React 16 .. release "Hooks"

// Hooks -> power to you functional components
// all the "Hooks" the start name of the 'use'
// purpose is with 'useState()'
// "useJanvihook()" is valide.. start with 'use'

