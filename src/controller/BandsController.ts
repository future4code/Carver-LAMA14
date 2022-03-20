import { Request, Response } from "express";
import BandsBusiness from "../business/BandsBusiness";
import { BandInputDTO } from "../model/Bands";


const bandsBusiness = new BandsBusiness();

export default class BandsController {

    CreateBand = async (req: Request, res: Response): Promise<void> => {

        try {

            const { name, musicGenre, responsible, token } = req.body
     
            const input: BandInputDTO = {name, musicGenre, responsible}

            const message = await bandsBusiness.CreateBand(input, token)
     
            res.status(201).send({ message})
            
        } catch (error) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
     
           res.send({ message })
        }

    }

    SearchBandById = async (req: Request, res: Response): Promise<void> => {

    }

}