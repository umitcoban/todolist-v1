const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
   var today = new Date();
   var currentDay = today.getDay();
    var day = "";
   switch(currentDay){
    case 0:
        day="sunday";
        break;
        case 1:
            day="monday";
            break;
            case 2:
                day="tuesday";
                break;
                case 3:
                    day="wednesday";
                    break;
                    case 4:
                        day="thursday";
                        break;
                        case 5:
                            day="friday";
                            break;
                            case 6:
                                day="saturday";
                                break;
                                default:
                                    console.log("Error Current Day: " + currentDay);
   }
    res.render('list', {kindOfDay: day.toLocaleUpperCase()});
});


app.listen(3000, function () {  
    console.log("server has started 3000");
});