import {db} from "../db.js"

export const getHints = (req,res)=>{
   const q = "SELECT * FROM dandi.hint";

   db.query(q, (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}


export const getHint = (req,res)=>{
   const q = "SELECT * FROM dandi.hint WHERE location_no = ?";

   db.query(q,[req.params.location_no], (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}