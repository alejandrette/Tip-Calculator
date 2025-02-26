import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types/menuItem";

interface MenuItemProps {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>
}

export function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button 
      className="w-full flex justify-between hover:bg-teal-200 hover:text-slate-900 border-2 border-teal-400 rounded-md p-3"
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}  
    >
      <p>{item.name}</p>
      <p className=" font-bold">${item.price}</p>
    </button>
  )
}
