import { useReducer } from "react";
import { menuItems } from "../data/db";
import { Consumption } from "./Consumption";
import { MenuItem } from "./MenuItem";
import { OrderTotal } from "./OrderTotal";
import { initialState, orderReducer } from "../reducers/order-reducer";

export function Content() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <main className="max-w-7xl mx-auto py-5 grid md:grid-cols-2"> 
      <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto p-4 scrollbar-hide">
        <h2 className="text-3xl font-bold">Menu</h2>
        <div className="mt-10 space-y-3">
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>

      <div className="md:max-h-[500px] md:overflow-y-auto p-4 md:scrollbar-hide">
        <h2 className="text-3xl font-bold">Consumption</h2>
        <div className="mt-10 space-y-3">
            <Consumption
              order={state.order}
              dispatch={dispatch}
            />
            {state.order.length > 0 && (
              <OrderTotal 
                order={state.order}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                dispatch={dispatch}
                tip={state.tip}
              />
            )}
        </div>
      </div>
    </main>
  )
}
