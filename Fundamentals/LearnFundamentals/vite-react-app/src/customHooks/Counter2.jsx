import useCounter from "./useCounter";

export default function Counter2() {
  const [count, increment, decrement] = useCounter(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
