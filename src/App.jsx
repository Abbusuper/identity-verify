import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./form.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="head">
          <h1 className="titleIden">
            Identity <br /> Verification
          </h1>
          <p className="txtIden">
            Welcome to our esteemed medical platform! Committed to excellence,
            we prioritize the safety of both doctors and patients. All aspiring
            doctors are requested to undergo a thorough verification process,
            ensuring high standards of professionalism. Completion grants access
            to valuable resources and contributes to the overall trust of our
            platform. This process upholds the integrity of medical practice,
            fostering a secure environment for practitioners and patients.
          </p>
          <p className="txtIden marginTp">
            Your dedication to providing top-notch healthcare services and
            cooperation in the verification process ensures our community
            thrives with utmost professionalism. Thank you for being part of our
            trusted network, where excellence in healthcare begins with your
            commitment to verification.
          </p>
          <button className="button-4 btnIden">Verify Now</button>
        </div>
      </div>
    </>
  );
}

export default App;
