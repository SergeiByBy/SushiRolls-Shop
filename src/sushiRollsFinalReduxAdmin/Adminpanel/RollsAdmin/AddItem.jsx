import React, { useState } from "react";
import { RollsStorage } from "../../Menu//Rolls/Rolls.Storage";

const RollForm = () => {
  const [name, setName] = useState("");
  const [structure, setStructure] = useState("");
  const [price, setPrice] = useState("");
  const [src, setSrc] = useState("");
  const [id, setId] = useState("");
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "structure":
        setStructure(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "src":
        setSrc(value);
        break;
      case "id":
        setId(value);
        break;
      case "weight":
        setWeight(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRoll = {
      name: name,
      structure: structure,
      price: parseInt(price),
      src: src,
      id: parseInt(id),
      weight: weight,
      quantity: parseInt(quantity),
    };

    RollsStorage.push(newRoll);
    console.log(RollsStorage);
    setName("");
    setStructure("");
    setPrice("");
    setSrc("");
    setId("");
    setWeight("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="structure"
        value={structure}
        onChange={handleInputChange}
        placeholder="Structure"
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={handleInputChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="src"
        value={src}
        onChange={handleInputChange}
        placeholder="Src"
      />
      <input
        type="text"
        name="id"
        value={id}
        onChange={handleInputChange}
        placeholder="Id"
      />
      <input
        type="text"
        name="weight"
        value={weight}
        onChange={handleInputChange}
        placeholder="Weight"
      />
      <input
        type="text"
        name="quantity"
        value={quantity}
        onChange={handleInputChange}
        placeholder="Quantity"
      />
      <button type="submit">Add Roll</button>
    </form>
  );
};

export default RollForm;
