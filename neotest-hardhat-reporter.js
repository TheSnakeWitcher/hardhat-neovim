// Documentation
// https://github.com/mochajs/mocha/wiki/Third-party-reporters
// https://githu.com/mochajs/mocha/tree/master/lib/reporters


var mocha =require('mocha');

const {
    EVENT_RUN_END,

    EVENT_TEST_PASS,
    EVENT_TEST_FAIL,
    EVENT_TEST_PENDING,
} = mocha.Runner.constants

const TEST_STATUS = {
    passed: "passed",
    skipped: "skipped",
    failed: "failed",
}

function MyReporter(runner) {

    let tests = {} ;

    runner.on(EVENT_TEST_FAIL, function (test, err) {
        const testId = getTestId(test);
        tests[testId] = { status: TEST_STATUS.failed , errors: [ {message: err.message} ]}
    });

    runner.on(EVENT_TEST_PENDING, function(test) {
        const testId = getTestId(test);
        tests[testId] = { status: TEST_STATUS.skipped }
    });

    runner.on(EVENT_TEST_PASS, function(test) {
        const testId = getTestId(test);
        tests[testId] = { status: TEST_STATUS.passed }
    });

    runner.on(EVENT_RUN_END, function(test) {
        const testResults = {
            stats: runner.stats,
            tests,
        }
        console.log(JSON.stringify(testResults))
    })

}

function getTestId(test) {
    const suiteTitles = getTestParentsIds(test.parent);
    return `${test.file}${suiteTitles}::${test.title}`
}

function getTestParentsIds(suite) {
    let title = suite.title

    if (suite.parent) {
        let suiteTittle = getTestParentsIds(suite.parent)
        title = `${suiteTittle}::${title}`
    } 

    return title
}


mocha.utils.inherits(MyReporter, mocha.reporters.json);

module.exports = MyReporter;
