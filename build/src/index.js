"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
const app_1 = require("./app");
const userRouter_1 = require("./routes/userRouter");
app_1.app.use("/users", userRouter_1.userRouter);
const isEven = (integer) => {
    return integer % 2 == 0;
};
exports.isEven = isEven;
//# sourceMappingURL=index.js.map