import React, { Component, useState, useEffect } from 'react';
import Counter from 'Components/Counter';
import './Home.css';

// This is functional component way
// 1. Smaller components
// 2. Usually presentational component
// 3. In most of cases reusable components
// 4. Focus on one responsisbility

// const Home = () => {
//     /*
//     message is our variable state and SetMessage is function for mutation of our message state
//     "useState" function return array. the first element of your array is your state value.
//     In this case we call it message in bracket,. but can call it whatever you want
//     Second element of this array useState is returning is function that is used for mutation of your state
//     Thas why we call it setMessage, but uh can call it whatever uh want
//     */

//     const [message, setMessage] = useState('Super Message!!!')

//     // the another way of setting useState is below

//     // const messageState = useState('Super Message')
//     // const message = messageState[0]
//     // const setMessage = messageState[1]

//     useEffect(() => {
//         /*
//         This call back function will be call when your component is initialized And when component is updated
//         */
//        setTimeout(() => {
//            // After 1000 mili second the setMessage function will be call
//            setMessage('I am updated Message!!!')
//        }, 1000);

//         //if (count > 10){
//         //alert(`you hit huge number ${count}`);
//         //}

//        /*
//        this [] bracket contain second value of useEffect. it kind of dependencies. when uh didn't specify this function
//        will be called everytime when state get changed. but when uh specify this function will be call once. and when you
//        write some dependencies in it like "message" this function will be called when your message value is changed
//        */

//     }, [])

//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1)
//         // setTest(count + 1) // remember useEffect [] contain argument. which maybe depends on count
//     }
//     const decrement = () => {
//         setCount(count - 1)

//     }

//     return (
//         <div className="container">
//             <h1>I am Home Page</h1>
//             <p>{message}</p>
//             {/* we write "increment" not "increment()" because i dont want to execute this function
//                 immediately. i'd like to pass reference of this function to click
//              */}
//             <button onClick={increment}>Increment</button>
//             <div className="counter-number">
//             {count}
//             </div>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

/*
This is class component
1. Larger components, container components
2. Easier to handle lots of state
3. More boilerplate
4. Access to lifecycle functions
*/
class Home extends Component {
  // another way of defining state using constructor
  constructor(props) {
    super(props);
    this.state = {
      message: 'Super Message!!!',
      Tnumber: 99,
    };
  }

  // state = {
  //     message: "This is super message!!!"
  // }

  // lifesycle function
  // this function is call once
  componentDidMount() {
    //         // here we have asynchronous code, as we are updating after every 1000 seconds
    setTimeout(() => {
      /*
            this is call back function
            lets right this function, this function will be executed after every 1000 mili seceond 

            when uh want to change state, uh need to call function setState
            inside setState() square brackets uh will need to provide object, and then uh can change message
            uh cannot change state like this this.state.message = "bla bla"
            */
      this.setState({ message: 'I am updated message!!!!' });
    }, 1000);
  }

  displayMessage = (type, count) => {
    if (type === 'increment') {
      alert(`Your number was incremented! Current value is ${count}`);
      return;
    } else {
      alert(`Your number was decremented! Current value is ${count}`);
    }
  };
  /*
        render is also lifecycle function. 
        render is call first
        render method is called everytime when state is changed
  */
  render() {
    const { message, Tnumber } = this.state;
    return (
      <div className='container'>
        <h1>I am Home Class</h1>
        <p>{message}</p>
        <button
          onClick={() => {
            this.setState({ Tnumber: Tnumber + 1 });
          }}
        >
          Testing Increment
        </button>
        <Counter
          testNumber={Tnumber}
          title='I am Counter Component!'
          onChange={this.displayMessage}
        />
      </div>
    );
  }
}

export default Home;
