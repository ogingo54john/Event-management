const router = require('../routes/itemsRoute')
const Item = require('../models/items')
const List = require('../models/list')
const date = require('../models/date')
const newList = require('../models/items')

const Item1 = new Item({name:"Add your items here"})

const Item2 = new Item ({name:"checked to delete"})

const Item3 = new Item({name:"click + to add"})

const defaulItems = [Item1,Item2,Item3]

const getItemsAll = function(req,res){
    let day = date();
    //let day ="Today";

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

const newListItem = (req,res)=>{
    //res.send('lists params route');
     const newParams = req.params.id;
     console.log(newParams)

    newList.findOne({name:newParams},(err,docs)=>{
        if(!docs){
            const newListItem = new newList({
                name:newParams,
                items:defaulItems
            })
            newListItem.save();
            res.redirect("/api/item/"+newParams)
        }else{
            //console.log("list exist")
            res.render("list",{kindOfDay:docs.name,newItemList:docs.items})
        }
    })

    

}



 exports.getItemsAll = getItemsAll;
 //exports.addItems = addItems;
 //exports.deleteItems = deleteItems;
 exports.newListItem =newListItem;