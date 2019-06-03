// 有个链表
import LinkedList from './linked_list.js'
// 链表里有head属性 tail 属性
const partition = (head,x) => {
  let cur = head , next , preHead , preTail , afterHead , afterTail
  if(head == null){
    return null;
  }
  while(cur){
    next = cur.next
    cur.next = null;//断掉之前的关系
    if(cur.value < x){
      if(!preHead){
        preHead = cur;
        preTail = cur;
      }else{
        preTail.next = cur;
        preTail = cur;
      }
    }else{
      if(!afterHead){
        afterHead = cur;
        afterTail = cur;
      }else{
        afterTail.next = cur;
        afterTail = cur;
      }
    }
    cur = next;
  }
  if(preTail){
    preTail.next = afterHead;
    return preHead;
  }else{
    return afterHead;
  }
}
const linkedList = new LinkedList()
linkedList.append(1).append(4).append(3).append(2).append(5).append(2)
console.log(linkedList)
const newHead = partition(linkedList.head,3)
let curNode = newHead;
while(curNode){
  console.log(curNode.value)
  curNode =curNode.next;
}
