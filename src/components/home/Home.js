import React, { useEffect, useState } from "react";

import { getData } from "../../product/api";

export default function Home() {
  const [books, setBooks] = useState([]);
  const fetchData = async () => {
    const getInfo = await getData();
    setBooks(getInfo);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Home</div>;
}
