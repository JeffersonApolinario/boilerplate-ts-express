import { Router, Request, Response } from 'express';
import PersonSchema from '../../mongoose/schemas/person';


class PersonController {
    router: Router = null;
    constructor(router: Router) {
        this.router = router;
        router.get('/', this.mainAction);
    }
    mainAction(req: Request, res: Response) {
        PersonSchema.find((err, data) => {
            if (err) {
                res.status(500).send({
                    message : err
                });
                return;
            }
            
            res.status(200).send(data);
        })
    }
}

const router: Router = Router();
const mainController = new PersonController(router);

export default mainController.router;