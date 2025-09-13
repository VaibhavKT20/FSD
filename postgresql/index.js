import "dotenv/config";
import { Client } from "pg";

async function createTablesAndSeed() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    // Create Users Table
    const usersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id BIGSERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Create Posts Table
    const postsTable = `
      CREATE TABLE IF NOT EXISTS posts (
        id BIGSERIAL PRIMARY KEY,
        user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await client.query(usersTable);
    console.log("Users table created successfully");

    await client.query(postsTable);
    console.log("Posts table created successfully");

    const insertUser = `
      INSERT INTO users (username, email, password)
      VALUES ('john_doe', 'john@example.com', 'hashed_password123')
      ON CONFLICT (email) DO NOTHING
      RETURNING id;
    `;
    const userResult = await client.query(insertUser);
    const userId = userResult.rows[0]?.id;

    if (userId) {
      console.log(`User inserted with id: ${userId}`);

      // Insert a post for that user
      const insertPost = `
        INSERT INTO posts (user_id, title, content)
        VALUES ($1, $2, $3)
        RETURNING id;
      `;
      const postResult = await client.query(insertPost, [
        userId,
        "My First Post",
        "This is the content of my first post!",
      ]);

      console.log(`Post inserted with id: ${postResult.rows[0].id}`);
    } else {
      console.log("User already exists, skipping post insert.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.end();
  }
}

createTablesAndSeed();
