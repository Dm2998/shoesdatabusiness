// server.js
// Static site server (scalable foundation)

import express from "express";

const app = express();
const PORT = process.env.PORT || 5050;

// Serve static files from /public
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
