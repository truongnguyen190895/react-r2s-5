import React, { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";
import Button from 'react-bootstrap/Button';

interface Phone {
  id: string;
  model: string;
  brand: string;
}

const PHONES: Phone[] = [
  { id: "abc", model: "iphone 14", brand: "apple" }, // 0 => 0
  { id: "ss1", model: "Samsung Note 10", brand: "samsung" },
  { id: "abb", model: "iphone 14 Pro Max", brand: "apple" }, // 1 => lost
  { id: "ss", model: "Samsung Note 10", brand: "samsung" },
  { id: "abv", model: "iphone 14 Mini", brand: "apple" }, // 2 => 1
  { id: "ss2", model: "Samsung S22", brand: "samsung" },
];

function App() {
  const [brand, setBrand] = useState<string>("all");
  const [phones, setPhones] = useState<Phone[]>(PHONES);

  const onClickBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    if (event.target.value === "all") {
      setPhones(PHONES);
    } else {
      setPhones(PHONES.filter((phone) => phone.brand === event.target.value));
    }
    setBrand(event.target.value);
  };

  return (
    <div style={{ padding: "10px" }}>
      <div>Filter by brand</div>
      <label>
        All
        <input
          type="radio"
          name="brand"
          value="all"
          checked={brand === "all"}
          onChange={onClickBrand}
        />
      </label>
      <br />
      <label>
        Apple
        <input
          type="radio"
          name="brand"
          value="apple"
          checked={brand === "apple"}
          onChange={onClickBrand}
        />
      </label>
      <br />
      <label>
        Samsung
        <input
          type="radio"
          name="brand"
          value="samsung"
          checked={brand === "samsung"}
          onChange={onClickBrand}
        />
      </label>
      <br />
      <label>
        NOKIA
        <input
          type="radio"
          name="brand"
          value="nokia"
          checked={brand === "nokia"}
          onChange={onClickBrand}
        />
      </label>
      <br />

      <Button variant="primary" size="sm">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      {phones.length > 0 ? (
        phones.map((phone) => <Item key={phone.id} name={phone.model} />)
      ) : (
        <h1>No phone found</h1>
      )}
    </div>
  );
}

export default App;
