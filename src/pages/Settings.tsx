import { useState } from "react";
import "../styles/settings.css";

export default function Settings() {

    // const [textSize, setTextSize] = useState("");
    const [highContrast, setHighContrast] = useState(document.body.classList.contains("high-contrast"));
    // const [dyslexicFont, setDyslexicFont] = useState(false);
    // const [language, setLanguage] = useState("English");



    return(
        <div className="settings">
            <div className="settings-head">
                <h1>General and Accessibilty Settings</h1>
            </div>
            <div className="settings-body">

                <div id="text-sizing">
                    <p>Adjust Text Size</p>
                    <input type="checkbox" />
                </div>

                <div id="high-contrast">
                    <p>Toggle High Contrast</p>
                    <input type="checkbox" 
                    checked={highContrast} 
                    onChange={(e) => {
                        setHighContrast(e.target.checked);
                        document.body.classList.toggle("high-contrast", e.target.checked);

                    }} />
                </div>

                <div id="dyslexic-font">
                    <p>Toggle Dyslexic Font</p>
                    <input type="checkbox" />
                </div>

                <div id="lang-translation">
                    <p>Change Language</p>
                    <input type="checkbox" />
                </div>

            </div>

        </div>

    );
}