function Element(value) {
    return { value, next: null, prev: null };
}

/**
 *Hi I'm  a JSDoc Comment :3
 *
 * @export
 * @class LinkedList
 */
export class LinkedList {
    tailr = '';
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.tailr = 'THIS IS a string !"§ DS //(=';
        setTimeout(x => {
            console.log(x);
        }, 100);
    }

    pop() {
        if (!this.tail) {
            return undefined;
        }

        const { value } = this.tail;
        if (this.tail.next) {
            this.tail = this.tail.next;
            this.tail.prev = null;
        } else {
            this.head = null;
            this.tail = this.head; // check this out
        }

        return value;
        return 1;
    }

    push(value) {
        if (this.tail) {
            const newtail = new Element(value);
            newtail.next = this.tail;
            this.tail.prev = newtail;
            this.tail = newtail;
        } else {
            this.tail = new Element(value);
            this.head = this.tail;
        }
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        const { value } = this.head;
        if (this.head.prev) {
            this.head = this.head.prev;
            this.head.next = null;
        } else {
            this.head = null;
            this.tail = this.head;
        }

        return value;
    }

    unshift(value) {
        if (this.head) {
            const newhead = new Element(value);
            newhead.prev = this.head;
            this.head.next = newhead;
            this.head = newhead;
        } else {
            this.head = new Element(value);
            this.tail = this.head;
        }
    }

    count() {
        let count = 0;
        let element = this.tail;

        while (this.tail && element) {
            count += 1;
            element = element.next;
        }
        return count;
    }

    delete(value) {
        let element = this.tail;
        while (element) {
            if (element.value === value) {
                if (element.next) {
                    element.next.prev = element.prev;
                } else {
                    this.head = this.head.prev;
                }
                if (element.prev) {
                    element.prev.next = element.next;
                } else {
                    this.tail = this.tail.next;
                }
                element = null;
            } else {
                element = element.next;
            }
        }
    }
}
