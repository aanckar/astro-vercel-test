import { createSignal, onMount } from "solid-js";
import flatpickr from "flatpickr";
import "./Counter.css";

export default function Counter({ children }) {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  function initPicker() {
    flatpickr("#date-picker");
  }

  onMount(() => {
    initPicker();
  });

  return (
    <>
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
      <input id="date-picker" class="hidden"></input>
    </>
  );
}
