export type ProblemType = {
  type: string;
  keyword_triggers: string[];
  steps: string[];
};


const BasicResponseBank:ProblemType[] = [
  {
    type: "WiFi or Internet Connection Issue",
    keyword_triggers: ["wifi", "no internet", "wifi signal", "connect to wifi","out","internet went out", "router","no connection","internet connection",],
    steps: [
      "This is can be caused by multiple things but it's a very common issue. Let's try the below steps first.",
      "Find The WiFi symbol on your screen.",
      "If it looks grey, crossed out, or isn't a bright color, click it once.",
      "Wait about 10-20 seconds, or until the symbol changes.",
      "It should now appear as solid white or highlighted in a bright color. You can go back to what you were doing."
    ]
  },
    {
    type: "Password or Sign-In Problem",
    keyword_triggers: ["password", "sign in", "login", "account","reset password", "forgot password", "can't get in", "authentication", "log in", "failed attempts"],
    steps: [
      "Your information is still safe. This often comes down to one small detail like a mistyped letter or number",
      "If you see you've been locked out or not are able to enter information, please wait 5 to 10 minutes and try again.",
      "Now, check that capital letters are NOT turned on.",
      "Type your password slowly, one key at a time. Click on the symbol that looks like an eye to see what you typed.",
      "Click Sign In again. If it still does not work, choose \"Forgot Password\" and follow the instructions or ask someone for assistance."
    ]
  },
  {
    type: "Missing File/Folder",
    keyword_triggers: ["missing file", "files", "saved file", "folder","lost document", "find document", "misplaced file", "misplaced", "documents","documents"],
    steps: [
      "Your file or folder is still exists. It might simply be in a different place on your computer.",
      "Open the place where you normally keep your files.",
      "Look in 3 different folders on your computer named: \"Downloads\" , \"Documents\", \"Desktop\" ",
      "If possible, look for a magnifying glass icon and click on it. Type in the name of the file or folder you want and hit \"Enter\".",
      "Open the file or folder if you see its name.",
    ]
  },
  {
    type: "Something You Were Using Stopped Responding",
    keyword_triggers: ["frozen", "screen is frozen", "program not responding", "freeze", "spinning", "crashed", "crashing", "can't do anything", "wheel","circle"],
    steps: [
      "This can happen during normal computer use, and it can fix itself by exiting out of the program fully.",
      "Exit out by look for an X in the top right corner of the screen and clicking it once.",
      "Wait about 10 to 15 seconds or until the program goes away on the screen.",
      "Wait another 30 seconds and open the same program the way you normally do.",
      "Try what you were doing one more time. Ask for assistance if nothing closes or goes away after 2 to 3 minutes."
    ]
  },
  {
    type: "Page Could Not Be Found",
    keyword_triggers: ["404", "not found", "page not found", "missing page", "bad url", "page could not be found"],
    steps: [
      "This message is from the website, not from your computer.",
      "It means the web page is not in that place anymore. It's possible the website might have deleted or moved it.",
      "Try opening the web page one more time.",
      "If the message stays, go back to the main page of the website.",
      "Try to look for your webpage from the main page."
    ]
  },
  {
    type: "This Website Is Having Trouble Right Now",
    keyword_triggers: ["500", "internal server error", "website error", "something went wrong", "server error", "site is down", "site went down"],
    steps: [
      "This message is coming from the website.",
      "It means the website needs a little more time.",
      "Close the page and wait about 20 seconds.",
      "Try opening the page again.",
      "If the message stays, try again some other time. This is an issue with the website, so there's nothing wrong on your side of the computer, you just need to wait for some time."
    ]
  },
  {
    type: "This Page Needs Permission",
    keyword_triggers: ["403", "access denied", "forbidden", "not allowed","restricted", "blocked","won't let me in",],
    steps: [
      "This message is coming from the website, not from your computer.",
      "You may not have access to this page, and that's okay.",
      "The website has set the page or specific item to not be accesible, nothing has gone wrong on your side.",
      "You can close the website and try opening the page again if you think you should have access to this."
    ]
  },
  {
    type: "This Website Is Busy Right Now",
    keyword_triggers: ["503", "service unavailable", "temporarily unavailable", "busy", "won't let me in"],
    steps: [
      "This message is coming from the website.",
      "It means the website is busy or not ready to open right now.",
      "Close the page and wait about 30 seconds.",
      "Try opening the page again.",
      "If the message stays, close the page again and try to open in a few minutes."
    ]
  },
  {
    type: "This Page Took Too Long To Open",
    keyword_triggers: ["504", "timeout", "timed out", "took too long", "slow","down","taking too long", "loading"],
    steps: [
      "This message means the page took too long to open and just needs a quick refresh.",
      "Wait a few seconds.",
      "Try opening the page again.",
      "If the message stays, check that your WiFi still looks connected.",
      "Try opening the page after checking your WiFi connection."
    ]
  },
  {
    type: "Something You Plugged In Was Not Found",
    keyword_triggers: ["usb", "device not recognized", "flash drive", "device not found", "plugged in"],
    steps: [
      "This can happen when your computer needs another moment to notice what was plugged in.",
      "Remove the item you plugged in.",
      "Wait about 5 seconds.",
      "Plug it back in firmly.",
      "Wait and see if your computer notices it."
    ]
  },
  {
    type: "A Window Will Not Close",
    keyword_triggers: ["window can't close", "window stuck", "window won't close", "close window"],
    steps: [
      "This can happen during normal computer use, and it usually clears up.",
      "Look for an X in the top right corner of the screen.",
      "Click it once.",
      "Wait about 10 seconds.",
      "Ask for assistance if nothing changes after about 1 minute."
    ]
  },
  {
    type: "The Sound Is Not Working",
    keyword_triggers: ["no sound", "muted", "audio", "sound"],
    steps: [
      "Your sound is usually still there and often just needs a quick check.",
      "Look for a speaker or megaphone symbol on your screen. Make sure to check the top and bottom corners of the screen too.",
      "If there is an \"x\" beside the symbol, it just means you need to manually turn your sound up by pressing volume buttons on the keyboard or adjusting the speakers beside the computer.",
      "Try playing sound one more time."
    ]
  }
];

export default BasicResponseBank;