import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

interface TipProps {
  tip: number;
  dispatch: Dispatch<OrderActions>
}

export function Tip({ tip, dispatch }: TipProps) {
  return (
    <div>
      <form>
        {tipOptions.map(option => (
          <div key={option.id} className="flex items-center">
            <input 
              type="radio" 
              id={option.id} 
              name="tip" 
              value={option.value}
              onChange={((e) => dispatch({ type: 'add-tip', payload: { value: +e.target.value } }))}
              checked={tip === option.value}
            />
            <label htmlFor={option.id} className="ml-2">{option.label}</label>
          </div>
          ))}
      </form>
    </div>
  )
}
