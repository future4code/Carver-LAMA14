import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../error/BaseError";


const userBusiness = new UserBusiness();

export class UserController {

    signup = async  (req: Request, res: Response): Promise<void> => {
        try {
            let message = "Success!" 

            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }
            
            const token = await userBusiness.SignUp(input);

            res.status(200).send({message,  token });

        } catch (error) {
            // if( error instanceof BaseError){
                res.status(400).send({ error: error.message });
            //}

        }

        // await BaseDatabase.destroyConnection();
    }

    login = async (req: Request, res: Response): Promise<void> => {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const token = await userBusiness.Login(loginData);

            res.status(200).send({ token });

        } catch (error) {
            if( error instanceof BaseError){
                res.status(400).send({ error: error.message });
            }
        }

        // await BaseDatabase.destroyConnection();
    }

}