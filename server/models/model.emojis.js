import { pool }  from "./database.js";

export class Emojis {

    constructor(){
        this.connection = pool
    }

    async getAll(){
        const [rows] = await this.connection.query(
            `SELECT
                e.id,
                e.emoji_name,
                e.url,
                e.created_at,
                e.last_updated,
                COALESCE(occurences, 0) AS occurrences
            FROM
                emojis as e
            LEFT JOIN (
                SELECT
                    emojis.id,
                    emojis.emoji_name,
                    COUNT(*) AS occurences
                FROM
                    emojis
                JOIN
                    messages m ON LOCATE(CONCAT(':', emojis.emoji_name, ':'), m.content) > 0
                GROUP BY
                    emojis.id
            ) AS subquery ON e.id = subquery.id;`)
        return rows;
    }

    async getCount(){
        const [rows] = await this.connection.query(
            `SELECT
                emoji_name,
                COUNT(*) AS occurences
            FROM
                emojis
            JOIN
                messages ON LOCATE(CONCAT(':',emoji_name,':'), content) > 0
            GROUP BY
                emojis.id;`)
        return rows;
    }

    async getById(id){
        const [rows] = await this.connection.query(
            `SELECT * FROM emojis
            WHERE id = ?;`,id)
        return rows;
    }
}
