type ProblemType = {
  type: string;
  keyword_triggers: string[];
  steps: string[];
};


const BasicResponseBank:ProblemType[] = [
  {
    type: "Wi-Fi or Internet Connection Problem",
    keyword_triggers: ["wifi", "no internet", "offline", "won't connect"],
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
    keyword_triggers: ["password", "signin", "login", "account","locked"],
    steps: [
      "Your information is still safe. This often comes down to one small detail like a mistyped letter or number",
      "If you see you've been locked out or not are able to enter information, please wait 5 to 10 minutes and try again.",
      "Now, check that capital letters are NOT turned on.",
      "Type your password slowly, one key at a time. Click on the symbol that looks like an eye to see what you typed.",
      "Click Sign In again. If it still does not work choose \"Forgot Password\" and follow the instructions or ask someone for assistance."
    ]
  },
  {
    type: "Missing File Problem",
    keyword_triggers: ["file", "missing", "can't find", "missing file"],
    steps: [
      "Your file is still exists. It might simply be in a different place on your computer.",
      "Open the place where you normally keep your files.",
      "Look in 3 different folders on your computer named: \"Downloads\" , \"Documents\", \"Desktop\" ",
      "If possible, look for a magnifying glass icon and click on it. Type in the name of the file and hit \"Enter\".",
      "Open the file if you see its name.",
    ]
  },
  {
    type: "Something You Were Using Stopped Responding",
    keyword_triggers: ["frozen", "stuck", "not responding", "freeze"],
    steps: [
      "This can happen during normal computer use, and it can fix itself by exiting out of the program fully.",
      "Exit out by look for an X in the top right corner of the screen and clicking it once.",
      "Wait about 10 to 15 seconds or until the program goes away on the screen.",
      "Wait another 30 seconds and open the same program the way you normally do.",
      "Try what you were doing one more time. Ask for assistance if nothing closes or goes away after 1 to 2 minutes."
    ]
  },
  {
    type: "Page Could Not Be Found",
    keyword_triggers: ["404", "not found", "page not found", "missing page"],
    steps: [
      "This message is from the website, not from your computer.",
      "It means the web page is not in that place anymore. It's possible the website might have deleted it.",
      "Try opening the web page one more time.",
      "If the message stays, go back to the main page of the website.",
      "Try to look for your webpage from the main page."
    ]
  },
  {
    type: "This Website Is Having Trouble Right Now",
    keyword_triggers: ["500", "internal server error", "website error", "something went wrong"],
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
    keyword_triggers: ["403", "access denied", "forbidden", "not allowed"],
    steps: [
      "This message is coming from the website, not from your computer.",
      "You may not have access to this page, and that's okay.",
      "The website has set the page or specific item to not be accesible, nothing has gone wrong on your side.",
      "You can close the website and try opening the page again if you think you should have access to this."
    ]
  },
  {
    type: "This Website Is Busy Right Now",
    keyword_triggers: ["503", "service unavailable", "temporarily unavailable", "busy"],
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
    keyword_triggers: ["504", "timeout", "timed out", "took too long"],
    steps: [
      "This message means the page took too long to open and just needs a quick refresh.",
      "Wait a few seconds.",
      "Try opening the page again.",
      "If the message stays, check that your WiFi still looks connected.",
      "Try opening the page after checking your WiFi connection."
    ]
  },   
];

export default BasicResponseBank;