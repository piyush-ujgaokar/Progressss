
import express from 'express'
import noteModel from './models/notes.model.js'


const app=express()
app.use(express.json())



app.post('/api/note',async(req,res)=>{
    const {title,description}=req.body

    const notes=await noteModel.create({
        title:title,
        description:description
    })


    return res.status(201).json({
        message:"Notes created Suuccessfully",
        note:notes
    })

})

app.get('/api/notes',async(req,res)=>{
    const notes=await noteModel.find()

    return res.status(200).json({
        message:"Notes fetched Successfully",
        notes:notes
    })
})

app.get('/api/note/:id',async(req,res)=>{
    const {id}=req.params
    console.log(id);
    
    const note=await noteModel.findById(id)

    return res.status(200).json({
        message:"Note Find Successfully",
        note:note
    })


})

app.delete('/api/note/:id',async(req,res)=>{
    const {id}=req.params
    await noteModel.findByIdAndDelete(id)

    return res.status(200).json({
        message:"Delete Successfully"
    })
})

app.patch('/api/note/:id',async(req,res)=>{
    const {id}=req.params
    const {title,description}=req.body

    const note=await noteModel.findByIdAndUpdate(id,{
        title,description
    })

    return res.status(201).json({
        message:"Note Updated Successfully",
        note:note
    })

})



export default app