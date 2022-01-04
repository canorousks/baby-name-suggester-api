import babyNameModel from "../models/babyname.model.js";

const babyNameController = {
    find: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }
        babyNameModel.find(req.body, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            else res.send(data);
            // else res.send()
        });
    },
};

export default babyNameController;