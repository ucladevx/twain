// tests go here
const expect = require('chai').expect
const { createRow } = require('../../routes/activity.js')

// create an empty request object with an empty body
let request = {
    body: {},
};

let response = {
    sendCalledWith: '',
    send: function (arg) {
        this.sendCalledWith = arg
    }
};

// invalid fields function
describe('Testing Create Functionality', function () {
    it('should not have empty user_uiud & activity_type fields', () => {
        createRow.post(request, response)
        expect(response.sendCalledWith).to.contain("invalid request: expected fields not found")
        // if it is empty,  should catch this error message
    })
})

//  > mocha ./tests --recursive



//   Testing Create Functionality
//   1) should not have empty user_uiud & activity_type fields


// 0 passing (7ms)
// 1 failing

// 1) Testing Create Functionality
//      should not have empty user_uiud & activity_type fields:
//    TypeError: Cannot read property 'post' of undefined
//     at Context.it (tests/routes/activity.test.js:20:19)



// npm ERR! Test failed.  See above for more details.