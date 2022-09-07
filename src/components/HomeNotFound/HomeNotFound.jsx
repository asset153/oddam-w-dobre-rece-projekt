import React from "react";
import { useNavigate } from "react-router-dom";

function HomeNotFound() {
  const navigation = useNavigate();
  return (
    <>
      <div>Not found sorry..</div>
      <button onClick={() => navigation("/")}>Strona główna</button>
    </>
  );
}

export default HomeNotFound;
