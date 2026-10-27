import express from "express";
import cors from "cors";
import commonData from "./data/common.json" with { type: "json" };
import pagesData from "./data/pages.json" with { type: "json" };

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3000;

app.get(["/api/common", "/api/settings"], (req, res) => {
  res.json(commonData);
});

app.get(["/api/page", "/api/pages"], (req, res) => {
  const queryPath = req.query.path || "/";
  const page = pagesData.find((p) => p.path === queryPath);

  if (!page) {
    return res.status(404).json({ error: `Сторінку "${queryPath}" не знайдено` });
  }

  res.json(page);
});

app.listen(PORT, () => {
  console.log(`🌸 Florist Guide (Довідник Флориста) Mock API працює на http://localhost:${PORT}`);
  console.log(`- http://localhost:${PORT}/api/common`);
  console.log(`- http://localhost:${PORT}/api/page?path=/`);
});
