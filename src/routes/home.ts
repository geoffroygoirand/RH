import express, { Request, Response, Router } from 'express';
import { getHomePage } from '../controllers/home';

const router: Router = express.Router();

router.get('/', getHomePage);

export default router;
