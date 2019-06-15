function ListNode(val){
    this.val = val;
    this.next = null;
}
var a1 = new ListNode(1)
var a2 = new ListNode(2)
a1.next = a2
var a3 = new ListNode(4)
a2.next = a3

var b1 = new ListNode(1)
var b2 = new ListNode(3)
b1.next = b2
var b3 = new ListNode(4)
b2.next = b3

function mergeTwoLists(l1,l2){
    // 链表转数组的算法
    var ans = [];
    while(l1){
        ans.push(new ListNode(l1.val))
        l1 = l1.next;
    }
    while(l2){
        ans.push(new ListNode(l2.val))
        l2 = l2.next;
    }
    ans.sort(function(a,b){
       return a.val-b.val
    })
    if (!ans.length) return null
    for(var i =0; i<ans.length-1; i++){
        ans[i].next = ans[i+1] 
    }
    return ans[0]
}
var l3 = mergeTwoLists(a1,b1)
while(l3){
    console.log(l3.val)
    l3 = l3.next
}