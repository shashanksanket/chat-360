"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../services/logger"));
function logMessage(req, res, level, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = (0, logger_1.default)(req.route.path);
        logger.log({ level, message, timestamp: new Date().toISOString() });
    });
}
function fetchOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the FetchOne API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in FetchOne API');
            res.sendStatus(500);
        }
    });
}
function fetchTwo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchTwo API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchTwo API');
            res.sendStatus(500);
        }
    });
}
function fetchThree(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchThree API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchThree API');
            res.sendStatus(500);
        }
    });
}
function fetchFour(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchFour API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchFour API');
            res.sendStatus(500);
        }
    });
}
function fetchFive(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchFive API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchFive API');
            res.sendStatus(500);
        }
    });
}
function fetchSix(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchSix API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchSix API');
            res.sendStatus(500);
        }
    });
}
function fetchSeven(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchSeven API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchSeven API');
            res.sendStatus(500);
        }
    });
}
function fetchEight(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchEight API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchEight API');
            res.sendStatus(500);
        }
    });
}
function fetchNine(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchNine API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchNine API');
            res.sendStatus(500);
        }
    });
}
function fetchTen(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield logMessage(req, res, 'info', 'Inside the fetchTen API');
            res.sendStatus(200);
        }
        catch (error) {
            yield logMessage(req, res, 'error', 'Error occurred in fetchTen API');
            res.sendStatus(500);
        }
    });
}
const controllers = {
    fetchOne,
    fetchTwo,
    fetchThree,
    fetchFour,
    fetchFive,
    fetchSix,
    fetchSeven,
    fetchEight,
    fetchNine,
    fetchTen
};
exports.default = controllers;
