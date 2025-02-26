import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types/menuItem";

interface ConsumptionProps {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>
}

export function Consumption({ order, dispatch }: ConsumptionProps) {
  const isEmpty: boolean = order.length === 0

  return (
    <div className="space-y-3 mt-5"> 
      {isEmpty ? (
        <p className=" text-center">Your consumption is empty</p>
      ) : (
        order.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b-2 border-teal-200 p-3">
            <div>
              <p>{item.name} x {item.quantity}</p>
              <p className="font-bold">${item.price * item.quantity}</p>
            </div>
            <button
              className="flex items-center justify-center rounded-full h-8 w-8 bg-red-600 text-white text-lg font-bold"
              onClick={() => {dispatch({ type: 'remove-item', payload: { id: item.id } })}}
            >
              x
            </button>
          </div>
        ))
      )}      
    </div>
  )
}
