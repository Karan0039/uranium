const batchModel = require("../models/batchModel")
const developerModel = require("../models/developerModel")

const createbatch = async function (req, res) {
    let data = req.body;
    let saveData = await batchModel.create(data);
    res.send({ msg: saveData });
}

const createDeveloper = async function (req, res) {
    let data = req.body;
    let saveData = await developerModel.create(data);
    res.send({ msg: saveData });
}

const scholarshipDevelopers = async function (req, res) {
    let getData = await developerModel.find({ gender: "female", percentage: { $gte: 70 } })
    res.send({ msg: getData })
}

const getDevelopers = async function (req, res) {
    let query1 = req.query.percentage
    let query2 = req.query.program
    let arr = []
    let data1 = await batchModel.find({ program: { $eq: query2 } }).select({ _id: 1 })
    let data2
    for (let i = 0; i < data1.length; i++) {
        arr.push(data1[i]._id)
    }

    data2 = await developerModel.find({ percentage: { $gte: query1 }, batch: { $in:arr }})
    res.send({ msg: data2 })
}
 
module.exports.createbatch = createbatch; 
module.exports.createDeveloper = createDeveloper;
module.exports.scholarshipDevelopers = scholarshipDevelopers
module.exports.getDevelopers = getDevelopers