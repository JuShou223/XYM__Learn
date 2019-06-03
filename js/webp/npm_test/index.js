const add=(a,b)=>{
  if(typeof a ==='string' && typeof b==='string')
  {
    return +a+(+b);
  }
  return a+b
}

module.exports={add}