import { menuItems } from "../data/db";
import { useOrder } from "../hooks/useOrder";
import { Consumption } from "./Consumption";
import { MenuItem } from "./MenuItem";
import { OrderTotal } from "./OrderTotal";

export function Content() {
  const { order, setOrder, tip, setTip, addItem } = useOrder()

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
      <div>
        <h2 className="text-3xl font-bold">Menu</h2>
        <div className="mt-10 space-y-3 mr-5">
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Consumption</h2>
        <div className="mt-10 space-y-3">
            <Consumption
              order={order}
              setOrder={setOrder}
            />
            <OrderTotal 
              order={order}
              tip={tip}
              setTip={setTip}
            />
        </div>
      </div>
    </main>
  )
}
