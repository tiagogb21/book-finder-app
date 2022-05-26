import React from "react";
import useSelector from "react-redux";

export default function Book() {
  const book = useSelector((state) => state.data);
  console.log(book);
  return (
    <main>
      <h1>asdf</h1>;
    </main>
  );
}
