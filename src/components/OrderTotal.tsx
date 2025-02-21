export function OrderTotal() {
  return (
    <>
      <div className="bg-teal-200 text-black p-5 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">Order Total</h3>
        <div className="mt-5">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </>
  )
}
