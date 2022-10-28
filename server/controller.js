import asyncHandler from "express-async-handler";
import DataModel from "./dataModel.js";

const getData = asyncHandler( async(req, res, next) => {
    const datas = await DataModel.find({});
    res.status(200).json(datas);
});

const postData = asyncHandler( async(req, res, next) =>{
    if(!req.body.name){
        res.status(400);
        throw new Error('Please add name');
    }

    const datas = await DataModel.create(
        {
            name    : req.body.name,
            img     : req.body.img,
            summary : req.body.summary
        });
    
    res.status(200).json(datas);
    
});

const updateData = asyncHandler( async(req, res, next) => {
    const data = await DataModel.findById(req.params.id);
    if(!data){
        res.status(400);
        throw new Error('Task not found');
    }
    if(!req.body.name){
        res.status(400);
        throw new Error('Please add name');
    }
    const dataUpdate = await DataModel.findByIdAndUpdate(req.params.id,
        {
            name    : req.body.name,
            img     : req.body.img,
            summary : req.body.summary
        });
    res.status(200).json(dataUpdate);

});

const deleteData = asyncHandler( async(req, res, next) => {
    const data = await DataModel.findById(req.params.id);
    if(!data){
        res.status(400);
        throw new Error('Data not found');
    }
    const dataDelete = await DataModel.findByIdAndDelete(req.params.id);
    res.status(200).json(dataDelete);
})

export {getData, postData, updateData, deleteData};