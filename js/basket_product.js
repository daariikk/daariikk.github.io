document.addEventListener('DOMContentLoaded', function () {
    updateTotalAmount();
    // Получение информации о товаре из localStorage
    const basketItems = JSON.parse(localStorage.getItem('basketItems'));
    // alert(JSON.stringify(basketItems));
    // Проверка наличия информации
    if (basketItems && basketItems.length > 0) {
        // Получите последний элемент массива
        const lastItem = basketItems[basketItems.length - 1];
    
        // Отображение информации в соответствующих элементах
        displayItemInfo(lastItem);
    }
    updateTotalAmount();
});

function displayItemInfo(itemInfo) {
    const basketContent = document.getElementById('basket-content');

    // Создание HTML-разметки с информацией о товаре
    const itemHTML = `
        <div class="basket-item" id="item3">
            <div class="item-img">
    <img src="${itemInfo.img}">
</div>
<div class="description-item">
    <div class="title-cost-block">
        <div class="title-col">
            <p><h2>${itemInfo.name}</h2></p>
            <p>${itemInfo.collection}</p>
        </div>
        <div class="cost-item">
            ${itemInfo.cost}
        </div>
    </div>
    <div class="features-product">
        <div class="features-item">
            <div class="articul-item">
                <h3>Артикул</h3>
                <p>${itemInfo.articul}</p>
            </div>
            <div class="proba-item">
        <h3>Проба</h3>
        <p>${itemInfo.proba ? itemInfo.proba.join(', ') : ''}</p>
    </div>
    <div class="size-item">
        <h3>Размер </h3>
        <p>${itemInfo.size ? itemInfo.size.join(', ') : ''}</p>
    </div>
            <div class="insert-item">
                <h3>Вставка</h3>
                <p>1000 шт</p>
            </div>
        </div>
        <div class="del-item">
            <button onclick="removeItem('item3')"><img src="img/basket.png" border="0"></button>
        </div>
    </div>
</div>
            
        </div>
    `;

    // Вставка HTML в элемент корзины
    
    basketContent.innerHTML = itemHTML;
    
}
function removeItem(itemId) {
    // const item = document.getElementById(itemId);
    // if (item) {
    //     item.remove();
    //     updateTotalAmount();
    // }
    const item = document.getElementById(itemId);
    if (item) {
        item.remove();
        updateTotalAmount();

        // Получение текущего массива товаров из localStorage
        const existingItems = JSON.parse(localStorage.getItem('basketItems')) || [];

        // Удаление элемента из массива
        const updatedItems = existingItems.filter(item => item.id !== itemInfo.id);

        // Сохранение обновленного массива в localStorage
        localStorage.setItem('basketItems', JSON.stringify(updatedItems));
    }
}

function updateTotalAmount() {
    const costItems = document.querySelectorAll('.basket-item .cost-item');
    let totalAmount = 0;

    costItems.forEach(item => {
        const amount = parseInt(item.innerText.replace(/\D/g, ''), 10);
        (console.log('Amount:', amount));
        totalAmount += amount;
    });

    // Обновляем содержимое элемента 'total-amount'
    document.querySelector('.total-amount .amount').innerText = `${totalAmount.toLocaleString()} ₽`;
}
