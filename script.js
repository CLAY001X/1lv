document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const countdownElement = document.getElementById('countdown');

    // Установка даты 30 августа
    const revealDate = new Date('2024-08-30T00:00:00Z');

    // Функция для обновления таймера
    function updateTimer() {
        const currentDate = new Date();
        const timeDiff = revealDate - currentDate;

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
        } else {
            revealButton.style.display = 'block';
            clearInterval(timerInterval);
        }
    }

    // Обновление таймера каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);

    // Действия при нажатии на кнопку "Открыться 30 августа"
    revealButton.addEventListener('click', function() {
        alert('Кнопка будет доступна 30 августа!');
        // Дополнительные действия при клике на кнопку
    });
});
