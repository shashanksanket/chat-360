"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
const fs_1 = __importDefault(require("fs"));
const loggers = {};
const configFile = 'logging.config.json';
const config = JSON.parse(fs_1.default.readFileSync(configFile, 'utf8'));
const customFormat = winston_1.default.format.printf(({ level, message, timestamp, source }) => {
    return JSON.stringify({
        level,
        log_string: message,
        timestamp,
        metadata: { source }
    });
});
function getLogger(apiName) {
    if (!loggers[apiName]) {
        const apiConfig = config.apis[apiName.split('/')[1]];
        // const level = apiConfig.level;
        const fileName = apiConfig.filePath || `log${apiName.split('-')[1]}.log`;
        const logFolder = path_1.default.join(process.cwd(), 'logs');
        if (!fs_1.default.existsSync(logFolder)) {
            fs_1.default.mkdirSync(logFolder);
        }
        const filePath = path_1.default.join(logFolder, fileName);
        loggers[apiName] = winston_1.default.createLogger({
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), customFormat),
            defaultMeta: { source: filePath },
            transports: [
                new winston_1.default.transports.File({ filename: filePath })
            ]
        });
    }
    return loggers[apiName];
}
exports.default = getLogger;
