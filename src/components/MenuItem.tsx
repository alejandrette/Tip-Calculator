import type { MenuItem } from "../types/menuItem";

interface MenuItemProps {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

export function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button 
      className="w-full flex justify-between hover:bg-teal-200 hover:text-slate-900 border-2 border-teal-400 rounded-md p-3"
      onClick={() => addItem(item)}  
    >
      <p>{item.name}</p>
      <p className=" font-bold">${item.price}</p>
    </button>
  )
}
