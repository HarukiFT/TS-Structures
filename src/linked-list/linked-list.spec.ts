import { expect } from "chai"
import LinkedList, { LinkedNode } from "./index.js"

describe('LinkedList', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>()
    })

    it('should push elements to the list', () => {
        list.push(1)
        list.push(2)
        list.push(3)

        const values: number[] = [...list].map(value => { return value.value })
        expect(values).to.deep.equal([1, 2, 3])
    })

    it('should iterate over elements in the list', () => {
        list.push(1)
        list.push(2)
        list.push(3)

        const values: number[] = []
        for (let currentNode of list) {
            values.push(currentNode.value)
        }

        expect(values).to.deep.equal([1, 2, 3])
    })

    it('should find elements by predict function', () => {
        list.push(1)
        list.push(2)
        list.push(3)
        list.push(4)

        const values: number[] = list.find(value => value % 2 == 0).map(node => node.value)
        expect(values).to.deep.equal([2, 4])
    })

    it('should find elements with limit', () => {
        list.push(2)
        list.push(4)
        list.push(6)
        list.push(8)

        const values: number[] = list.find(value => value % 2 == 0, 2).map(node => node.value)
        expect(values).to.deep.equal([2, 4])
    })

    it('should pop element from list', () => {
        list.push(2)
        list.push(3)
        list.push(4)

        const secondNode: LinkedNode<number> = list.find(value => value == 3, 1)[0]
        list.pop(secondNode)

        expect(list.find(() => true).map(node => node.value)).to.deep.equal([2, 4])
    })
})