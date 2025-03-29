import React, { useEffect, useState } from "react";
import "./Accordion.css";

const questionNames = [
  "Life, the Universe and Everything",
  "50 Shades of Gray",
  "Seven Ate Nine",
  "BAABBB",
  "Brackets",
  "Modified 0-1-1-2",
  "Trust me bro",
  "String stuff"
];

const inputOutputDetails = [
  "The input is a single integer, and the output is a single integer.",
  "The input consists of an integer and a binary string separated by a space, and the output is a single integer.",
  "The input is an integer between 1 and 15, and the output is a 64-bit integer.",
  "The input consists of an integer \( n < 10^5 \) on the first line, followed by \( n \) uppercase strings of length ≤ 4, separated by spaces. The output is a string.",
  "The input consists of an integer \( n \) \( (1 \leq n \leq 100000) \) on the first line, followed by a string of brackets \( ( \) and \( ) \) of length \( n \). The output is a string.",
  "The input consists of three integers \( a, b, \) and \( n \) \( (1 \leq a, b \leq 10^9, 1 \leq n \leq 100000) \). The output is an integer.",
  "NO REQUESTS ALLOWED FOR THIS PROBLEM",
  "The input consists of an integer \( n \) \( (1 < n < 1000) \) on the first line, followed by a string of length \( n \). The output is a string."
];

const Accordion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (index) => {
    setCurrent(index);
    setOutput("");
    setError("");
    setInput("");
  };

  const handleDecrypt = async () => {
    setOutput("");
    setError("");

    if (!input.trim()) {
      setError("Input cannot be empty.");
      return;
    }

    if (current === 6) {
      setError("No requests allowed for this problem.");
      return;
    }

    setIsLoading(true);

    try {
      const problemEndpoints = [
        "/problem1", "/problem2", "/problem3", "/problem4",
        "/problem5", "/problem6", "/problem7", "/problem8"
      ];

      const response = await fetch(`https://decrypt-api-0mny.onrender.com/api${problemEndpoints[current]}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: input.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setError(`Error ${response.status}: ${errorData.reason || "Something went wrong"}`);
        return;
      }

      const data = await response.json();
      setOutput(data.output || "No output received");
      setError("");

    } catch (err) {
      console.error("Decryption Error:", err);
      setError(err.message || "An unexpected error occurred during decryption.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeforcesRedirect = () => {
    const urls = [
      "https://codeforces.com",
      "https://codeforces.com",
      "https://codeforces.com",
      "https://codeforces.com",
      "https://codeforces.com",
      "https://codeforces.com",
      "https://codeforces.com",
      "https://codeforces.com"
    ];
    window.open(urls[current], "_blank");
  };

  const handleDownloadZip = () => {
    const zipFileUrl = `https://example.com/binary-files/problem${current + 1}.zip`;
    const link = document.createElement("a");
    link.href = zipFileUrl;
    link.download = `problem${current + 1}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <div className="unified-box">
        <aside className="sidebar">
          <ul id="questionList">
            {questionNames.map((name, idx) => (
              <li
                key={idx}
                className={current === idx ? 'active' : ''}
                onClick={() => handleClick(idx)}
              >
                {name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <div className="quiz-card">
            <h2>{questionNames[current]}</h2>

            <div className="input-output-info">
              <pre>{inputOutputDetails[current]}</pre>
            </div>

            <textarea
              className="answer-input"
              placeholder="Type your query..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="btn-group">
              <button 
                onClick={handleDecrypt} 
                className="decrypt-btn"
                disabled={isLoading}
              >
                {isLoading ? "Decrypting..." : "Decrypt"}
              </button>

              <button 
                onClick={handleCodeforcesRedirect} 
                className="btn"
              >
                Codeforces
              </button>

              <button 
                onClick={handleDownloadZip} 
                className="btn"
              >
                Download Zip
              </button>
            </div>

            {output && (
              <div className="output-box">
                <h3>Output:</h3>
                <p>{output}</p>
              </div>
            )}

            {error && <p className="error-msg">{error}</p>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accordion;
