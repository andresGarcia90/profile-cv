import React from "react";
import style from "./Subtitle.module.css";

const Subtitle = (props) => {
  const text = props.text ? props.text : "About Me";

  return (
    <>
      <div className="row">
        <div className="justify-content-md-start">
          <h2 className={style.subtitle}> {text} </h2>
          <div className={style["subtitle-underline"]}></div>
        </div>
      </div>
    </>
  );
};

export default Subtitle;
