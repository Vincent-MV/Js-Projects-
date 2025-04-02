// Replace with your Eleven Labs API key
const ELEVEN_LABS_API_KEY = 'sk_58be17904f0167140ff7091084555dcfb50c18f63d819d80';
// const VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Example voice ID, replace with your desired voice ID

document.getElementById('generate-speech').addEventListener('click', async () => {
    const text = document.getElementById('text-input').value;
    const voiceId = document.getElementById('voice-select').value;

    if (!text) {
        alert('Please enter some text!');
        return;
    }

    try {
        // Call the Eleven Labs API
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'xi-api-key': ELEVEN_LABS_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.5,
                },
            }),
        });

        if (!voiceId) {
           alert('Failed to generate speech');
        }

        // Convert the response to a Blob (audio file)
        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);

        // Play the audio
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = audioUrl;
        audioPlayer.play();
        
    } catch (error) {
        console.error('Error generating speech:', error);
        alert('Failed to generate speech. Check the console for details.');
    }
});