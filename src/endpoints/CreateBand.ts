import { Request, Response } from "express";
import BandsData from "../data/BandsData";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Bands";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";




export default class bandData extends BaseDatabase {

private static TABLE_NAME = "lama_registered_bands"

 CreateBand = async (req: Request , res: Response): Promise<void> => {
     
    const idGenerator = new IdGenerator();
    const authenticator = new Authenticator();

     try{

        let message = 'Success!'

        const input: BandInputDTO = {
            name: req.body.name,
            musicGenre: req.body.musicGenre,
            responsible: req.body.responsible
           }
        // const accessToken: string = req.headers.authorization as string

        if(!input.name || !input.musicGenre || input.responsible ){
            throw new Error("pass the body correctly")
        }
        // if(!accessToken){
        //     throw new Error("pass the header correctly")
        // }

        const id = await idGenerator.generate()

        await BandsData.connection()
            .insert({
                id: id,
                name: input.name,
                musicGenre: input.musicGenre,
                responsible: input.responsible
            })
            .into(bandData.TABLE_NAME);


        res.status(201).send(message)

    } catch(e) {

        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
    }

}
}