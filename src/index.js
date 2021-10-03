import '@babel/polyfill'
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes';

const {PORT} = process.env;
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api', router);

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}/api`));
