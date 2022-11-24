import { createSignal, JSX, onMount } from "solid-js";
import flatpickr from "flatpickr";
import "./Counter.css";

interface Props {
  lol: string;
  children: JSX.Element;
}

export default function Counter({ lol, children }: Props) {
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
      <h1>{lol}</h1>
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
