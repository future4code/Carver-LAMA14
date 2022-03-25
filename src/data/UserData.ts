import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserData extends BaseDatabase {

  private static TABLE_NAME = "lama_users";

 

  public InsertUser = async (id: string, email: string, name: string, password: string, role: string): Promise<void> => {

    await UserData.connection()
      .insert({
        id,
        email,
        name,
        password,
        role
      })
      .into(UserData.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<User> {

    const result = await UserData.connection()
      .select("*")
      .from(UserData.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}
