import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image || !title) {
      return setMessage("Title and image are required");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("caption", caption);

    try {
      const token = localStorage.getItem("token"); // if you stored JWT in localStorage
      const res = await axios.post("http://localhost:5000/api/photos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Photo uploaded successfully!");
      setTitle("");
      setCaption("");
      setImage(null);
    } catch (err) {
      setMessage("Upload failed: " + err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h1>Upload Photo</h1>
      <form onSubmit={handleUpload} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "auto" }}>
        <input
          type="text"
          placeholder="Photo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Caption (optional)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
      {message && <p style={{ marginTop: "1rem", color: "green" }}>{message}</p>}
    </div>
  );
}

export default Upload;
