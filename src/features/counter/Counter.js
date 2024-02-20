import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count );
    const dispatch = useDispatch();

  return (
    <section>
        <p>{count}</p>
        <div style={{display: "flex", flexDirection: 'column',alignItems:'center', justifyContent: 'center', width: '25%'}}>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment BY 10</button>
        </div>
    </section>
  )
}

export default Counter;
