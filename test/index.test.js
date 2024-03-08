const assert = require('assert');
const ProgressBar = require('../src/progress-bar');

describe('ProgressBar', function() {
    describe('#getProgress()', function() {
        it('should return 0 when no progress is set', function() {
            const progressBar = new ProgressBar(100);
            assert.strictEqual(progressBar.getProgress(), 0);
        });

        it('should return correct progress value', function() {
            const progressBar = new ProgressBar(100);
            progressBar.setProgress(50);
            assert.strictEqual(progressBar.getProgress(), 50);
        });

        it('should throw an error for invalid progress value', function() {
            const progressBar = new ProgressBar(100);
            assert.throws(() => {
                progressBar.setProgress(-1);
            }, Error);
            assert.throws(() => {
                progressBar.setProgress(101);
            }, Error);
        });
    });
});
