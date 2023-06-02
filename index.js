
   
    function convertToVoice(text) {
        // Create an instance of SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance();
      
        // Set the text to be spoken
        utterance.text = text;
      
        // Use the default speech synthesis voice
        utterance.voice = speechSynthesis.getVoices()[0];
      
        // Speak the text
        speechSynthesis.speak(utterance);
      }
      

    // Function to handle the button click event
    function handleConvertButton() {
      const chatInput = document.getElementById('chat-input');
      const chatOutput = document.querySelector('.chat-output');

      // Get the text input from the chat input field
      const text = chatInput.value;

      if (text !== '') {
        // Convert the text to voice
        const audio = convertToVoice(text);

        // Display the converted voice output in the chat output area
        const audioElement = document.createElement('audio');
        audioElement.src = audio;
        audioElement.controls = true;
        // chatOutput.appendChild(audioElement);

        // Clear the chat input field
        chatInput.value = '';
      }
    }

    // Add event listener to the convert button
    const convertButton = document.getElementById('convert-button');
    convertButton.addEventListener('click', handleConvertButton);
 