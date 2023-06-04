// Получаем элементы
const checkboxItems = document.querySelectorAll('.ourproducts-item-check-item');
const galleryItems = document.querySelectorAll('.ourproducts-item');
const container = document.querySelector('.ourproducts-item');

// Добавляем обработчики событий для checkboxItems
checkboxItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Сбрасываем активное состояние всех элементов
    checkboxItems.forEach((checkboxItem) => {
      checkboxItem.classList.remove('active');
    });

    // Добавляем активное состояние для текущего элемента
    item.classList.add('active');

    // Получаем ширину контейнера
    const containerWidth = container.offsetWidth;

    // Определяем размер смещения в зависимости от размера экрана
    let offset;
    if (window.innerWidth >= 1200) {
      offset = (containerWidth * (3 / 5) + 54 / 3); // 3/5
    } else if (window.innerWidth >= 768) {
      offset = (containerWidth * (5 / 6) + 18 / 6); // 5/6
    } else {
      offset = containerWidth; // 100%
    }

    // Позиция элемента внутри контейнера
    let itemPosition = index * -offset;

    // Корректируем позицию элемента, чтобы он оставался в пределах контейнера
    const totalItems = galleryItems.length;
    const minPosition = containerWidth - totalItems * offset;
    if (itemPosition < minPosition) {
      itemPosition = minPosition;
    }

    // Применяем стиль перехода и трансформации для галереи
    galleryItems.forEach((galleryItem) => {
      galleryItem.style.transition = 'transform 250ms ease-in-out'; // Добавляем стиль перехода
      galleryItem.style.transform = `translateX(${itemPosition}px)`;
    });
  });
});
