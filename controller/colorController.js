import slugify from "slugify";
import colorModel from "../modal/colorModel.js";


export const createColorController = async(req, res)=>{
    try{
        const { name } = req.body;
        if(!name){
            return res.status(401).send({message:"Name is required"});

        }
        const existingColor = await colorModel.findOne({ name });
        if(existingColor){
            return res.status(200).send({
                success:false,
                message:"Color Already Exists",
            });
        }
        const color  = await new colorModel({
            name,
            slug:slugify(name),
        }).save();
        res.status(201).send({
            success:true,
            message:"New Color Created Successfully",
            color,
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error getting color"
        })
        
    }
}

// update color

export const updateColorController = async(req, res)=>{
    try{
        const { name } = req.body;
        const { id } = req.params;
        const color = await colorModel.findByIdAndUpdate(
            id,
            { name, slug:slugify(name)},
            { new : true}
        );
        res.status(200).send({
            success:true,
            message:"Color updated Sucessfully",
            color,
        })


    }catch(error){
        console.log(error);
        res.status(500).send({
            success:"false",
            message:"Error to updating color",
            error,
        })

    }
}
// get all color

export const colorController = async(req, res)=>{
    try{
        const color = await colorModel.find({});
        res.status(200).send({
            success:true,
            message:"All Color List",
            color,
        });
    }catch(error){
        console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all color",
      });

    }
}
//singleColorController
export const singleColorController = async(req, res)=>{
    try{
        const color = await colorModel.findOne({slug:req.params.slug});
          res.status(200).send({
            success:true,
            message:"Get  Single color Successfully",
            color,
          })
    }catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error While getting Single Color",
        });
    }
}
//deleteColorController
export const deleteColorController = async(req, res)=>{
    try{
        const { id } = req.params;
        await colorModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:"color deleted successfully"
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error while deleting color",
          error,
        });
    }
}