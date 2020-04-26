import { Education } from './e-education.app';
import dotenve from 'dotenv';

dotenve.config();

const app = new Education();

app.start(process.env.PORT || 3000, <string>process.env.DB);
