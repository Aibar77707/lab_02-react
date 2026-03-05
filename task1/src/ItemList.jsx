import React from "react";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

function ItemList() {
  return (
    <ul style={{ maxWidth: "300px", margin: "20px auto", padding: 0, listStyle: "none" }}>
      {items.map(item => (
        <li
          key={item.id}
          style={{
            padding: "10px",
            margin: "5px 0",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            textAlign: "center"
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;