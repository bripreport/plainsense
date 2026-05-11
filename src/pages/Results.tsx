import { useNavigate } from "react-router-dom";
import "../styles/results.css";

export default function Results() {
  const nav = useNavigate();

  const response = {
    "type": "Wi-Fi or Internet Connection Problem",
    "keyword_triggers": ["wifi", "internet", "offline", "network"],
    "steps": [
      "This is more common than it may seem. It usually just means your connection needs a moment.",
      "Check that Wi-Fi is turned on.",
      "Turn Wi-Fi off, wait a few seconds, then turn it back on.",
      "Wait a moment while it reconnects.",
      "Try opening the page again."
    ]
  };

  const reassurance = response.steps[0]
  const steps = response.steps.slice(1);


  return (
    <div className="results">
        <div className="results-body">

            <div id="results-head">
                <p>PlainSense has determined you want help with: </p>

                <div id="query">
                    <h2>{response.type}</h2>
                </div>
            </div>

            <div id="term-explanation"> 
                <p>
                    Your WiFi is what gives your phones, computer, and TVs a high speed internet connection. 
                </p>
                <p>{reassurance}</p>
            </div>


            <div id="steps">
                <p>Try these steps:</p>

                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <p>
                            <strong>{index + 1}.</strong> {step}
                        </p>
                    </div>
                ))}
            </div>

            <div id="response-buttons">
                <button id="more-help-button">Get More Help</button>
                <button id="return-home" onClick={() => nav("/")}>Start Over</button>
            </div>


            


        </div>
    </div>
  );
}