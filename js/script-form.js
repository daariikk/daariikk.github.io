document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.registration');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var submitButton = document.querySelector('button');

    form.addEventListener('submit', function (event) {
        removeErrorStyles();
        // Проверка валидности email
        if (!isValidEmail(emailInput.value)) {
            displayError(emailInput, 'Пожалуйста, введите корректный email.');
            event.preventDefault();
            return;
        }

        // Проверка длины пароля
        if (passwordInput.value.length < 8) {
            displayError(passwordInput, 'Ошибка: Пароль должен содержать не менее 8 символов.');
            event.preventDefault();
            return;
        }

        // Проверка совпадения паролей
        if (passwordInput.value !== confirmPasswordInput.value) {
            displayError(confirmPasswordInput, 'Ошибка: Пароли не совпадают.');
            event.preventDefault();
            return;
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(inputElement, errorMessage) {
        inputElement.classList.add('error');
        var errorMessageContainer = document.createElement('div');
        errorMessageContainer.classList.add('error-message');
        errorMessageContainer.textContent = errorMessage;
        inputElement.parentElement.appendChild(errorMessageContainer);
    }

    function removeErrorStyles() {
        var errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function (element) {
            element.classList.remove('error');
        });
        var errorMessageContainers = document.querySelectorAll('.error-message');
        errorMessageContainers.forEach(function (container) {
            container.remove();
        });
    }
});