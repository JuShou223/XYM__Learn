let stratigies={
  "S":function(salary){
    return salary*5;
  },
  "S":function(salary){
    return salary*5;
  },
  "A":function(salary){
    return salary*3;
  },
  "B":function(salary){
    return salary*2;
  },
  "C":function(salary){
    return salary*1;
  }
}
function calculate(level,salary){
      return stratigies[level](salary);
//   switch(level){
//     case "S":
//     return salary*5;
//     case "A":
//     return salary*3;
//     case "B":
//     return salary*2;
//     case "C":
//     return salary*1;
//     case "D":
//     return "删库跑路";
//   }
}
console.log(calculate("A",15)+"K");