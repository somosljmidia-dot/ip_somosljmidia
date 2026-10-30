/**
 * LJ Mídias - Production & Development Node.js Server
 * Hostinger Node.js 22 Compatible
 */
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables (.env if present)
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck & diagnostic API route
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    app: 'LJ Mídias - Presença Digital',
    nodeVersion: process.version,
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

// Any unmatched /api/* route returns JSON 404
app.all('/api/*', (_req: Request, res: Response) => {
  res.status(404).json({
    error: 'API endpoint not found',
    message: 'Rota da API não encontrada',
  });
});

// Path to compiled frontend assets
const distPath = path.resolve(__dirname, 'dist');

// Serve static frontend files from /dist
app.use(
  express.static(distPath, {
    maxAge: '1d',
    index: false,
  })
);

// SPA client-side routing fallback: serve index.html for all non-API GET requests
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

// Start Express server
app.listen(PORT, HOST, () => {
  console.log(`[LJ Mídias] Servidor Node.js 22 ativo em http://${HOST}:${PORT}`);
  console.log(`[LJ Mídias] Servindo frontend de: ${distPath}`);
});

export default app;
