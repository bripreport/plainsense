import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type {ProblemType} from "../utils/PremadeResponseBank";
import { promptLLM } from "../api/api-functions";
import "../styles/results.css";

export default function Results() {
  const nav = useNavigate();

   const[loading, setLoading] = useState(false);

  const returnedResponse = localStorage.getItem("matched-response");
  const result = returnedResponse ? JSON.parse(returnedResponse): null;

  console.log(result);
    
//   if(result?.route === "llm") {
//         return(
//             <div className="results">
//                 <div className="results-body">
//                     <p>Sorry, we could not answer your request. The LLM is unresponsive.</p>
//                     <button id="return-home" onClick={() => nav("/")}>Back to Home</button>

//                 </div>
//             </div>
//         )
//     }
  
  if(!result || !result.response) {
        return(
            <div className="results">
                <div className="results-body">
                    <p>No results found. Please try again, we might not have understood your request.</p>
                    <button id="return-home" onClick={() => nav("/")}>Back to Home</button>

                </div>
            </div>
        )
    }

    const response = result?.response as ProblemType;
    const reassurance = response.steps[0]
    const steps = response.steps.slice(1);  

    const getMoreHelp = async () => {
        setLoading(true);
        const llmResponse = await promptLLM(result.user_input);
        console.log(llmResponse);
        
        localStorage.setItem("matched-response", JSON.stringify({
        route: "llm",
        response: llmResponse,
        user_input: result.user_input
        }));

        

        nav("/results")
        setLoading(false);
    }


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
                <button id="more-help-button" onClick={(getMoreHelp)} disabled={loading}>{loading ? "Loading...": "Didn't Help? Get a tailored result"}</button>
                <button id="return-home" onClick={() => nav("/")}>Make Another Request</button>
            </div>


            


        </div>
    </div>
  );
}