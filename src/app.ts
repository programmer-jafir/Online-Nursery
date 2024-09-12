import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import notFound from './middlwares/notFound';

const app = express(); 

//parsers
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173', credentials: true}));//{origin: 'http://localhost:5173', credentials: true}

//application routes
app.use('/api/', router);

app.get('/', (req:Request, res: Response) => {
 res.send('Hello World!')

})


//Not FOUND
app.use(notFound);

export default app;
