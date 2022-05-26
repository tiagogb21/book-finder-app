import React from "react";
import { useSelector } from "react-redux";

export default function Book({ signIn }) {
  const book = useSelector((state) => state.data);
  // console.log(book);
  return (
    <div>
      <button onClick={signIn}>Entrar</button>
    </div>
  );
}
