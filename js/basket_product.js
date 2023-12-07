document.addEventListener('DOMContentLoaded', function () {
    updateTotalAmount();
    const basketItems = JSON.parse(localStorage.getItem('basketItems'));
    for (let i = 0; i < basketItems.length; i++) {
        if (basketItems[i] !== null) {
            displayItemInfo(basketItems[i], i);
        }
    }

    updateTotalAmount();
});

function displayItemInfo(itemInfo, index) {
    const basketContent = document.getElementById('basket-content');
    const itemHTML = `
        <div class="basket-item" id="${itemInfo.articul}">
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
            <button onclick="removeItem('${itemInfo.articul}')"><img src="img/basket.png" border="0"></button>
        </div>
    </div>
</div>        
        </div>
    `;
    basketContent.innerHTML += itemHTML;

}

function removeItem(itemArticul) {
    // Находим элемент по артикулу
    const item = document.getElementById(itemArticul);
    
    if (item) {
        item.remove();   
    }
    
    // Получаем текущие элементы из localStorage
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    
    // Ищем индекс удаляемого элемента
    const indexToRemove = basketItems.findIndex(item => item.articul === itemArticul);
    
    // Если элемент найден, удаляем его из массива
    if (indexToRemove !== -1) {
        basketItems.splice(indexToRemove, 1);

        // Обновляем localStorage с новым массивом
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
    }
    
    updateTotalAmount();
}

function updateTotalAmount() {
    const costItems = document.querySelectorAll('.basket-item .cost-item');
    let totalAmount = 0;

    costItems.forEach(item => {
        const amount = parseInt(item.innerText.replace(/\D/g, ''), 10);
        (console.log('Amount:', amount));
        totalAmount += amount;
    });
    document.querySelector('.total-amount .amount').innerText = `${totalAmount.toLocaleString()} ₽`;
}

function clearLocalStorage() {
    localStorage.clear();
}
