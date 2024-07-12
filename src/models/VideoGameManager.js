const AbstractManager = require("./AbstractManager");

class VideoGameManager extends AbstractManager {
  constructor() {
    super({ table: "video_game" });
  }
  
  async readAll() {
    // Execute the SQL SELECT query to retrieve all video games from the "video_game" table
    const [row] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of video_games
    return row;
  }
  async read(id) {
    // Execute the SQL SELECT query to retrieve all video games from the "video_game" table
    const [row] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);

    // Return the array of video_games
    return row;
  }

  async delete(id) {
    // Execute the SQL SELECT query to retrieve all video games from the "video_game" table
    const [row] = await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    // INSERT INTO video_game (name, developer_id) VALUES ("Elden Ring", 1), ("Dark Souls 3", 1);
  
    // Return the array of video_games
    return row.affectedRows;
  }
  async update(body) {
    // Execute the SQL SELECT query to retrieve all video games from the "video_game" table
    const { id, name, developer_id } = body;
    const [row] = await this.database.query(`UPDATE ${this.table} SET name = ?, developer_id = ? WHERE id = ?`,
       [name, developer_id, id]);
    // INSERT INTO video_game (name, developer_id) VALUES ("Elden Ring", 1), ("Dark Souls 3", 1);
  
    // Return the array of video_games
    return row.affectedRows;
  }
}

module.exports = VideoGameManager;
