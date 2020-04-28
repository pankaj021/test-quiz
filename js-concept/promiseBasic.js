const myPromise1 = new Promise(function myFunction1(resolve, reject) {
    if (false) 
        resolve("SELECTED")
    else 
        reject("REJECTED")
})

function myFunction2(resolve, reject) {
    if (true) 
        resolve("SELECTED")
    else 
        reject("REJECTED")
}

const myPromise2 = new Promise(() => {
    return myFunction2();
})

const myPromise3 = new Promise((resolve, reject) => {
    if (true) 
        resolve("SELECTED")
    else 
        reject("REJECTED")
})
