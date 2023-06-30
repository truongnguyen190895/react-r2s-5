import React, { useState, useEffect } from "react";

interface Props {
  name: string;
  job: string;
}

interface Car {
  brand: string;
  model: number | string;
  engine: string;
}

// 1. Create a onclick event
// 2. inside onclick event, set state name

// ananymous function

export const Header = (props: Props) => {
  // array destructuring
  const [name, setName] = useState<string | null>("Truong");
  const [age, setAge] = useState<number>(28);
  const [bmw, setBmw] = useState<Car>({
    brand: "BMW",
    model: 2023,
    engine: "V12",
  });
  const [isAdult, setIsAdult] = useState<boolean>(true);
  const myCOnstant = "ABc";
  // side effect
  // callback function

  useEffect(() => {
    // do some side effect
    // fetch data from API
    console.log("name in effect ", name);
  }, [name]);

  const handleClick = () => {
    console.log("clicked");
    // name = "abc"
    setName("Mr. Nobody");
  };
  // render
  return (
    <>
      <h1>Hello my name is {name}</h1>
      <h2>I am {age} years old</h2>
      <p>I do not have a {bmw.brand}</p>
      {isAdult ? <p>I am over 18</p> : <p>I am still a teenager</p>}
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
// initial render: React => Header(name = "Truong")
// setName("Mr.No body") => React => Header(name = "Mr.No body")
// setName("Mr.No body") => React => Header(name = "Mr.No body 2")

// prep => render => effect run
