import LinkedList from "./linked-list/index.js";

//debug code
const llObject = new LinkedList<number>()

llObject.push(1)
llObject.push(2)
llObject.push(3)
llObject.push(4)

const objs = llObject.find(value => {
    return true
})

console.log(objs)
llObject.pop(objs[3])

console.log(llObject.find(value => true))
