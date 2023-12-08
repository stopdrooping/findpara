function mixarray(array){
    let outarray= [];
    let cnt= array.length;
    for (let i=0; i<cnt; i++){
        let index= Math.floor(Math.random()*array.length);        
        let element= array.splice(index, 1)[0];
        outarray.push(element);
    }
    return outarray;
}