const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req , res) => {
   try{
    const toDo = await ToDoModel.find()
    res.status(200).send(toDo)
   }catch(error){
    res.status(500).json({error:'Error fetching data'})
   }
}


module.exports.saveToDo = async(req , res)=>{
    const {text} = req.body
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Data added")
        console.log(data)
        res.send(data)
    })
}


module.exports.updateToDo = async(req , res)=>{
    const {_id , text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id ,{text})
    .then(()=>res.send("updated"))
    .catch((error)=>console.log(err))
}


module.exports.deleteToDo = async(req , res)=>{
    const {_id , text} = req.body
    ToDoModel
    .findByIdAndDelete(_id )
    .then(()=>res.send("deleted"))
    .catch((error)=>console.log(err))
}