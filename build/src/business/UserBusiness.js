"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
const HashManager_1 = require("../services/HashManager");
const Authenticator_1 = require("../services/Authenticator");
const idGenerator = new IdGenerator_1.IdGenerator();
const hashManager = new HashManager_1.HashManager();
const authenticator = new Authenticator_1.Authenticator();
const userDatabase = new UserDatabase_1.UserDatabase();
class UserBusiness {
    constructor() {
        this.SignUp = (user) => __awaiter(this, void 0, void 0, function* () {
            const id = idGenerator.generate();
            const hashPassword = yield hashManager.hash(user.password);
            yield userDatabase.InsertUser(id, user.email, user.name, hashPassword, user.role);
            const accessToken = authenticator.generateToken({ id, role: user.role });
            return accessToken;
        });
        this.Login = (user) => __awaiter(this, void 0, void 0, function* () {
            const userFromDB = yield userDatabase.getUserByEmail(user.email);
            const hashCompare = yield hashManager.compare(user.password, userFromDB.getPassword());
            const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });
            if (!hashCompare) {
                throw new Error("Invalid Password!");
            }
            return accessToken;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map