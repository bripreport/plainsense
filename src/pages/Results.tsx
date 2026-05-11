import { useNavigate } from "react-router-dom";
import "../styles/results.css";

export default function Results() {
  const nav = useNavigate();

  const response = {
    type: "Missing File Problem",
    keyword_triggers: ["file", "missing", "can't find", "missing file"],
    steps: [
      "Your file is still exists. It might simply be in a different place on your computer.",
      "Open the place where you normally keep your files.",
      "Look in a folder named \"Downloads.\" ",
      "Look in a folder named \"Documents.\" ",
      "If possible, look for a magnifying glass icon and click on it. Type in the name of the file and hit \"Enter\".",
      "Open the file if you see its name.",
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