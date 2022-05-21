import React, { useState } from "react";
import "./inputItem.css";
import SearchIcon from "@mui/icons-material/Search";


function InputItem({setValue}) {

  return (
    <div className="inputItem">
      <input
        placeholder="Поиск"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="inputIcon">
        <SearchIcon />
      </div>
     
    </div>
  );
}
export default InputItem;
