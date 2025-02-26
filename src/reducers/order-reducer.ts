import { MenuItem, OrderItem } from "../types/menuItem";

export type OrderActions = 
  { type: 'add-item', payload: { item: MenuItem } } |
  { type: 'remove-item', payload: { id: MenuItem['id'] } } |
  { type: 'add-tip', payload: { value: number } } |
  { type: 'place-order' }

export type OrderState = {
  order: OrderItem[];
  tip: number
}

export const initialState: OrderState = {
  order: [],
  tip: 0
}

export const orderReducer = (state: OrderState = initialState, actions: OrderActions) => {
  if(actions.type === 'add-item'){
    const itemExists = state.order.find(orderItem => orderItem.id === actions.payload.item.id)
    let updateOrder: OrderItem[] = []
    if(!itemExists) {
      const newItem: OrderItem = {...actions.payload.item, quantity: 1}
      updateOrder = [...state.order, newItem]
    } else {
      updateOrder = state.order.map(orderItem => orderItem.id === actions.payload.item.id 
        ? {...orderItem, quantity: orderItem.quantity + 1} 
        : orderItem)
    }
    return { ...state, order: updateOrder }
  }

  if(actions.type === 'remove-item'){
    return { ...state, order: state.order.filter(orderItem => orderItem.id !== actions.payload.id) }
  }

  if(actions.type === 'add-tip'){
    return { ...state, tip: actions.payload.value }
  }

  if(actions.type === 'place-order'){
    return { ...state, order: [] }
  }

  return state
}