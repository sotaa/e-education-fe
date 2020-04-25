import { Router } from 'express';
import { courseRouter } from '../course';

const router = Router();

router.use('/course', courseRouter);

export {router as apiRouter};