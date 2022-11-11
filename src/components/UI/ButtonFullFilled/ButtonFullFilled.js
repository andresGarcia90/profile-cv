import React from "react";
import style from "./ButtonFullFilled.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const ButtonFullFilled = (props) => {
  const downloadPdfFile = () => {
    console.log("click");
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "application/pdf" 
    });
    console.log(file);
    element.href = "./src/assets/files/file.pdf";
    console.log(element.href);
    element.download = "file.pdf";
    element.click();
  };

  return (
    <>
      <button className={style["button-full"] }  id="input" onClick={downloadPdfFile}>
        Download Resume <FontAwesomeIcon icon={faFileArrowDown} />
      </button>
    </>
  );
};

export default ButtonFullFilled;
