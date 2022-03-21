const router = require('../routes/itemsRoute')
const Item = require('../models/items')
const List = require('../models/list')
const date = require('../models/date')

const Item1 = new Item({name:"buy food"})

const Item2 = new Item ({name:"cook food"})

const Item3 = new Item({name:"eat food"})

const defaulItems = [Item1,Item2,Item3]

const getItemsAll = function(req,res){
    let day = date();
    
     //finding items
    // res.render("list", {kindOfDay:day,newItemList:items});

    Item.find({},function(err,result){
        if(result.length===0){
            Item.insertMany(defaulItems, function(err,result){
                if(err){
                    console.log('Error updating the database')
                }else{
                    console.log("database updated succefully");
                }
            })
            res.redirect("/");
        }else{
            res.render("list",{kindOfDay:day,newItemList:result})
        }
    })
    
    
 }


//const deleteItems = 

const addNewList = (req,res)=>{
    res.send('lists params route');
     const newParams = res.params.listParams;
     console.log(newParams)
    list = new List({name:res})

}



 exports.getItemsAll = getItemsAll;
 //exports.addItems = addItems;
 //exports.deleteItems = deleteItems;
 exports.addNewList =addNewList;