
document.addEventListener('DOMContentLoaded', function () {
    const addToBasketButton = document.querySelector('.add-to-basket');
    addToBasketButton.addEventListener('click', function () {
        addToBasket();
    });

    function addToBasket() {
        // Получение информации о выбранных параметрах товара
        const selectedSize = getSelectedOptions('.size-buttons label.clicked');
        const selectedProba = getSelectedOptions('.proba-size label.clicked');

        // Создание объекта с информацией о товаре
        const itemInfo = {
            name: 'Кольцо', // Ваше название товара
            collection: 'WHAT IS LOVE', // Ваша коллекция
            cost: '699 999 ₽', // Ваша стоимость товара
            size: selectedSize,
            proba: selectedProba
        };

        // Передача информации на страницу "Корзина товаров"
        localStorage.setItem('selectedItem', JSON.stringify(itemInfo));
        window.location.href = 'file:///C:/Users/Daria/Desktop/ювелирка/корзина.html';
    }

    function getSelectedOptions(selector) {
        const selectedOptions = document.querySelectorAll(selector);
        return Array.from(selectedOptions).map(option => option.innerText);
    }

    function removeFromBasket(button) {
        // Находим родительский элемент .basket-item и удаляем его
        const basketItem = button.closest('.basket-item');
        basketItem.remove();
    }

    function getSelectedValues(selector) {
        // Получаем значения выбранных чекбоксов
        const checkboxes = document.querySelectorAll(selector);
        const values = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        return values.join(', ');
    }
    function getSelectedValues(selector) {
        // Получаем значения выбранных чекбоксов
        const checkboxes = document.querySelectorAll(selector);
        const values = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        return values.join(', ');
    }
    
});
const sizeButtons = document.querySelectorAll('.size-buttons label');
const probaButtons = document.querySelectorAll('.proba-size label');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
    });
});
probaButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
    });
});
var button = document.querySelector('.vector-heart button');
button.addEventListener('click', function () {
    button.classList.toggle('clicked');
});
