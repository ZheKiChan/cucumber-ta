"use strict"

const { After, Status } = require('cucumber');
const cucumberJson = require('wdio-cucumberjs-json-reporter').default

After(async function(testCase) {
    if (testCase.result.status === Status.PASSED) {
        return cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
});