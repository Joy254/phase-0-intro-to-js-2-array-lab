// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift (name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const Broom=[...cats, name]
    return Broom;
}
function prependCat(name) {
    const Arnold=[name, ...cats]
    return Arnold;
}
function removeLastCat() {
    const Melo=cats.slice(0,-1);
    return Melo
}
function removeFirstCat() {
    const Hem=cats.slice(1);
    return Hem
}