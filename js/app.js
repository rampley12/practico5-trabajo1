    // Obtener referencias a los elementos del DOM
    const startButton = document.getElementById('startButton');
    const gameContainer = document.getElementById('gameContainer');
    const guessInput = document.getElementById('guessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');

    // Función para generar un número aleatorio entre 1 y 50
    function generateRandomNumber() {
      return Math.floor(Math.random() * 50) + 1;
    }

    // Función para mostrar un mensaje en un alert
    function showAlert(message) {
      alert(message);
    }

    // Función para iniciar el juego
    function startGame() {
      // Ocultar el botón de inicio y mostrar el contenedor del juego
      startButton.style.display = 'none';
      gameContainer.style.display = 'block';

      // Generar el número aleatorio que el usuario debe adivinar
      const randomNumber = generateRandomNumber();

      // Función para comprobar si el usuario adivinó el número
      function checkGuess() {
        const userGuess = parseInt(guessInput.value);

        if (userGuess === randomNumber) {
          showAlert('¡Adivinaste el número!');
        } else if (userGuess < randomNumber) {
          showAlert('El número que ingresaste es menor al número mágico.');
        } else {
          showAlert('El número que ingresaste es mayor al número mágico.');
        }
      }

      // Agregar un evento al botón de enviar para comprobar el número ingresado
      submitGuessButton.addEventListener('click', checkGuess);
    }

    // Agregar un evento al botón de inicio para comenzar el juego
    startButton.addEventListener('click', startGame);
