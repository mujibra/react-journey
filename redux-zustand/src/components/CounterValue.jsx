import { useSelector } from "react-redux";

export default function CounterValue() {
  const state = useSelector((state) => state);
  const { countValue } = state;
  console.log(state);

  return <div className="mt-3">CounterValue is {countValue}</div>;
}
