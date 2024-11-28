import cors from "cors";
import * as dotenv from "dotenv";
import { Client } from "pg";
import express from "express";

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI_LOCAL,
});

client.connect();

const app = express();

app.use(express.json());

app.use(cors());

interface Data {
  id: number;
  display_name: string;
  title: string;
  description: string;
}

app.get("/", async (_request, response) => {
  try {
    const { rows } = await client.query(
      "SELECT users.display_name, projects.id, projects.title,projects.description,projects.created_at FROM projects INNER JOIN users ON projects.user_id = users.id"
    );

    console.log(rows);

    const data: Data[] = rows.map((row) => ({
      id: row.id,
      display_name: row.display_name,
      title: row.title,
      description: row.description,
    }));

    response.status(200);
    response.send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send({ error: "Failed to fetch data" });
  }
});

app.post("/post", async (request, response) => {
  console.log(request.body);
  const { display_name, title, description } = request.body;

  try {
    const query = `
        WITH inserted_user AS (
          INSERT INTO users (display_name)
          VALUES ($1)
          RETURNING id
        )
        INSERT INTO projects (user_id, title, description)
        VALUES (
          (SELECT id FROM inserted_user),
          $2,
          $3
        )
        RETURNING *;
      `;
    const { rows } = await client.query(query, [
      display_name,
      title,
      description,
    ]);
    response.status(201);
    response.send(rows);
  } catch (error) {
    console.error("Error inserting post:", error);
    response.status(500).json({ error: "Failed to create post." });
  }
});

const portLocal = process.env.PORT_LOCAL;
const portDocker = process.env.PORT_DOCKER;

app.listen(portLocal, () => {
  console.log("Webbtjänsten kan nu ta emot anrop.");
});
