// registerUser() authorizeUser() getUserInformation() getApproximateQuote()
// getPolicy()

function registerUser(callbackAuthorizeUser) {
    setTimeout(() => {
        const name = "Ajay"
        const address = "Mumbai"
        console.log('User registered.....');
        callbackAuthorizeUser({name, address})
    })
}

function authorizeUser(user) {
    setTimeout(() => {
        console.log('User authorized.....');
        const status = true;
        getUserInformation(status, user)
    })
}

function getUserInformation(status, user) {
    if (status) {
        console.log("got user info", user);
        getApproximateQuote(user, getPolicy) // async
    }
}

function getApproximateQuote(user, callbackGetPolicy) {
    setTimeout(() => {
        const quote = '1200rs'
        console.log("got approximate quote for : ", user);
        console.log("quote amount : ", quote);
        callbackGetPolicy(user, quote);
    })
}

function getPolicy(user, quote) {
    const policy = '1160rs'
    console.log("created policy for : ", user);
    console.log("quoted amount : ", quote);
    console.log("policy bound amount  : ", policy);
}

// registerUser(); authorizeUser(); getUserInformation(); getApproximateQuote();
// getPolicy();

function processPolicy() {
    registerUser(authorizeUser)
}

processPolicy();