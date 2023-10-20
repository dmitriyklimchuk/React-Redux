import React, {Component} from "react";
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';

const Counter = () => {
    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch({})
    };

    const incrementHandler = ()=> {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrementHandler = ()=> {
        dispatch({
            type: 'DECREMENT'
        })
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button type='button' onClick={incrementHandler}>Increment</button>
                <button type='button' onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};
export default Counter;

// class Counter extends Component {
//     toggleCounterHandler = () => {};
//
//     incrementHandler = ()=> {
//         this.props.increment()
//     }
//
//     decrementHandler = ()=> {
//         this.props.decrement()
//     }
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button type='button' onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button type='button' onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         )
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: ()=> dispatch({type: 'INCREMENT'}),
//         decrement: ()=> dispatch({type: 'DECREMENT'})
//     }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);