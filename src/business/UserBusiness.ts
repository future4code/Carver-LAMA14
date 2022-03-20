import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserData } from "../data/UserData";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const userDatabase = new UserData();

export class UserBusiness {

    SignUp = async (user: UserInputDTO): Promise<string> => {

        
        const id = idGenerator.generate();
        
        const hashPassword = await hashManager.hash(user.password);
        
        await userDatabase.InsertUser(id, user.email, user.name, hashPassword, user.role);

        const accessToken = authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    Login = async (user: LoginInputDTO): Promise<string> => {

        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}