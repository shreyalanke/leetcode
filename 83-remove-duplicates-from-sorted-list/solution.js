/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let temp = head;

    while(temp!=null&&temp.next!=null){
        if(temp.val== temp.next.val){
            temp.next=temp.next.next
        }else{
             temp=temp.next;     
        }
       
    }
    return head;
};
function printList(list) {
    let temp = list;
    let str = ""
    while (temp != null) {
        str = str + temp.val + " -> ";
        temp = temp.next;
    }
    console.log(str + "null");


}

function arryToList(arr) {
    let temp;
    let head;
    for (let i of arr) {
        if (!head) {
            head = { val: i, next: null }
            temp = head;
            continue;
        }
        temp.next = { val: i, next: null }
        temp = temp.next;
    }
    return head;
}

let ll=arryToList([10,20,20,30,40,50])
res=deleteDuplicates(ll)
printList(res)
