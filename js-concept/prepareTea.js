function buyAllTeaProducts(callbackPrepareTea) {
    setTimeout(() => {
        const milk = "Amul milk";
        const teaLeaves = "Tata teaLeaves"
        const sugar = "sugar"
        console.log("bought all stuffs.....");
        callbackPrepareTea(milk, teaLeaves, sugar)
    })
}

function prepareTea(milk, teaLeaves, sugar) {
    console.log("preparing tea.....");
    console.log(`${milk} + ${teaLeaves} + ${sugar} = tea`);
}

buyAllTeaProducts(prepareTea);