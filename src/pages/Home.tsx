import "../styles/home.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="home">
      <div className="body">

        <div className="home-container">
          
          <div id="product-name">
            <h1>PlainSense</h1>
            <p>Here to help you use your computer, worry free!</p>
          </div>

          <div id="text-input-option">
            <p id="text-input-title">Type or paste in your problem</p>
            <p id="text-input-description">Briefly describe what you're seeing on your computer's screen</p>
            
            <textarea name="" id="text-input" rows={3}
            placeholder={`Ex. "My computer can't connect to wifi" `}>
            </textarea>

            <button id="text-help-button">Get Help</button>

          </div>

          <div id="split-input">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <div id="photo-input-option">
            <p id="photo-input-title">Use your camera</p>
            <p id="photo-input-description">Use your phone's camera to take a photo of what you're seeing</p>


            <button id="photo-help-button">Take or Upload Photo</button>

          </div>


          <div id="message-to-user">
            <p>
                PlainSense will explain things in clear and simple way. 
                Your issues are common technology problems and will not lead to you breaking the device or erasing important information.
                You can rest assured that any help provided will be safe and easy to do. 
            </p>
            <br />
          </div>

        </div>

      </div>

      <Navbar />

    </div>
  );
}

{/* <div id="disclaimer">
    <p>
        PlainSense is not intended for advanced technical questions, viruses, dealing with scams, or other security-related issues. 
        If you believe you may be at risk, contact someone you trust or a professional.
    </p>
</div> */}