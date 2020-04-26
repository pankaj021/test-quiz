const arr = [
    1,
    2,
    3,
    4,
    5,
    6
]

const mapArr1 = arr.map((element, index) => {
    return element * element
})
console.log("mapArr1::::::::::::::::::::", mapArr1);
const mapArr2 = arr.map((element, index) => {
    return {
        arrElement: element,
        arrIndex: index,
        type: element % 2 === 0
            ? 'EVEN'
            : 'ODD'
    }
})
console.log("mapArr2::::::::::::::::::::", mapArr2);

const mapArr3 = arr.map((element, index) => {
    if (index % 2 === 0) 
        return element
})

console.log("mapArr3::::::::::::::::::::", mapArr3);

const arrForEach = arr.forEach((element, index) => {
    return {
        arrElement: element,
        arrIndex: index,
        type: element % 2 === 0
            ? 'EVEN'
            : 'ODD'
    }
})

console.log("arrForEach::::::::::::::::::::", arrForEach);

const forEachArr = [];
const arrForEach2 = arr.forEach((element, index) => {
    if (index % 2 === 0) 
        forEachArr.push(element)
})
console.log("forEachArr::::::::::::::::::::", forEachArr);

const filterArr = arr.filter((element, index) => index % 3 === 0)

console.log("filterArr::::::::::::::::::::", filterArr);
