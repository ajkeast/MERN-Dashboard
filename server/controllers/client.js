import mysql from "mysql2"
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
        host:process.env.SQL_HOST,
        user:process.env.SQL_USER,
        password:process.env.SQL_PASSWORD,
        database:process.env.SQL_DATABASE
    }).promise();

export async function queryFirsts(limit){
    const [rows] = await pool.query(
        `SELECT * 
        FROM firstlist_id
        ORDER BY timesent DESC
        LIMIT ?;`, limit);
    return rows;
}

export async function queryScore(){
    const [rows] = await pool.query(
        `SELECT 
            user_id, 
            count(*) as firsts,
            DATEDIFF(NOW(), MAX(timesent)) AS days_since_first
        FROM firstlist_id
        GROUP BY user_id
        ORDER BY firsts DESC;`);
    return rows;
}

export const getFirsts = async (req, res) => {
    const limit = req.params.limit;
    try{
        const result = await queryFirsts(Number(limit));   // must cast as number 
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getScore = async (req, res) => {
    try{
        const result = await queryScore()
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};