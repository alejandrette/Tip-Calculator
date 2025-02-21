import { useState } from "react"
import { MenuItem, OrderItem } from "../types/menuItem"

export function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)
    if(!itemExists) {
      const newItem = {...item, quantity: 1}
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
      setOrder(newOrder)
    }
  }
  
  return { order, setOrder, addItem }
}
