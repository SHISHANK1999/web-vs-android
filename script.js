let pollData = {
    batch: 0,
    mca: 0,
};

function submitPoll() {
    var selectedProgram = document.querySelector('input[name="program"]:checked');

    console.log(selectedProgram)

    if (selectedProgram) {
        
        const name=selectedProgram.value;
        
        pollData[name]++;
        
        updateResult();
    } else {
        alert('Please select a program before submitting.');
    }
}

function updateResult() {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Android: ' + pollData.batch + ', Web: ' + pollData.mca;
}
