import { app } from "./app";
import bandData from "./endpoints/createBand";
import SerchBandById from "./endpoints/SearchBandById";
import { bandsRouter } from "./routes/bandRouter";
import { userRouter } from "./routes/userRouter";


app.use("/users",userRouter)

// app.use("bands", bandsRouter)

const createBand = new bandData()
const serchBandById = new SerchBandById()

app.post("/bands/create", createBand.CreateBand)
app.get("/bands/query", serchBandById.serchBand)

export const isEven = (integer: any): boolean => {
  return integer % 2 == 0
}
