import React from "react";
import "./Archer.css";

const Archer = props => (
 
    <div className="image">
      <div className="img-container" dataid={props.id} onClick={() => props.randomRender(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>


);

export default Archer;