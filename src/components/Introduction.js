import * as React from "react";
import "./Introduction.css";

export default () => {
  return (
    <div className="introduction">
      <div className="introduction--inner">
        <h2 className="introduction--title">About us</h2>
        <div className="introduction--main">
          <p className="introduction--main__item introduction--main__lf">
            <strong>MR Physio</strong>therapy (Meyer & Rossouw{" "}
            <strong>physiotherapy</strong>), opened its doors on 1 September
            2019 and continue to provide a personal, caring, yet highly
            professional “get to the root of the cause and effect change{" "}
            <strong>physiotherapy service</strong>.
          </p>

          <p className="introduction--main__item introduction--main__rh">
            We have a particular interest in the treatment of: sports injures,
            orthopaedic and musculoskeletal injuries, Pre and post surgical
            rehabilitation for upper limb, lower limb and spinal cases,
            ergonomic and repetitive strain injuries, postural and overuse
            injuries / aches and pains, growth sport injuries in young children.
          </p>

          {/* <p>
            Our clients are our main priority and we consider each client
            individually as we aim to : ⁃ Educate and Assist in pain management
            and pain relief ⁃ Restore movement ability and quality of movement ⁃
            Assess, diagnose, establish a treatment, recovery and rehabilitation
            plan.
          </p> */}
        </div>
      </div>
    </div>
  );
};
