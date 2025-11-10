// 🚀 Osprey Portal App-Builder Logic
const suggestions = [
 "Signal Generator",
 "Quantum Visualizer",
 "Voice Recorder",
 "Music Synth",
 "Coin Catalog",
 "Marketplace Listing",
 "Story Writer",
 "Gemstone Designer",
 "AI Chat Bot",
 "Weather Monitor"
];

const buttons = document.getElementById("ideaButtons");
suggestions.forEach(s =>{
  const b=document.createElement("button");
  b.textContent=s;
  b.onclick=()=>buildTemplate(s);
  buttons.appendChild(b);
});

function buildTemplate(name){
  const template = `// 🪶 ${name} App Template
function start${name.replace(/\s/g,'')}(){
  console.log("Starting ${name} App...");
}`;
  showOutput(template);
}

function createApp(){
  const idea = document.getElementById("ideaInput").value || "Untitled App";
  buildTemplate(idea);
}

function showOutput(code){
  document.getElementById("output").style.display='block';
  document.getElementById("appCode").textContent = code;
}
