function buyAllTeaProductsPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const milk = "Amul milk";
            const teaLeaves = "Tata teaLeaves"
            const sugar = ""
            if (!milk || !teaLeaves || !sugar) {
                reject(new Error('Saaman not found!!!'))
            } else {
                console.log("bought all stuffs.....");
                resolve({milk, teaLeaves, sugar})
            }
        })
    })
}

function prepareTea({milk, teaLeaves, sugar}) {
    console.log("preparing tea.....");
    console.log(`${milk} + ${teaLeaves} + ${sugar} = tea`);
}

buyAllTeaProductsPromise().then((boughtProduct) => {
    console.log("boughtProduct::::::", boughtProduct);
    prepareTea(boughtProduct)
}).catch((error) => {
    console.log(error);
})