// TODO 4: SETUP CONTROLLER
const Covid = require("../models/Covid");

class CovidController {
    async index(req, res){
        const dbData = await Covid.all();
        if (dbData) {
            const data = {
                message : "Menampilkan semua data pasien",
                resource : dbData
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "Data Empty"
        }
        res.status(200).json(data);
    }

    async show(req, res){
        const {id} = req.params;
        const dbData  = await Covid.find(id);
        if (dbData){
            const data = {
                message : "Menampilkan data pasien",
                resource : dbData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "Error"
        }
        return res.status(404).json(data);
    }

    async search(req, res){
        const {name} = req.params;
        const dbData = await Covid.search(name);
        if (dbData){
            const data = {
                message : "Menampilkan data pasien",
                resource : dbData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "Error"
        }
        return res.status(404).json(data);

    }

    async positive(req, res){
        const dbData = await Covid.Positive();
        if (dbData){
            const data = {
                message : "Menampilkan data pasien",
                data : dbData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "Error"
        }
        return res.status(404).json(data);
    }

    async recovered(req, res){
        const dbData = await Covid.Recovered();
        if (dbData){
            const data = {
                message : "Menampilkan data pasien",
                data : dbData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "Error"
        }
        return res.status(404).json(data);
    }

    async dead(req, res){
        const dbData = await Covid.Dead();
        if (dbData){
            const data = {
                message : "Menampilkan data pasien",
                data : dbData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "Error"
        }
        return res.status(404).json(data);
    }

    async store(req, res){
        const dbData = await Covid.create(req.body);
        const data = {
            message : "Menambahkan data pasien baru",
            data : dbData
        }
        res.status(201).json(data);
    }

    async update(req, res){
        const {id} = req.params
        const dbData = await Covid.find(id)
        
        if (dbData){
            await Covid.update(id, req.body);
            const returnData = await Covid.find(id);
            const data = {
                message : "Update data berhasil",
                data : returnData
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "Error"
    
        }
        return res.status(404).json(data);
    }

    async destroy(req, res){
        const {id} = req.params;
        const dbData = await Covid.find(id);
        
        if (dbData){
            await Covid.delete(id);
            const data = {
                message : "Menghapus data berhasil"
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "Error"
        }
        return res.status(404).json(data);
    }

}

const object = new CovidController;
module.exports = object;