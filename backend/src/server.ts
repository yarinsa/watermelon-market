import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { apolloServer } from "./apollo";

const app = express();
const http = require("http").createServer(app);

app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

apolloServer.applyMiddleware({ app });

const port = process.env.PORT || 3030;
http.listen(port, () => {
  console.log("Server is running on port: " + port);
});
