/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let total = [];
    let addFlag = 0;
    while (l1 != null && l2 != null) {
        let totalNum = l1.val + l2.val + addFlag;
        if (totalNum > 9) {
            totalNum = totalNum % 10;
            addFlag = 1;
        } else {
            addFlag = 0;
        }
        total.unshift(totalNum);
        l1 = l1.next;
        l2 = l2.next;
    };
    if (addFlag == 1) {
        if (addOne(l1) && addOne(l2)) {
            total.unshift(1);
        }
    }
    let header;
    if (l1 == null) {
        header = check(l2);
    } else {
        header = check(l1);
    }
    if (header != []) {
        total.unshift(...header.reverse());
    }
    total = total.reverse();
    const headerNode = new ListNode(total[0]);
    let preNode = headerNode;
    for (let index = 1; index < total.length; index++) {
        const element = total[index];
        let tempNode = new ListNode(element);
        preNode.next = tempNode;
        preNode = tempNode;
    }
    return headerNode;

};

let check = function(l) {
    let total = [];
    while (l != null) {
        total.push(l.val);
        l = l.next;
    }
    return total;
}

let addOne = function(l) {
    if (l != null) {
        l.val = l.val + 1;
        while (l.val == 10) {
            l.val = 0;
            if (l.next == null) {
                l.next = new ListNode(1);
                break;
            }
            l = l.next;
            l.val = l.val + 1;
        }
        return false;
    }
    return true;
}

function ListNode(val) {
         this.val = val;
         this.next = null;
}

let l11 = new ListNode(2);
let l12 = new ListNode(4);
let l13 = new ListNode(3);
let l21 = new ListNode(5);
let l22 = new ListNode(6);
let l23 = new ListNode(4);
l11.next = l12;
l12.next = l13;
l21.next = l22;
l22.next = l23;

let l31 = new ListNode(2);
let l32 = new ListNode(8);
let l33 = new ListNode(9);
let l34 = new ListNode(9);
l32.next = l33;
l33.next = l34;

addTwoNumbers(l31, l32);