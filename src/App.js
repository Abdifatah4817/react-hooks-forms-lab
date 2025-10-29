// App.jsx
import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import initialItems from "./data/items";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="App">
      <ShoppingList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
