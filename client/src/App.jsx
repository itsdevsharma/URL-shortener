import { useState } from "react";
import axios from "axios";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!longUrl.trim()) return alert("Enter a valid URL!");

    try {
      const res = await axios.post("http://localhost:5000/shorten", {
        longUrl,
      });

      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter long URL..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleShorten}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Shorten URL
      </button>

      {shortUrl && (
        <p style={{ marginTop: "20px" }}>
          <strong>Short URL:</strong>{" "}
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
