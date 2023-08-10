import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";
function Closebutton() {
  const history = useNavigate();
  return (
    <>
      <div className="close-auth">
        <CloseIcon
          onClick={() => {
            history("/");
          }}
        />
      </div>
    </>
  );
}

export default Closebutton;

//className="close-auth-icon"
