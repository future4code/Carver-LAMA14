import BandsData from "../data/BandsData";
import { BandInputDTO } from "../model/Bands";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const bandsData = new BandsData();


export default class BandsBusiness {

    CreateBand = async (input: BandInputDTO, token: string): Promise<string> => {

        let message = 'Success!'

        const id = idGenerator.generate();

        const verify = authenticator.getData(token)
        //if(verificar se token valido)
        
        await bandsData.InsertBand(id, input.name, input.musicGenre, input.responsible);

        return message

    }

}