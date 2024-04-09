import { useEffect, useState } from "react";
import Button from "./Button";
import "./modal.css";
import Destktopdivider from "../assets/svg/pattern-divider-desktop.svg";

const Modal = () => {
  const [apiData, setApiData] = useState({ id: "", advice: "" });

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setApiData(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="modal">
      <p>ADVICE # {apiData.id}</p>
      <h2>{`"${apiData.advice}"`}</h2>
      <img src={Destktopdivider} className="divider" />
      <Button onClick={() => fetchAdvice()} />
    </div>
  );
};

export default Modal;
