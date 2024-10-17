import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(express.json());

// cors é usado para habilitar qualquer ip fazer requisicao nessa api
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        // Se for uma instancia do tipo error
        res.status(400).json({
            error: err.message
        });
    }

    res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});

app.listen(3333, () => console.log('Servidor online!!'));