const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
    
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
                rangeInput[1].value = 5000000; // Установка максимального значения для второго ползунка
            } else {
                rangeInput[1].value = minVal + priceGap;
                rangeInput[0].value = 0; // Установка минимального значения для первого ползунка
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// Добавьте следующий код после существующего кода

// Обработчики событий для полей ввода
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        updateSliderPosition(); // Обновляем положение ползунка при вводе числа
    });
});

// Функция для обновления положения ползунка
function updateSliderPosition() {
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

    if ((maxVal - minVal) < priceGap) {
        rangeInput[0].value = maxVal - priceGap;
        rangeInput[1].value = maxVal; // Установка максимального значения для второго ползунка
    } else {
        rangeInput[1].value = maxVal;
        rangeInput[0].value = minVal;
    }

    // Обновляем стили ползунка
    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
}

// Также, чтобы обработать изменения при вводе чисел через стрелки на клавиатуре, можно добавить обработчики событий "change".
priceInput.forEach(input => {
    input.addEventListener("change", e => {
        updateSliderPosition(); // Обновляем положение ползунка при изменении значения
    });
});
