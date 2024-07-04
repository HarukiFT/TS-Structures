type LinkedNode<T> = {
    value: T
    next: LinkedNode<T> | null
}

class LinkedList<T> {
    private _head: LinkedNode<T> | null = null

    push(value: T): void {
        const node: LinkedNode<T> = {value: value, next: null}
        
        if (!this._head) {
            this._head = node
            return
        }

        let nodePointer = this._head
        while (nodePointer.next) {
            nodePointer = nodePointer.next
        }

        console.log(nodePointer.value)

        nodePointer.next = node
    }
}

export default LinkedList