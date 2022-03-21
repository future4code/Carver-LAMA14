import { Request, Response } from "express";
import BandsData from "../data/BandsData";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Bands";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export default class SerchBandById extends BaseDatabase {

private static TABLE_NAME = "lama_registered_bands"

 serchBand = async (req: Request , res: Response): Promise<void> => {

     try{

        let message = 'Success!'

        const name = req.query.name

        if(!name){
            throw new Error("pass the query correctly")
        }

        const band = await BandsData.connection.raw(`
        SELECT * FROM ${SerchBandById.TABLE_NAME} WHERE name = ${name}
        `)

        if(band === []){
            throw new Error("band not found");
            
        }

        res.status(201).send(band)

    } catch(e) {

        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
    }

}
}