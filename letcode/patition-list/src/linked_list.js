import LinkedListNode from './linked_list_node.js'
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  append(val){
    const newnode = new LinkedListNode(val);
    if(!this.head){
      this.head = newnode;
      this.tail = newnode;
      return this;
    }
    this.tail.next=newnode; 
    this.tail = newnode;
    return this;
  }
  toArray(){
    const nodes = []
    let currentNode = this.head;
    while(currentNode){
      nodes.push(currentNode);
      currentNode=currentNode.next;
    }
    return nodes;
  }
  toString(){
    return this.toArray().map(node => node.value)
  }
}
export default LinkedList;