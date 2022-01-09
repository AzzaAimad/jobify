import React from "react";

import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span>tracking</span>app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            molestias similique veniam recusandae dignissimos omnis provident
            libero tempore ad eaque qui eius aliquam fugit, totam nostrum
            perspiciatis ex odio veritatis.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
