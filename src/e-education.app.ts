import express from 'express';
import { connect, set } from 'mongoose';
import cors from 'cors';
import { apiRouter } from './routes';

export class ToRooheSoheil {
  private app: express.Express;
  private get publicFolder(): string {
    return '/public/dist/class-management-fe';
  }

  constructor() {
    this.app = express();
    this.init();
  }

  // initial app.
  private init() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/api', apiRouter);
    this.app.use(express.static(__dirname + this.publicFolder));
  }

  // start application method.
  start(port: number | string, dbConnectionString: string) {
    this.app.listen(port, () => {
      console.log(`app is running on port ${port}`);
      // set mongoose configurations;
      set('useFindAndModify', false);
      set('useCreateIndex', true);
      // connect to database.
      connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true}).then(() =>
        console.log(
          `connected to mongo db with ${dbConnectionString} connection string.`
        )
      );
    });
  }
}
