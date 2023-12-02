function searchProducts() {
    // Получаем значение ввода
    var searchInput = document.querySelector('.search-input').value.toLowerCase();

    // Получаем все названия продуктов
    var productNames = document.querySelectorAll('.name');

    // Перебираем каждое название продукта и проверяем, соответствует ли оно введенному запросу
    for (var i = 0; i < productNames.length; i++) {
        var productName = productNames[i].textContent.toLowerCase();
        var productItem = productNames[i].closest('.item');

        // Показываем или скрываем товар в зависимости от результатов поиска
        if (productName.includes(searchInput)) {
            productItem.style.display = 'block';
        } else {
            productItem.style.display = 'none';
        }
    }
}