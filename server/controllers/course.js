import {db} from "../db.js"

export const getCourses = (req,res)=>{
   const q = req.query.cat 
   ? "SELECT * FROM course WHERE cat=?"
   :  "SELECT * FROM course";

   db.query(q,[req.query.cat], (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}

export const getCourse = (req,res)=>{
    res.json("from controller")
}

export const addCourse = (req,res)=>{
    res.json("from controller")
}

export const deleteCourse = (req,res)=>{
    res.json("from controller")
}

export const updateCourse = (req,res)=>{
    res.json("from controller")
}