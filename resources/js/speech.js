function startConverting() {

    let r = document.getElementById('result');

    if ('webkitSpeechRecognition' in window) {
        let speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = 'nl-be';
        speechRecognizer.start();

        let finalTranscripts = '';

        speechRecognizer.onresult = function (event) {
            let interimTranscripts = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalTranscripts += transcript;
                } else {
                    interimTranscripts += transcript;
                }
            }
            r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
            console.log(interimTranscripts);
        };
        speechRecognizer.onerror = function (event) {

        };
    } else {
        r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
    }
}

function bindEvents() {
    let btn = document.querySelector("#SpeechToTextButton");
    btn.addEventListener("click", startConverting);
}

bindEvents();