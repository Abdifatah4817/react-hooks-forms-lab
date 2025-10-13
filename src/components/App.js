import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import initialItems from "../data/items";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="App">
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
