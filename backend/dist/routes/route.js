"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controllers/controller"));
const router = express_1.default.Router();
router.get('/api-one', controller_1.default.fetchOne);
router.get('/api-two', controller_1.default.fetchTwo);
router.get('/api-three', controller_1.default.fetchThree);
router.get('/api-four', controller_1.default.fetchFour);
router.get('/api-five', controller_1.default.fetchFive);
router.get('/api-six', controller_1.default.fetchSix);
router.get('/api-seven', controller_1.default.fetchSeven);
router.get('/api-eight', controller_1.default.fetchEight);
router.get('/api-nine', controller_1.default.fetchNine);
router.get('/api-ten', controller_1.default.fetchTen);
exports.default = router;
