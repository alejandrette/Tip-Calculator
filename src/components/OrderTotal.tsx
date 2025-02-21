import { useMemo } from "react";
import { OrderItem } from "../types/menuItem";
import { Tip } from "./Tip";

interface OrderTotalProps {
  order: OrderItem[];
  tip: number;
  setTip: (tip: number) => void;
}

export function OrderTotal({ order, tip, setTip }: OrderTotalProps) {
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
            setTip={setTip}
          />
          <div className="flex justify-between mt-2">
            <span>Total</span>
            <span className="font-bold">${total}</span>
          </div>
        </div>
      </div>
    </>
  )
}
