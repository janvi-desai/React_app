import React from "react";

class User extends React.Component {
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
}


export default User;
// props => properties/parameters ... A data that is being passed from one component to another 


// state => A set of data that an individual component holds.