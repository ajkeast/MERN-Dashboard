import { pool }  from "./database.js";

export class Messages {

    constructor(){
        this.connection = pool
    }

    async getAll(){
        const [rows] = await this.connection.query(
            `SELECT 
                CAST(messages.id AS VARCHAR(20)) AS id,
                COALESCE(display_name, user_name) AS user_name,
                CONCAT('#', channel_name) AS channel_name,
                content,
                messages.created_at,
                messages.last_updated
            FROM messages
            JOIN members ON messages.member_id = members.id
            JOIN channels ON messages.channel_id = channels.id
            ORDER BY created_at DESC;`)
        return rows;
    }

    async getById(id){
        const [rows] = await this.connection.query(
            `SELECT 
                CAST(messages.id AS VARCHAR(20)) AS id,
                COALESCE(display_name, user_name) AS user_name,
                CONCAT('#', channel_name) AS channel_name,
                content,
                messages.created_at,
                messages.last_updated
            FROM messages
            JOIN members ON messages.member_id = members.id
            JOIN channels ON messages.channel_id = channels.id
            WHERE messages.id = ?`,id)
        return rows;
    }

    async getByMonth(){
        const [rows] = await this.connection.query(
            `SELECT
                DATE_FORMAT(messages.created_at, '%b %Y') AS 'month',
                COUNT(*) AS 'messages'
            FROM messages
            JOIN members ON messages.member_id = members.id
            WHERE messages.created_at > '2017-08-01'
            GROUP BY DATE_FORMAT(messages.created_at, '%Y-%m');`)
            return rows;
    }
    async getByMonthByMember(){
        const [rows] = await this.connection.query(
            `SELECT
                DATE_FORMAT(messages.created_at, '%b %Y') AS 'month',
                COALESCE(display_name, user_name) AS user_name,
                COUNT(*) AS 'messages'
            FROM messages
            JOIN members ON messages.member_id = members.id
            GROUP BY DATE_FORMAT(messages.created_at, '%Y-%m'), user_name;`)
            return rows;
    }
}
