function reverse (str){
    let amc = "";
for(let i = str.length-1; i >= 0; i --){
    amc += str[i]
}
 return amc;
}



console.log(reverse("Abdul Majeed"))