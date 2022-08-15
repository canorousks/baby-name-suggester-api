import { query } from "express";
import mongoose from "mongoose"
import babyNameModel from "../models/babyname.model.js";

const babyNameController = {
    find: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }
        
        var query = {};
        for(const [key,value] of Object.entries(req.body)){
            if(value)query[key] = value;
        }
        console.log(query);
        babyNameModel.find(query,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                // console.log(data);
                res.send(data);
            }
        });
        // res.send(babyNameModel.find(req.body));
        // res.send("name");
        // babyNameModel.find(req.body, (err, data) => {
        //     if (err)
        //         res.status(500).send({
        //             message:
        //                 err.message || "Some error occurred while creating the Tutorial."
        //         });
        //     else res.send(data);
        //     // else res.send()
        // });
    },
};

export default babyNameController;