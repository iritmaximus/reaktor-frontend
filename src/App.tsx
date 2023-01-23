import React from "react";
import axios from "axios";

const getPilotData = async () => {
  const data = await axios.get("/drones");
  console.log(data);
}


export const App = () => {


  return (
  <>
    <p>Hi :)</p>
  </>
  );
};
