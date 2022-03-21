
function getDay(){
    var today = new Date();
    //var currentday = today.getDay();
    //var currentDate= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDay();
    //currentTime= today.getMinutes();
     
     var options= {
         weekday:"long",
         day:"numeric",
         month:"long"};
     var day=today.toLocaleDateString('en-Us',options);
     return day;

     
}
console.log(getDay);
module.exports =getDay;