function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
                // 3
            // 9       20
        //  16   11 15    7
    
let root = new TreeNode(3)
let a1 = new TreeNode(9)
root.left = a1;
let a5 = new TreeNode(16)
a1.left = a5;
let a6 = new TreeNode(11)
a1.right = a6;
let a2 = new TreeNode(20)
root.right = a2;
let a3 = new TreeNode(15)
a2.left = a3;
let a4 = new TreeNode(7)
a2.right = a4;
// 层序遍历
// 从根开始， 一层来分层遍历 ， 7结束
// [[3],[9,20],[15,7]]
// 按层 把每个结点的子节点 告诉 算法就ok
// 子节点也有可能有他的子节点
// 队列 queue
function levelOrderTravrsal(root){
    if(!root) return []
    const items = [];
    const queue = [root,null];//队列 等待被了解情况的结点 出对
    //shift push
    let levelNodes = []; //每一层的结点
    while(queue.length>0){
        const t = queue.shift()
        console.log(t)
        if(t){
            levelNodes.push(t.val)
            if(t.left){
                queue.push(t.left)
            }
            if(t.right){
                queue.push(t.right)
            }
        }else{
            // 层次分隔符
            items.push(levelNodes)
            levelNodes =[]
            if(queue.length>0){
                queue.push(null)
            }
        }
    }
    return items;
}
// 中序遍历
// 从左往右遍历
function inorderTravelsal(root){
    let arr = [];
    // 一次小树单元的遍历

    const inorder = (root)=>{
        if(root ===null) return null
        inorder(root.left) // 左
        arr.push(root.val) // 孤家寡人
        inorder(root.right);
    }
    inorder(root)
    return arr
}

function inorderTravelsal2(root){
    var stack = [], //堆栈
    result = [], //解脱 左边出来
    cur = root;
    // console.log(root)
    while(stack.length>0 || cur !== null){
        if(cur !== null){
            stack.push(cur)
            cur = cur.left
        }else{
            console.log(stack)
            cur = stack.pop();
            console.log(cur)
            result.push(cur.val)
            cur = cur.right;    
        }
    }
    return result
}
// console.log(levelOrderTravrsal(root))
console.log(inorderTravelsal2(root))