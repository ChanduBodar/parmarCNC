import React from "react";
import "./CNC_controller.css";
import stepMachines from "./StepData";

const Step = () => {
  return (
    <div className="step_main_container">
      <p id="delem_label">STEP</p>
      <div className="delem_main_div">
        {stepMachines.map((machine, index) => (
          <div className="machine_mega_div" key={machine.id}>
            {/* Display Two Machines Per Row */}
            {stepMachines
              .slice(index * 2, index * 2 + 2)
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

export default Step;
