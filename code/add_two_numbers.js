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
    let longLink;
    let shortLink;
    if (l1.length > l2.length) {
        longLink = l1;
        shortLink = l2;
    } else {
        longLink = l2;
        shortLink = l1;
    }

    for (let index = 0; index < shortLink.length; index++) {
        const element1 = l1[index];
        const element2 = l2[index];
        let totalNum = element1 + element2 + addFlag;
        if (totalNum > 9) {
            totalNum = totalNum % 10;
            addFlag = 1;
        } else {
            addFlag = 0;
        }
        total.unshift(totalNum);
        
    }
    if (l1.length != l2.length) {
        let header = longLink.slice(shortLink.length, longLink.length);
        total.unshift(header);
    }
    
    return total.reverse();

};

let s = addTwoNumbers([2,4,3], [5,6,4]);
console.log(s);