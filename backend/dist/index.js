"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use("/api/v1", route_1.default);
app.get('/', (req, res) => {
    res.send("Welcome");
});
app.use((0, cors_1.default)());
route_1.default.get('/api/v1/logs', (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 1;
    const logFolder = path_1.default.join(__dirname, '..', 'logs');
    const logFiles = fs_1.default.readdirSync(logFolder);
    const logs = [];
    logFiles.forEach((file) => {
        const filePath = path_1.default.join(logFolder, file);
        const logData = fs_1.default.readFileSync(filePath, 'utf8');
        const parsedLogs = logData.split('\n').map((line) => {
            try {
                return JSON.parse(line);
            }
            catch (error) {
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
