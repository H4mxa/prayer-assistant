import React, { Component, useState, useRef, useEffect } from 'react';

function usePrevious(value) {
  // this will create reference object. and reference object will have current properties just like componentDidUpdate
  // "ref" -> "current" just like that
  const ref = useRef();
  // remember use effect is called every time when your component is updated
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Counter = (props) => {
  const { title, onChange } = props;
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);
  const prevTestCount = usePrevious(props.testNumber);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange('increment', newCount);
  };
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange('decrement', newCount);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={increment}>Increment</button>
      <div className='counter-number'>Present: {count}</div>
      <div className='counter-number'>Previous: {prevCount}</div>
      <button onClick={decrement}>Decrement</button>
      <h2>Present Test Number: {props.testNumber}</h2>
      <h2>Previous Test Number: {prevTestCount}</h2>
    </div>
  );
};

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.decrement = this.decrement.bind(this);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log(prevState);
//     // console.log(prevProps);
//   }

//   /*
//     The arrow function is automatically binding in "this context". if dont specify function using arrow function then
//     you will not access "this". to access this you have to define arrow function in ::onClick event:: below
//     */
//   increment = () => {
//     const { count } = this.state;
//     const { onChange } = this.props;
//     this.setState({ count: count + 1 });
//     onChange('increment', count + 1);
//   };

//   decrement() {
//     const { count } = this.state;
//     const { onChange } = this.props;
//     this.setState({ count: count - 1 });
//     onChange('decrement', count - 1);
//   }

//   render() {
//     const { count } = this.state;
//     const { title } = this.props;
//     return (
//       <div>
//         <h1>{title}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <div className='counter-number'>{count}</div>
//         {/* em not executing decrement function immediately. em not calling it because i am passing this arrow functionality
//             wrapping this inside of arrow function. so onClick is going to use this arrow function. and onClick is executing this
//             all and inside of arrow function its executing a decrement.
//         */}
//         {/* <button onClick={this.decrement}>Decrement</button> */}
//         {/* <button onClick={this.decrement.bind(this)}>Decrement</button> */}
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

export default Counter;
