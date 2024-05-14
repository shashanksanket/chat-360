import express, { Request, Response } from 'express';
import router from './routes/route';
import path from 'path';
import fs from 'fs';
import cors from 'cors'

const app = express();
const port: number = 3001;

app.use("/api/v1", router);


app.get('/', (req: Request, res: Response) => {
  res.send("Welcome")
});

app.use(cors())

router.get('/logs', (req: Request, res: Response) => {
  const page: number = parseInt(req.query.page as string, 10) || 1;
  const limit: number = parseInt(req.query.limit as string, 10) || 1;

  const logFolder = path.join(__dirname, '..', 'logs');
  const logFiles = fs.readdirSync(logFolder);
  const logs: any[] = [];

  logFiles.forEach((file) => {
    const filePath = path.join(logFolder, file);
    const logData = fs.readFileSync(filePath, 'utf8');
    const parsedLogs = logData.split('\n').map((line) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        return null;
      }
    });
    logs.push(...parsedLogs.filter((log) => log));
  });

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedLogs = logs.slice(startIndex, endIndex);

  res.json({
    logs: paginatedLogs,
    currentPage: page,
    totalPages: Math.ceil(logs.length / limit),
    totalLogs: logs.length
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
