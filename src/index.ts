import {ToRooheSoheil} from './e-education.app';
import dotenve from 'dotenv';

dotenve.config();

const sag = new ToRooheSoheil();

sag.start(process.env.PORT || 3000, <string>process.env.DB);