import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    res.json({ status: "Funfando teste teste teste" });
})

export { router };