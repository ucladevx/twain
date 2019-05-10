// tests go here
const expect = require('chai').expect;
const { activityTest } = require('../../routes/activity.js');

// create an empty request object with an empty body
let request = {
    body: {},
};

let response = {
    sendCalledWith: '',
    send: function (arg) {
        this.sendCalledWith = arg;
    }
};