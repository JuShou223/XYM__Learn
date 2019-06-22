function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(4)
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
head.next = node1;
node1.next = node2;
node2.next = node3;
var insertionSortList = function(head) {
    let pre = new ListNode(0)
    pre.next = head;
    let tail = pre.next;
    while(tail.next){
        let node = tail.next;
        if(node.val > tail.val){
            tail = tail.next
        }else{
            tail.next= tail.next.next;
            let last = pre;
            let index = pre.next;
            while(node.val > index.val){
                last = last.next
                index = index.next
            }
            last.next = node;
            node.next = index;
        }

    }
    return pre.next
};
console.log(insertionSortList(head),"123")