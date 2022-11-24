import { createSignal, JSX, onMount } from "solid-js";
import flatpickr from "flatpickr";
import "./Counter.css";
import { Lol } from "../../../lib/types";

interface Props {
  lol: Lol;
  data: string[];
  children: JSX.Element;
}

export default function Counter(props: Props) {
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
      <h1>{props.lol}</h1>
      <h2>{props.data[0]}</h2>
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{props.children}</div>
      <input id="date-picker" class="hidden"></input>
    </>
  );
}
