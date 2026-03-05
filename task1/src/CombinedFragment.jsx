import React from "react";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

function CombinedFragment() {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "#34495e" }}>My Fruit List</h2>
      <ul style={{ maxWidth: "300px", margin: "0 auto", padding: 0, listStyle: "none" }}>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "#dff9fb",
              borderRadius: "5px",
              textAlign: "center"
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>
        Total: {items.length} items
      </p>
    </>
  );
}

export default CombinedFragment;