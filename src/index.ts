import { app } from "./app";
import { bandsRouter } from "./routes/bandRouter";
import { userRouter } from "./routes/userRouter";


app.use("/users",userRouter)

app.use("bands", bandsRouter)

export const isEven = (integer: any): boolean => {
  return integer % 2 == 0
}
