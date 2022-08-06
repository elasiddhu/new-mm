import React from "react";

export const Header = () => {
  return (
    <div>
      <h2>Money Manager</h2>
      <div className="Divlist">
        <div>
          <button className="buttonList">daily</button>
        </div>
        <div>
          <button className="buttonList">Monthly</button>
        </div>
        <div>
          <button className="buttonList">Yearly</button>
        </div>
      </div>
    </div>
  );
};
