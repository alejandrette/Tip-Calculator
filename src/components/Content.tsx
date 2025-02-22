import { menuItems } from "../data/db";
import { useOrder } from "../hooks/useOrder";
import { Consumption } from "./Consumption";
import { MenuItem } from "./MenuItem";
import { OrderTotal } from "./OrderTotal";

export function Content() {
  const { order, setOrder, tip, setTip, addItem, placeOrder } = useOrder()

  return (
    <main className="max-w-7xl mx-auto py-5 grid md:grid-cols-2"> 
      <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto p-4 scrollbar-hide">
        <h2 className="text-3xl font-bold">Menu</h2>
        <div className="mt-10 space-y-3">
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>

      <div className="md:max-h-[500px] md:overflow-y-auto p-4 md:scrollbar-hide">
        <h2 className="text-3xl font-bold">Consumption</h2>
        <div className="mt-10 space-y-3">
            <Consumption
              order={order}
              setOrder={setOrder}
            />
            {order.length > 0 && (
              <OrderTotal 
                order={order}
                placeOrder={placeOrder}
                tip={tip}
                setTip={setTip}
              />
            )}
        </div>
      </div>
    </main>
  )
}
