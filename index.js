let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
    return cats
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop(-1)
    return cats
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(0)
    return cats
}
function appendCat(Broom){
    const newCats = [...cats, Broom]
    return newCats
}
function prependCat(Arnold){
    const newCats = [Arnold, ...cats]
    return newCats
}
function removeLastCat(Garfield){
    const newCats = cats.slice(0, 2)
    return newCats
}
function removeFirstCat(Milo){
    const newCats = cats.slice(1)
    return newCats
}