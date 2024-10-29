import { useDispatch } from "react-redux";
import { handleIncreaseCount } from "../store/slices/counter";

export default function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(handleIncreaseCount());
  }
  return (
    <button onClick={handleClick} className="mt-3 bg-gray-800 text-white">
      Increase Count
    </button>
  );
}
