import React from "react";
import "./CNC_controller.css";
import cybelicMachines from "./CybelicData";

const Cybelic = () => {
  return (
    <div className="cybelic_main_part">
      <p id="delem_label">CYBELEC</p>
      <div className="delem_main_div">
        {cybelicMachines.map((machine, index) => (
          <div className="machine_mega_div" key={machine.id}>
            {/* Each Row will contain two machines */}
            {cybelicMachines
              .slice(index * 2, index * 2 + 2) // Slice to get two machines per row
              .map((item) => (
                <div className="machine_two_pair" key={item.id}>
                  <p id="label_of_machine">{item.name}</p>
                  <img id="img_of_machine" src={item.image} alt={item.name} />
                  <div className="desc_of_machine">
                    <ul>
                      {item.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cybelic;
