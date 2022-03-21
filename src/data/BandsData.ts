import { BandInputDTO } from "../model/Bands";
import { BaseDatabase } from "./BaseDatabase";





export default class BandsData extends BaseDatabase {

    private static TABLE_NAME = "lama_registered_bands"


    InsertBand = async(input: BandInputDTO, id:string) =>{

        await BandsData.connection()
        .insert({
            id: id,
            name: input.name,
            musicGenre: input.musicGenre,
            responsible: input.responsible
        })
        .into(BandsData.TABLE_NAME);

    }

}