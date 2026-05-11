import "../styles/settings.css";

export default function Settings() {
    return(
        <div className="settings">
            <div className="settings-head">
                <h1>General and Accessibilty Settings</h1>
            </div>
            <div className="settings-body">

                <div id="text-sizing">
                    <button>Adjust Text Size</button>
                </div>

                <div id="high-contrast">
                    <button>Toggle High Contrast</button>
                </div>

                <div id="dyslexic-font">
                    <button>Toggle Dyslexic Font</button>
                </div>

                <div id="lang-translation">
                    <button>Change Language</button>
                </div>

            </div>

        </div>

    );
}