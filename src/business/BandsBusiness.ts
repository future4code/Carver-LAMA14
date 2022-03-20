import BandsData from "../data/BandsData";
import { BandInputDTO } from "../model/Bands";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const bandsData = new BandsData();


export default class BandsBusiness {

    CreateBand = async (input: BandInputDTO, token: string): Promise<string> => {

        try {
        let message = 'Success!'

        const id = idGenerator.generate();

        // const verify = authenticator.getData(token)

        await bandsData.InsertBand(input, id)

        return message

        } catch(error){
            res.status(400).send({ error: error.message });
        }

    }
}