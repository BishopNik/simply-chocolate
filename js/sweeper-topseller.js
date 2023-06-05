// Получаем элементы
const checkboxItemsTopseller = document.querySelectorAll('.ourproducts-item-check-item');
const galleryItemsTopseller = document.querySelectorAll('.ourproducts-item');
const containerTopseller = document.querySelector('.ourproducts-item');

// Добавляем обработчики событий для checkboxItems
checkboxItemsTopseller.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Сбрасываем активное состояние всех элементов
    checkboxItemsTopseller.forEach((checkboxItemTopseller) => {
      checkboxItemTopseller.classList.remove('active');
    });

    // Добавляем активное состояние для текущего элемента
    item.classList.add('active');

    // Получаем ширину контейнера
    const containerWidthTopseller = containerTopseller.offsetWidth;

    // Определяем размер смещения в зависимости от размера экрана
    let offsetTopseller;
    if (window.innerWidth >= 1200) {
      offsetTopseller = (containerWidthTopseller * (3 / 5) + 54 / 3); // 3/5
    } else if (window.innerWidth >= 768) {
      offsetTopseller = (containerWidthTopseller * (5 / 6) + 18 / 6); // 5/6
    } else {
      offsetTopseller = containerWidthTopseller + 18; // 100%
    }

    // Позиция элемента внутри контейнера
    let itemPositionTopseller = index * -offsetTopseller;

    // Корректируем позицию элемента, чтобы он оставался в пределах контейнера
    const totalItemsTopseller = galleryItemsTopseller.length;
    const minPositionTopseller = containerWidthTopseller - totalItemsTopseller * offsetTopseller;
    if (itemPositionTopseller < minPositionTopseller) {
      itemPositionTopseller = minPositionTopseller;
    }

    // Применяем стиль перехода и трансформации для галереи
    galleryItemsTopseller.forEach((galleryItemTopseller) => {
      galleryItemTopseller.style.transition = 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)'; // Добавляем стиль перехода
      galleryItemTopseller.style.transform = `translateX(${itemPositionTopseller}px)`;
    });
  });
});
