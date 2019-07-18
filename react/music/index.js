var bossRand = function (mynum,x,y) {
    var RandomArr = [];
    var RandomTotal = 0;
    function createRandom(num) {
      if (RandomArr.length == 0) {
        RandomTotal = num;
      }
      for (var i = 0; i < num; i++) {
        var code = Math.round(Math.random()*(x*y-1));
        if (!RandomArr.includes(code)) {
          RandomArr.push(code);
        }
      }
      var cha = RandomTotal - RandomArr.length;
      if (cha <= 0) {
        return RandomArr
      } else {
        return createRandom(cha)
      }
    }
    let mines = createRandom(mynum);
    console.log(mines.length)
    let map = [];
    for(let i=0; i<x; i++){
        let row =[]
        for(let j=0; j<y; j++){
            let minenum = 0;
            if(mines.includes(i*x+j)){
              row.push({type: "mine"})  
            }else{
                for(let k=0; k<9; k++){
                    let newi = i-1+Math.floor(k/3);
                    let newj = j-1+k%3;
                    if(newi != i || newj!=j){
                        if(mines.includes(newi*x+newj)){
                            minenum++;
                        }
                    }
                }
                row.push({type:minenum})
            }
        }
        map.push(row)
    }
    // return map
    console.log(map[0].length)
    // return createRandom(mynum);
  }
// function createMap(){
//     return this.bossRand(50,9,9)
// }
bossRand(30,16,9)