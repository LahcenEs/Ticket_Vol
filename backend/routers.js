import express, { Router } from "express";
import Client from "./models/client.js"
import Message from "./models/message.js";
const router = express.Router()
const vols = [
    {
      "id": 1,
      "from": "Casablanca",
      "to": "Rabat",
      "date": "2024-05-05",
      "timeTaken": 1.5,
      "km": 95
    },
    {
      "id": 2,
      "from": "Casablanca",
      "to": "Marrakech",
      "date": "2024-05-06",
      "timeTaken": 2,
      "km": 240
    },
    {
      "id": 3,
      "from": "Rabat",
      "to": "Fes",
      "date": "2024-05-07",
      "timeTaken": 3,
      "km": 190
    },
{
      "id": 4,
      "from": "Fes",
      "to": "Tangier",
      "date": "2024-05-08",
      "timeTaken": 2.5,
      "km": 320
    },
    {
      "id": 5,
      "from": "Marrakech",
      "to": "Agadir",
      "date": "2024-05-09",
      "timeTaken": 4,
      "km": 250
    },
    {
      "id": 6,
      "from": "Agadir",
      "to": "Meknes",
      "date": "2024-05-10",
      "timeTaken": 5,
      "km": 370
    },
{
      "id": 7,
      "from": "Meknes",
      "to": "Oujda",
      "date": "2024-05-11",
      "timeTaken": 6,
      "km": 490
    },
    {
      "id": 8,
      "from": "Oujda",
      "to": "Kenitra",
      "date": "2024-05-12",
      "timeTaken": 3.5,
      "km": 280
    },
    {
      "id": 9,
      "from": "Kenitra",
      "to": "Tetouan",
      "date": "2024-05-13",
      "timeTaken": 2,
      "km": 160
    },


{
      "id": 10,
      "from": "Tetouan",
      "to": "Safi",
      "date": "2024-05-14",
      "timeTaken": 4.5,
      "km": 330
    },
    {
      "id": 11,
      "from": "Safi",
      "to": "El Jadida",
      "date": "2024-05-15",
      "timeTaken": 1.5,
      "km": 110
    },
    {
      "id": 12,
      "from": "El Jadida",
      "to": "Beni Mellal",
      "date": "2024-05-16",
      "timeTaken": 3,
      "km": 220
    },
] 
router.get ('/vols',(req,res) =>{
    const {from,to,startDate,endDate} = req.query
    console.log(req.query)
    try{
    //     const filteredVols = vols.filter(vol =>
    //         vol.from.toLowerCase() === from.toLowerCase() &&
    //         vol.to.toLowerCase() === to.toLowerCase() &&
    //         vol.date >= startDate &&
    //         vol.date <= endDate
    //       );
    //       res.json(filteredVols);
    }catch{

    }
}) 
router.post('/contact',async(req,res)=> {
    const {firstName,lastName,email,phone,message} = req.body 
    console.log(req.body)
    try {
        const client = await Client.create({firstName,lastName,email,phone})
        await Message.create({
            clientId: client.id,
            content: message 
          });
        res.json({ message:'success!!'})
    } catch (error) {
        res.json({message:error.message})
    }
})
export default router;