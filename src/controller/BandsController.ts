import { Request, Response } from "express";
import BandsBusiness from "../business/BandsBusiness";
import { BandInputDTO } from "../model/Bands";


const bandsBusiness = new BandsBusiness();

export default class BandsController {

    CreateBand = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: BandInputDTO = {
                 name: req.body.name,
                 musicGenre: req.body.musicGenre,
                 responsible: req.body.responsible
                }
            // const token: string = req.headers.authorization as string
            const token = "token"

            const message = await bandsBusiness.CreateBand(input, token)
     
            res.status(201).send({ message })
            
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

    }

    SearchBandById = async (req: Request, res: Response): Promise<void> => {

    }

}