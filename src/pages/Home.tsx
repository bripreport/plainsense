import "../styles/home.css";

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
                You can rest assure that any help provided will be safe and easy to do. 
            </p>
          </div>

        </div>
        
      </div>
    </div>
  );
}