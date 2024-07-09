import { Request, Response } from 'express';

const getHomePage = (req: Request, res: Response): void => {
    res.render('index', { title: 'Express' });
}

export { getHomePage };
