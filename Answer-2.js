function getDayType(day){
    day = day.toLowerCase();

    switch(day){
        case "friday":
        case "staurday":
            return "Weekend";

        case "sunday":
        case "monday": 
        case "Tuesday": 
        case "wednesday": 
        case "thursday":
            return "Working day";
            
        default:
            return "Invalid day";    
    }

}

console.log(getDayType("Friday"))
console.log(getDayType("Monday"))