import LinkedList from "./linked-list/index.js";

//debug code
const llObject = new LinkedList<number>()

llObject.push(1)
llObject.push(2)
llObject.push(3)
llObject.push(4)


for (let node of llObject) {
    console.log(node)
}

console.log(llObject.find(value => {
    return value % 2 == 0
}, 1))