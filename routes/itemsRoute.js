const express = require('express')
const date = require('../models/date')
const ItemsControllers= require('../controllers/ItemsControllers')

const router = express.Router()

router.get('/', ItemsControllers.getItemsAll); 
// router.post('/add',ItemsControllers.addItems)

//delete an item


//router.post("/delete", ItemsControllers.deleteItems);


// router.get('/list',(req,res)=>{
//     res.send('lists page routes')
// })


//router.get('/list/:listParams',ItemsControllers.addNewList)
    router.get("/:id",ItemsControllers.newListItem)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//     res.send("New list items");
//     const enteredList = req.params.newlist;
//     console.log(enteredList);



// newList.findOne({name:enteredList},function(err,resultfind){
//     if(!err){
//         if(!resultfind){
//             const newList1 = new newList({name:enteredList, 
//                 item:defaulItems
//             })
//             newList1.save();
//         }else{
//             res.render("list",{kindOfDay:resultfind.name,newItemList:resultfind.item})
            
//         }
//     }
// })

module.exports = router

 

//  });