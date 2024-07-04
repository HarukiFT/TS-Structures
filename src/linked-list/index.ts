type LinkedNode<T> = {
    value: T
    next: LinkedNode<T> | null
}

type LinkedPredictFunction<T> = (value: T) => boolean

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

    [Symbol.iterator]() : Iterator<LinkedNode<T>> {
        let nodePointer: LinkedNode<T> | null = this._head;
        
        return {
            next(): IteratorResult<LinkedNode<T>> {
                if (!nodePointer) {
                    return {
                        done: true,
                        value: undefined as any
                    }
                } else {
                    const currentNode = nodePointer
                    nodePointer = nodePointer.next

                    return {
                        done: false,
                        value: currentNode
                    }
                }
            }
        }
    }
}

export default LinkedList