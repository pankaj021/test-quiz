function registerUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name = "Ajay"
            const address = "Mumbai"
            if (!name || !address) {
                reject(new Error("User registration failed."))
            } else {
                console.log('User registered.....');
                resolve({name, address})
            }
        })
    })
}

function authorizeUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = false;
            if (status) {
                console.log('User authorized.....');
                resolve({status, user})
            } else {
                reject(new Error("User unauthorized...."))
            }

        })
    })
}

function getUserInformation(status, user) {
    if (status) {
        console.log("got user info", user);
        getApproximateQuote(user, getPolicy) // async
    }
}

function getApproximateQuote(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const quote = '1200rs'
            console.log("got approximate quote for : ", user);
            console.log("quote amount : ", quote);
            resolve({user, quote});
        })
    })
}

function getPolicy({user, quote}) {
    const policy = '1160rs'
    console.log("created policy for : ", user);
    console.log("quoted amount : ", quote);
    console.log("policy bound amount  : ", policy);
}

// registerUser(); authorizeUser(); getUserInformation(); getApproximateQuote();
// getPolicy();

/* Method 1 */

function processPolicy1() {
    registerUser().then((user) => {
        return authorizeUser(user)
    }).then((userInfo) => {
        getUserInformation(userInfo.status, userInfo.user);
        return getApproximateQuote(userInfo.user)
    }).then(({user, quote}) => {
        getPolicy(user, quote)
    }).catch(error => {
        console.log(error);
    })
}

/* Method 2 */

function processPolicy2() {
    registerUser()
        .then(authorizeUser)
        .then((userObj) => {
            getUserInformation(userObj.status, userObj.user);
            return getApproximateQuote(userObj.user)
        })
        .then(getPolicy)
        .catch(error => {
            console.log(error);
        })
}

// async await
async function processPolicy3() {
    try {
        const user = await registerUser();
        const userObj = await authorizeUser(user)
        getUserInformation(userObj.status, userObj.user);
        const quoteObj = await getApproximateQuote(userObj.user);
        getPolicy(quoteObj);
    } catch (error) {
        console.log(error);
    }
}

// processPolicy1(); processPolicy2();
processPolicy3();