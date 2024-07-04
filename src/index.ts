import LinkedList from "./linked-list/index.js";

//debug code
const llObject = new LinkedList<number>()

llObject.push(1)
llObject.push(2)
llObject.push(3)

for (let node of llObject) {
    console.log(node)
}
