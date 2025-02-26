import { Dispatch, useMemo } from "react";
import { OrderItem } from "../types/menuItem";
import { Tip } from "./Tip";
import { OrderActions } from "../reducers/order-reducer";

interface OrderTotalProps {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>
}

export function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {
  const subtotal: number = useMemo(() => order.reduce((acc, value) => acc + (value.price * value.quantity), 0), [order])
  const tax: number = useMemo(() => tip * subtotal, [tip, subtotal])
  const total: number = useMemo(() => subtotal + tax, [subtotal, tax])

  return (
    <>
      <div className="bg-teal-200 text-black p-5 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">Order Total</h3>
        <div className="mt-5">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Tax</span>
            <span className="font-bold">${tax}</span>
          </div>
          <Tip 
            tip={tip}
            dispatch={dispatch}
          />
          <div className="flex justify-between mt-2">
            <span>Total</span>
            <span className="font-bold">${total}</span>
          </div>
        </div>
        <button
          className='mt-5 px-4 py-2 rounded-lg hover:bg-teal-600 text-black bg-teal-500'
          onClick={() => dispatch({ type: 'place-order' })}
          disabled={total === 0}
        >
          Save Order
        </button>
      </div>
    </>
  )
}
