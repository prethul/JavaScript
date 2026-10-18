function validateUsername(username){

    if(username.length < 4){
        return "Too Short";
    }

    if (username.includes (" ")){
        return "No space allowed";
    }

    if (username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }

    return "Available";
}


console.log(validateUsername("Dip"))
console.log(validateUsername("Dipto howlader Prethul"))