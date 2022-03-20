import { app } from "./app";
import { userRouter } from "./routes/userRouter";


app.use("/users",userRouter);

export const isEven = (integer: any): boolean => {
  return integer % 2 == 0
}
