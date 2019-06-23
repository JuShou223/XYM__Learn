var carPooling = function(trips, capacity) {
    let empty = capacity;
    let local = 0;
    trips.sort((a,b)=>a[1]-b[1])
    for(let i = 0; i<trips.length; i++){
        local = trips[i][1]
        empty = empty - trips[i][0]
        for(let j = 0; j<i; j++){
            if(local>=trips[j][2]){
                empty = empty + trips[j][0]
                trips[j][2]=9999
            }
        }
        if(empty<0){
            return false
        }
    }
    return true
};
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]],11))