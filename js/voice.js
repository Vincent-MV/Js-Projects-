const playButton = document.getElementById('play-btn');
const stopButton = document.getElementById('stop-btn');
const pauseButton = document.getElementById('pause-btn');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');
let currentCharacter;

playButton.addEventListener('click', () => {
    playText(textInput.value);
});
pauseButton.addEventListener('click', pauseText);

stopButton.addEventListener('click', stopText);

speedInput.addEventListener('click' , () => {
    stopText();
    playText(utterance.text.substring(currentCharacter));
});

const utterance = new SpeechSynthesisUtterance(text);
    // utterance.rate = speedInput.value || 1;
    utterance.addEventListener('end', () => {
        textInput.disabled = false;
    });
    utterance.addEventListener('boundary', e => {
        currentCharacter = e.charIndex; 
    });

    
function playText(text){
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume(); 
    };
    if(speechSynthesis.speaking) return;
    utterance.text = text;
    utterance.rate = speedInput.value || 1;
    textInput.disabled = true;
    speechSynthesis.speak(utterance);
};

function pauseText(){
    if (speechSynthesis.speaking) speechSynthesis.pause(); 
};

function stopText(){
    speechSynthesis.resume();
    speechSynthesis.cancel();
};










/*
// Define your text-to-speech function
async function fetchTextToSpeech(text) {
    const apiUrl = 'https://api.elevenlabs.io/v1/text-to-speech/:voice_id'; // Replace with the actual TTS API URL
    const apiKey = 'sk_58be17904f0167140ff7091084555dcfb50c18f63d819d80'; // Replace with your API key if needed

    try {
        // Send a POST request to the TTS API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sk_58be17904f0167140ff7091084555dcfb50c18f63d819d80}` // If the API requires an API key
            },
            body: JSON.stringify({
                text: text, // The text to convert to speech
                voice: 'en-US', // Set voice parameters (if supported)
                speed: 1.0 // Optional: Adjust speed
            })
        });

        // Check for a successful response
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        // Get the audio file or URL
        const data = await response.json();
        const audioUrl = data.audioUrl; // This depends on the API's response format

        // Create an audio element to play the TTS
        const audio = new Audio(audioUrl);
        audio.play(); // Play the audio

        console.log('Text-to-speech audio is playing!');
    } catch (error) {
        console.error('Failed to fetch text-to-speech:', error);
    }
}

// Example usage
fetchTextToSpeech('Hello, this is a text-to-speech demo!');
*/
