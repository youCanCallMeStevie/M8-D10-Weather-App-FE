import React from "react";
import "../Alert/Alert.css"

interface AlertProps {
  message: string;
  onClose: () => void;
}
function Alert({ message, onClose }: AlertProps) {
  return (
    <div className="model is-active has-text-centered">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-danger">
          <p className="modal-card-title has-text-white">{message}</p>
        </header>
        <footer className="modal-card-foot" style={{justifyContent: 'center'}}><button onClick={onClose}>
            Close</button></footer>
      </div>
    </div>
  );
}

export default Alert;
