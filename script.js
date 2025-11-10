// ==========================
// Quiz Data (50 Questions)
// ==========================
let quizData = [
  { question: "What is the brain of the computer?", options: ["Monitor", "CPU", "Keyboard", "Mouse"], answer: "CPU" },
  { question: "Which device is used for typing?", options: ["Speaker", "Keyboard", "Printer", "Scanner"], answer: "Keyboard" },
  { question: "Which computer is the most powerful?", options: ["Laptop", "Tablet", "Supercomputer", "PC"], answer: "Supercomputer" },
  { question: "Which device displays information?", options: ["Mouse", "Monitor", "Keyboard", "CPU"], answer: "Monitor" },
  { question: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Module", "Run All Memory"], answer: "Random Access Memory" },
  { question: "Which type of computer is portable?", options: ["Mainframe", "Laptop", "Supercomputer", "Server"], answer: "Laptop" },
  { question: "Which part stores data permanently?", options: ["RAM", "Hard Drive", "CPU", "Keyboard"], answer: "Hard Drive" },
  { question: "Which device is used for pointing and clicking?", options: ["Mouse", "Keyboard", "Monitor", "Printer"], answer: "Mouse" },
  { question: "What is the main function of software?", options: ["Process data", "Store electricity", "Cool the CPU", "Connect wires"], answer: "Process data" },
  { question: "Which of these is an input device?", options: ["Printer", "Scanner", "Monitor", "Speaker"], answer: "Scanner" },
  { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Central Program Utility"], answer: "Central Processing Unit" },
  { question: "Which component is used to store temporary data?", options: ["RAM", "Hard Drive", "ROM", "Cache"], answer: "RAM" },
  { question: "What is the full form of HTML?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Main Language", "HyperTool Markup Logic"], answer: "HyperText Markup Language" },
  { question: "Which device is used to print documents?", options: ["Printer", "Monitor", "Speaker", "Mouse"], answer: "Printer" },
  { question: "Which part of the computer performs calculations?", options: ["CPU", "Monitor", "Keyboard", "RAM"], answer: "CPU" },
  { question: "Which type of memory is non-volatile?", options: ["RAM", "ROM", "Cache", "Registers"], answer: "ROM" },
  { question: "Which key is used to delete text?", options: ["Shift", "Ctrl", "Delete", "Alt"], answer: "Delete" },
  { question: "What does GUI stand for?", options: ["Graphical User Interface", "General User Input", "Graphical Utility Interface", "General Utility Icon"], answer: "Graphical User Interface" },
  { question: "What is an example of system software?", options: ["Operating System", "MS Word", "Photoshop", "Chrome"], answer: "Operating System" },
  { question: "Which company developed Windows?", options: ["Microsoft", "Apple", "Google", "IBM"], answer: "Microsoft" },
  { question: "What is the main language of the web?", options: ["C", "Python", "HTML", "Java"], answer: "HTML" },
  { question: "Which of these is an output device?", options: ["Monitor", "Keyboard", "Mouse", "Microphone"], answer: "Monitor" },
  { question: "What does BIOS stand for?", options: ["Basic Input Output System", "Binary Input Output Setup", "Base Internal Output System", "Basic Integrated Operation Setup"], answer: "Basic Input Output System" },
  { question: "Which storage device is optical?", options: ["CD", "Hard Disk", "Pen Drive", "Floppy Disk"], answer: "CD" },
  { question: "Which of the following is an operating system?", options: ["Linux", "MS Word", "Google", "Excel"], answer: "Linux" },
  { question: "What is the smallest unit of data?", options: ["Bit", "Byte", "Nibble", "Word"], answer: "Bit" },
  { question: "How many bits are in a byte?", options: ["4", "8", "16", "32"], answer: "8" },
  { question: "What does USB stand for?", options: ["Universal Serial Bus", "Uniform System Board", "United Service Base", "Universal Storage Box"], answer: "Universal Serial Bus" },
  { question: "What is the full form of LAN?", options: ["Local Area Network", "Large Access Network", "Linked Area Node", "Local Access Net"], answer: "Local Area Network" },
  { question: "Which company developed macOS?", options: ["Apple", "Microsoft", "IBM", "Intel"], answer: "Apple" },
  { question: "What is the full form of IP?", options: ["Internet Protocol", "Internal Process", "Integrated Program", "Internet Provider"], answer: "Internet Protocol" },
  { question: "Which part of a computer connects all hardware?", options: ["Motherboard", "CPU", "RAM", "Monitor"], answer: "Motherboard" },
  { question: "Which of these is not a programming language?", options: ["Python", "HTML", "Java", "Linux"], answer: "Linux" },
  { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transmission Process", "HyperText Transfer Process", "HighText Transfer Protocol"], answer: "HyperText Transfer Protocol" },
  { question: "Which key combination is used to copy?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], answer: "Ctrl + C" },
  { question: "Which key combination is used to paste?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], answer: "Ctrl + V" },
  { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Unified Resource Link", "Universal Reference Locator", "Uniform Register Link"], answer: "Uniform Resource Locator" },
  { question: "What is the main page of a website called?", options: ["Homepage", "Startpage", "Webpage", "Indexpage"], answer: "Homepage" },
  { question: "Which is not an input device?", options: ["Speaker", "Keyboard", "Scanner", "Mouse"], answer: "Speaker" },
  { question: "What is used to connect computers in a network?", options: ["Router", "Monitor", "CPU", "Keyboard"], answer: "Router" },
  { question: "Which of these is a search engine?", options: ["Google", "Facebook", "WhatsApp", "Zoom"], answer: "Google" },
  { question: "Which of these is used to browse the Internet?", options: ["Chrome", "Paint", "Word", "Excel"], answer: "Chrome" },
  { question: "What is the shortcut to undo?", options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + C", "Ctrl + U"], answer: "Ctrl + Z" },
  { question: "What is the shortcut to redo?", options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + A"], answer: "Ctrl + Y" },
  { question: "What does PDF stand for?", options: ["Portable Document Format", "Public Data File", "Printable Data Format", "Personal Document File"], answer: "Portable Document Format" },
  { question: "Which of these is not a web browser?", options: ["Google Chrome", "Mozilla Firefox", "Microsoft Word", "Safari"], answer: "Microsoft Word" },
  { question: "Which of these is a programming language?", options: ["Python", "Excel", "Google", "PowerPoint"], answer: "Python" },
  { question: "Which device is used to record sound?", options: ["Microphone", "Speaker", "Monitor", "Camera"], answer: "Microphone" },
  { question: "Which device is used to take pictures?", options: ["Camera", "Scanner", "Printer", "Speaker"], answer: "Camera" },
  { question: "Which part of the computer handles logic operations?", options: ["ALU", "Monitor", "Keyboard", "GPU"], answer: "ALU" },
  { question: "What does OS stand for?", options: ["Operating System", "Open Software", "Online Service", "Optical Storage"], answer: "Operating System" }
];

// ==========================
// HTML Elements
// ==========================
const startBtn = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quizContainer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

// ==========================
// Shuffle Function
// ==========================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ==========================
// Start Quiz
// ==========================
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizData = shuffleArray(quizData);
  quizData.forEach(q => q.options = shuffleArray(q.options));
  quizContainer.classList.remove("hidden");
  showQuestion();
});

// ==========================
// Show Question
// ==========================
function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

// ==========================
// Check Answer
// ==========================
function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) score++;
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ==========================
// Show Result
// ==========================
function showResult() {
  quizContainer.innerHTML = `
    <h3>🎉 Quiz Completed!</h3>
    <p>You scored <b>${score}</b> out of <b>${quizData.length}</b>.</p>
    <p>${getMessage(score)}</p>
    <button id="restartBtn">Play Again 🔁</button>
  `;
  document.getElementById("restartBtn").addEventListener("click", restartQuiz);
}

// ==========================
// Messages
// ==========================
function getMessage(score) {
  if (score === quizData.length) return "🔥 Perfect! You’re a computer genius!";
  if (score >= 40) return "💪 Excellent! You know computers very well!";
  if (score >= 25) return "😊 Good effort! Keep learning.";
  return "😅 Try again, you’ll improve soon!";
}

// ==========================
// Restart Quiz
// ==========================
function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  quizContainer.innerHTML = "";
  resultEl.textContent = "";
  startBtn.style.display = "block";
}
