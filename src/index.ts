import fastifyCookie from "@fastify/cookie";
import fastifySession from "@fastify/session";
import dd from "connect-pg-simple";
import fastify from "fastify";
import pg from "pg";
import { test } from "./test";

const pgSession = dd(fastifySession as any);

const app = fastify({ trustProxy: true });

const pool = new pg.Pool({
  user: "postgres",
  host: "162.250.122.178",
  database: "adaltest",
  password: "Page7515",
  port: 5432,
});

app.get("/", async (request, reply) => {
  try {
    await test();
    console.log("success");
    reply.code(200).send("Success");
  } catch (error) {
    console.log(error);
    reply.send({ error });
  }
});

const start = async () => {
  try {
    await app.listen({ port: 4000 });
    console.log(`Server ready at port 4000`);
  } catch (error) {
    console.log(error);
    app.log.error(error);
    process.exit(1);
  }
};

start();
