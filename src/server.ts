import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";
import path from "path";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    limits: { fieldSize: 50 * 1024 * 1024 },
  })
);

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }
  return res.status(500).json({
    status: "erprr",
    message: "Internal server error;",
  });
});

app.listen(process.env.PORT, () => console.log("Servidor online!"));
