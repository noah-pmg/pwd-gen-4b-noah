const pwdGen = (length = 12, specialChar = false) => {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabzdefghijklmnopqrstuvwxyz1234567890";
    
    if(specialChar == true){
        char += ",.#+_-&%()=!?";
    }

    let pwdString = "";

    for (let index = 1; index <= length ; index++) {
        pwdString += char.charAt(Math.floor(Math.random() * char.length));
    } 
    return pwdString;
}

module.exports = pwdGen;