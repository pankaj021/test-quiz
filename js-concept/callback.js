function sendMessage() {
    console.log(`Sending message... `);
}

function scheduleMessage() {
    console.log("Waiting.......");

    setTimeout(sendMessage, 10 * 1000)
}

scheduleMessage()