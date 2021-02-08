import React from "react";
import illustrationThreeSrc from "../images/illustrations_03.jpg";
import illustrationFourSrc from "../images/illustrations_04.jpg";
import "./Team.css";

export default () => {
  return (
    <div className="team">
      <div className="team--inner">
        <h2 className="team--title">Meet our team</h2>
        <div className="team--content">
          <div className="team--column">
            <div className="team--column-inner">
              <div className="team--description">
                <img
                  className="team--mate team--mate--left"
                  src={illustrationThreeSrc}
                  alt="illustrations_03.jpg"
                />

                <h3>Zeno Rossouw</h3>

                <p>
                  Zeno graduated from UCT in 2009. After completing his
                  community service he worked in the private sector specialising
                  in musculoskeletal and post surgical rehabilitation. During
                  his 10+ years of practical experience, he has worked with top
                  hand and shoulder surgeons in the country. He is an avid
                  athlete and supporter, working in events such as the Argus
                  Cycle Tour, W2W, the Two Oceans Marathon and with sports teams
                  such as Western Province women’s hockey team.
                  <br />
                  <strong>
                    His interests and expertise lies within the treatment,
                    management and rehabilitation of upper limb injuries (hand,
                    wrist, elbow, shoulder and neck). Zeno strives to assist
                    clients with returning to daily functional activity in a
                    safe and timely manner.
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="team--column">
            <div className="team--column-inner">
              <div className="team--description">
                <img
                  className="team--mate team--mate--right"
                  src={illustrationFourSrc}
                  alt="illustrations_04.jpg"
                />

                <h3 className="team--mate--text-right">Lorenzo Meyer</h3>

                <p>
                  Lorenzo graduated from the University of Cape Town ( U.C.T.)
                  in 2005 and has been working in the realm of sports,
                  orthopaedic (pre and post surgical) and musculoskeletal
                  physiotherapy. He has worked and travelled globally with
                  numerous sporting codes and teams: Current physiotherapist for
                  Papua New Guinea Mens National Cricket team / Former Head of
                  Medical and Head Physiotherapist at Ajax Cape Town Football
                  Club / Other affiliations: South African men’s national hockey
                  team / Cape Town City Ballet / Highlands Park Football Club.
                  <br />
                  <strong>
                    His particular interest is in the treatment, management and
                    rehabilitation of lower limb injuries( hip, knee, ankle and
                    foot) across a wide spectrum of the population, sedentary to
                    athletic of all ages.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
