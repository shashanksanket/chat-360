import path from 'path';
import winston from 'winston';
import fs from 'fs';

const loggers: { [key: string]: winston.Logger } = {};

const configFile = 'logging.config.json';
const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

const customFormat = winston.format.printf(({ level, message, timestamp, source }) => {
  return JSON.stringify({
    level,
    log_string: message,
    timestamp,
    metadata: { source }
  });
});

function getLogger(apiName: string): winston.Logger {
  if (!loggers[apiName]) {
    const apiConfig = config.apis[apiName.split('/')[1]];
    // const level = apiConfig.level;
    const fileName = apiConfig.filePath || `log${apiName.split('-')[1]}.log`;

    const logFolder = path.join(process.cwd(), 'logs');

    if (!fs.existsSync(logFolder)) {
      fs.mkdirSync(logFolder);
    }

    const filePath = path.join(logFolder, fileName);

    loggers[apiName] = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        customFormat
      ),
      defaultMeta: { source: filePath },
      transports: [
        new winston.transports.File({ filename: filePath })
      ]
    });
  }
  return loggers[apiName];
}

export default getLogger;
