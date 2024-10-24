import React from "react";

function Template(contact) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{contact.name}</h2>
        <img className="circle-img" src={contact.img}></img>
      </div>
      <div className="bottom">
        <p className="info">{contact.num}</p>
        <p className="info">{contact.email}</p>
      </div>
    </div>
  );
}

export { Template };
