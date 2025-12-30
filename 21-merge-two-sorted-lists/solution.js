
var mergeTwoLists = function (list1, list2) {
    let mergedListHead = null;
    let p1 = list1;
    let p2 = list2;
    let temp;

    while (p1 != null && p2 != null) {
        if (p1.val <= p2.val) {
            if (!mergedListHead) {
                mergedListHead = { val: p1.val, next: null };
                temp = mergedListHead;
                p1 = p1.next;
                continue;

            }

            temp.next = { val: p1.val, next: null };
            temp = temp.next;
            p1 = p1.next;
        } else {
            if (!mergedListHead) {
                mergedListHead = { val: p2.val, next: null };
                temp = mergedListHead;
                p2 = p2.next;
                continue;
            }


            temp.next = { val: p2.val, next: null };
            temp = temp.next;
            p2 = p2.next;
        }

    }
    while (p1) {
        if (!mergedListHead) {
            mergedListHead = { val: p1.val, next: null };
            temp = mergedListHead;
        } else {

            temp.next = { val: p1.val, next: null };
            temp = temp.next;
        }

        p1 = p1.next;
    }
    while (p2) {
        if (!mergedListHead) {
            mergedListHead = { val: p2.val, next: null };
            temp = mergedListHead
        } else {

            temp.next = { val: p2.val, next: null };
            temp = temp.next;
        }
        p2 = p2.next;
    }

    return mergedListHead;
};

let arr1 = [1,2,8,12,45,65,400];
let arr2 = [6,60,75,105,600,6000,100000];

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

function printList(list) {
    let temp = list;
    let str = ""
    while (temp != null) {
        str = str + temp.val + " -> ";
        temp = temp.next;
    }
    console.log(str + "null");


}

let list1 = arryToList(arr1);
let list2 = arryToList(arr2);



printList(mergeTwoLists(list1, list2));

