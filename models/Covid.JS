// TODO 5: SETUP MODEL
const db = require("../config/database");

class Covid{
    static all(){
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM covids';
            db.query(sql, (err, result)=>{
            resolve(result)
            });
        });
    }

    static find(id){
        return new Promise((resolve, reject)=>{
            const sql = 'SELECT * FROM covids WHERE id = ?';
            db.query(sql, id,(err, result)=>{
                console.log(result);
                resolve(result[0]);
            })
        })
    }

    static search(name){
        return new Promise((resolve, reject)=> {
            const sql = 'SELECT * FROM covids WHERE name = ?';
            db.query(sql, name, (err, result)=> {
                console.log(result);
                resolve(result);
            })
        })
    }

    static findByStatus(status){
        return new Promise((resolve, reject)=> {
            const sql = 'SELECT * FROM covids WHERE status = ?';
            db.query(sql, status, (err, result)=> {
                console.log(result);
                resolve(result);
            })
        })
    }

    static Positive(){
        return new Promise((resolve, reject)=> {
            const sql = 'SELECT * FROM covids WHERE status = "Positive"';
            db.query(sql, (err, result)=> {
                console.log(result);
                resolve(result);
            })
        })
    }

    static Recovered(){
        return new Promise((resolve, reject)=> {
            const sql = 'SELECT * FROM covids WHERE status = "Recovered"';
            db.query(sql, (err, result)=> {
                console.log(result);
                resolve(result);
            })
        })
    }

    static Dead(){
        return new Promise((resolve, reject)=> {
            const sql = 'SELECT * FROM covids WHERE status = "Dead"';
            db.query(sql, (err, result)=> {
                console.log(result);
                resolve(result);
            })
        })
    }

    static async create(data){
        const insertData = await new Promise ((resolve, reject)=> {
            const sql = 'INSERT INTO covids SET ?';
            db.query(sql, data, (err, result)=>{
                resolve(result.insertId);
            });
        });
        const show = this.find(insertData);
        return show;
    }

    static update(id, data){
        return new Promise((resolve,reject)=> {
            const sql = "UPDATE covids SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, result)=>{
                console.log(result);
                resolve(result);
            })
        })
    }

    static delete(id){
        return new Promise((resolve,reject)=> {
            const sql = "DELETE FROM covids WHERE id = ?";
            db.query(sql, id, (err, result)=> {
                console.log(result);
                resolve(result);
            })
        })
    }
}

module.exports = Covid;