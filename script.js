let userAgent = navigator.userAgent;
let browser;
if (userAgent.match(/edg/i)) {
  browser = "edge";
} else if (userAgent.match(/chrome|chromium|crios/i)) {
  browser = "chrome";
} else if (userAgent.match(/firefox|fxios/i)) {
  browser = "firefox";
} else if (userAgent.match(/opr/i)) {
  browser = "opera";
} else if (userAgent.match(/safari/i)) {
  browser = "safari";
} else {
  alert("Other Browser");
}

console.log(browser);

const logo = document.querySelector(`.logos .${browser}`);
const title = browser;
console.log(logo);
if (logo != "" && title === browser) {
  console.log("in");
  logo.style.opacity = "1";
}
console.log(browser);
