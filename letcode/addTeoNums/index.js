// 线性表
function LinkedNode(val){
  this.val=val;
  this.next = null;
}
function addTwoNumers(l1 ,l2){

}
// 529
let a1=new LinkedNode(5); //head结点
let a2 = new LinkedNode(2);
a1.next=a2;
let a3 = new LinkedNode(9); //尾结点
a2.next=a3;
let b1= new LinkedNode(9);
let b2= new LinkedNode(5);
b1.next=b2;
let node=a1;
let num='';
// while(node){
//   num+=node.val;
//   node=node.next;
// }
console.log(a2.next);