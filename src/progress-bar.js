class ProgressBar {
    constructor(totalSteps) {
        this.totalSteps = totalSteps;
        this.currentStep = 0;
    }

    setProgress(currentStep) {
        if (currentStep < 0 || currentStep > this.totalSteps) {
            throw new Error('Invalid step value');
        }
        this.currentStep = currentStep;
    }

    getProgress() {
        return (this.currentStep / this.totalSteps) * 100;
    }
}

module.exports = ProgressBar;
