document.addEventListener('DOMContentLoaded', function () {
    const addToBasketButton = document.querySelector('.add-to-basket');
    addToBasketButton.addEventListener('click', function () {
        addToBasket();
    });

    function addToBasket() {
        // Получение информации о выбранных параметрах товара
        const selectedSize = getSelectedOptions('.size-buttons label.clicked');
        const selectedProba = getSelectedOptions('.proba-size label.clicked');
    
        // Отладочные выводы
        console.log('selectedSize:', selectedSize);
        console.log('selectedProba:', selectedProba);
    
        // Проверка, что выбран хотя бы один размер и проба
        if (selectedSize.length === 0 || selectedProba.length === 0) {
            alert('Пожалуйста, выберите размер и пробу перед добавлением в корзину.');
            return;
        }
    
        // Получение значений из HTML-элементов
        const name = document.querySelector('.title-name h2').innerText;
        const articul = document.querySelector('.articul').innerText;
        const collection = document.querySelector('.collections').innerText;
        const cost = document.querySelector('.cost').innerText;
        const img = document.querySelector('.container-img-left img').getAttribute('src');
    
        // Создание объекта с информацией о товаре
        const itemInfo = {
            name: name,
            articul: articul,
            collection: 'КОЛЛЕКЦИЯ ' + collection,
            cost: cost,
            img: img,
            size: selectedSize,
            proba: selectedProba
        };
    
        // Отладочные выводы
        console.log('itemInfo.size:', itemInfo.size);
        console.log('itemInfo.proba:', itemInfo.proba);
    
        // Проверка, что у товара есть хотя бы одно измерение и проба
        if (itemInfo.size.length === 0 || itemInfo.proba.length === 0) {
            alert('Пожалуйста, выберите размер и пробу перед добавлением в корзину.');
            return;
        }
    
        // Получение текущего массива товаров из localStorage
        const existingItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        // alert(JSON.stringify(existingItems));
        // Добавление нового товара к существующему массиву
        existingItems.push(itemInfo);
    
        // Сохранение обновленного массива в localStorage
        localStorage.setItem('basketItems', JSON.stringify(existingItems));
    
        // Передача информации на страницу "Корзина товаров"
        // window.location.href = 'file:///C:/Users/Daria/Desktop/ювелирка/корзина.html';
    }
    

    function getSelectedOptions(selector) {
        const selectedOptions = document.querySelectorAll(selector);
        return Array.from(selectedOptions).map(option => option.innerText);
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
