import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category,
    };
    onItemFormSubmit(newItem);
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="ItemForm" onSubmit={handleSubmit} data-testid="item-form">
      <label htmlFor="item-name">Name</label>
      <input
        id="item-name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
        data-testid="name-input"
      />
      <label htmlFor="item-category">Category</label>
      <select
        id="item-category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        data-testid="category-select"
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
