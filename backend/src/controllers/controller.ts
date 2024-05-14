import { Request, Response } from 'express';
import getLogger from '../services/logger';

async function logMessage(req: Request, res: Response, level: string, message: string): Promise<void> {
  const logger = getLogger(req.route.path);
  logger.log({ level, message, timestamp: new Date().toISOString() });
}

async function fetchOne(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the FetchOne API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in FetchOne API');
    res.sendStatus(500);
  }
}

async function fetchTwo(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchTwo API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchTwo API');
    res.sendStatus(500);
  }
}

async function fetchThree(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchThree API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchThree API');
    res.sendStatus(500);
  }
}

async function fetchFour(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchFour API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchFour API');
    res.sendStatus(500);
  }
}

async function fetchFive(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchFive API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchFive API');
    res.sendStatus(500);
  }
}

async function fetchSix(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchSix API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchSix API');
    res.sendStatus(500);
  }
}

async function fetchSeven(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchSeven API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchSeven API');
    res.sendStatus(500);
  }
}

async function fetchEight(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchEight API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchEight API');
    res.sendStatus(500);
  }
}

async function fetchNine(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchNine API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchNine API');
    res.sendStatus(500);
  }
}

async function fetchTen(req: Request, res: Response): Promise<void> {
  try {
    await logMessage(req, res, 'info', 'Inside the fetchTen API');
    res.sendStatus(200);
  } catch (error: any) {
    await logMessage(req, res, 'error', 'Error occurred in fetchTen API');
    res.sendStatus(500);
  }
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
}

export default controllers;
