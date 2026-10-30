import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = Number(process.env.PORT) || 3e3;
const HOST = process.env.HOST || "0.0.0.0";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/health", (_req, res) => {
  res.json({
    status: "online",
    app: "LJ M\xEDdias - Presen\xE7a Digital",
    nodeVersion: process.version,
    uptime: Math.floor(process.uptime()),
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.all("/api/*", (_req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
    message: "Rota da API n\xE3o encontrada"
  });
});
const distPath = path.resolve(__dirname, "dist");
app.use(
  express.static(distPath, {
    maxAge: "1d",
    index: false
  })
);
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});
app.listen(PORT, HOST, () => {
  console.log(`[LJ M\xEDdias] Servidor Node.js 22 ativo em http://${HOST}:${PORT}`);
  console.log(`[LJ M\xEDdias] Servindo frontend de: ${distPath}`);
});
var server_default = app;
export {
  server_default as default
};
