const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

export function Tip({ setTip }: { setTip: (tip: number) => void }) {
  return (
    <div>
      <form>
        {tipOptions.map(option => (
          <div key={option.id} className="flex items-center">
            <input 
              type="radio" 
              id={option.id} 
              name="tip" 
              value={option.value}
              onChange={((e) => setTip(+e.target.value))}
            />
            <label htmlFor={option.id} className="ml-2">{option.label}</label>
          </div>
          ))}
      </form>
    </div>
  )
}
