import React, { useMemo, useState } from "react";

function Assignment3() {
  const [items, setItems] = useState([
    { name: "Chocolate", value: 10 },
    { name: "Chips", value: 5 },
    { name: "Soda", value: 2 },
    { name: "Cookies", value: 3 },
  ]);

  const totalValue = useMemo(() => {
    let totalValue = 0;

    for (let i = 0; i < items.length; i++) {
      totalValue += items[i].value;
    }
    return totalValue;
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
}

export default Assignment3;
