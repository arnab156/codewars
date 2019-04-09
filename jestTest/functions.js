const axios = require("axios");
const functions = {

    add: (num1, num2) =>num1+num2,
    isNull: () => null,
    checkVal: (x) => x,
    createUser: () =>{
        const user = {firstName: 'arnab', lastName: 'majumdar'};
        // user['lastName'] = 'majumdar';
        return user;

    },
    fetchUser: () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=ZaPZAW4j2cMAvRmqiWhlySoNnGmkzgjgrJURGYN0")
        .then(res => res.data)
        .catch(err => "error")
    }
}

module.exports = functions;