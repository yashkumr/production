import { useState, useEffect } from "react";
import axios from "axios";

export default function useColor() {
  const [colors, setColors] = useState([]);

  //get cat
  const getColor = async () => {
    try {
      const { data } = await axios.get("/api/v1/color/get-color");
      setColors(data?.color);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getColor();
  }, []);

  return colors;
}
