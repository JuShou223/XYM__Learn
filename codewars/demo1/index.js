function generateHashtag(str){
  return (str.length > 140 || str === '') ? false : '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(w){
  // console.log(w);
  return w.charAt(0).toUpperCase()+w.slice(1);
}
// How Are You
console.log(generateHashtag('how are you how are you how are you how are you how are you how are you how are you how are you how are youhow are you how are you how are you how are you how are you how are you how are you how are you how are you how are you how are you how are youhow are you how are you how are youhow are youhow are you how are you how are youhow are you how are you how are you'));