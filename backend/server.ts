import { routes } from "./api/routes";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import { buildSchema } from "graphql";
import graphqlExpress from "express-graphql";
import { schema } from "./graphql";

const app = express();
const http = require("http").createServer(app);

app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(cors);

  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  console.log("DEV MODE: CORS options has been set");
  const corsOptions = {
    origin: [
      "http://10.100.102.15:8080/",
      "http://192.168.14.89:8080",
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "http://127.0.0.1:3030",
      "http://localhost:3030",
      "http://172.20.10.4:3000",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: schema, graphiql: true })
);
// routes
app.use("/api/places", routes.places);

const port = process.env.PORT || 3030;
http.listen(port, () => {
  console.log("Server is running on port: " + port);
});
