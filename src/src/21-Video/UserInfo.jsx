import React from "react";
import { Template } from "./Template";

function UserInfo() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Template
        name="ABC"
        img="/logo192.png"
        num="1234567890"
        email="ABC@noob.com"
      ></Template>

      <Template
        name="QWE"
        img="/logo192.png"
        num="07654321"
        email="QWE@noob.com"
      ></Template>

      <Template
        name="XYZ"
        img="/logo192.png"
        num="6574839201"
        email="XYZ@noob.com"
      ></Template>
    </div>
  );
}

export { UserInfo };
