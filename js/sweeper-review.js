// Получаем элементы
const checkboxItemsFeedback = document.querySelectorAll('.feedback-item-check-item');
const galleryItemsFeedback = document.querySelectorAll('.feedback-item');
const containerFeedback = document.querySelector('.feedback-item');

// Добавляем обработчики событий для checkboxItems
checkboxItemsFeedback.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Сбрасываем активное состояние всех элементов
    checkboxItemsFeedback.forEach((checkboxItemFeedback) => {
      checkboxItemFeedback.classList.remove('active');
    });

    // Добавляем активное состояние для текущего элемента
    item.classList.add('active');

    // Получаем ширину контейнера
    const containerWidthFeedback = containerFeedback.offsetWidth;

    // Определяем размер смещения в зависимости от размера экрана
    let offsetFeedback;
    if (window.innerWidth >= 1200) {
      offsetFeedback = 0; // 0
    } else if (window.innerWidth >= 768) {
      offsetFeedback = (containerWidthFeedback * 7 / 10 - 6); // 30%
    } else {
      offsetFeedback = containerWidthFeedback + 16; // 100%
    }

    // Позиция элемента внутри контейнера
    let itemPositionFeedback = index * -offsetFeedback;

    // Корректируем позицию элемента, чтобы он оставался в пределах контейнера
    const totalItemsFeedback = galleryItemsFeedback.length;
    const minPositionFeedback = containerWidthFeedback - totalItemsFeedback * offsetFeedback;
    if (itemPositionFeedback < minPositionFeedback) {
      itemPositionFeedback = minPositionFeedback;
    }

    // Применяем стиль перехода и трансформации для галереи
    galleryItemsFeedback.forEach((galleryItemFeedback) => {
      galleryItemFeedback.style.transition = 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)'; // Добавляем стиль перехода
      
      // Проверяем размер экрана перед установкой стиля трансформации
      if (window.innerWidth <= 1200) {
        galleryItemFeedback.style.transform = `translateX(${itemPositionFeedback}px)`;
      }
    });
  });
});
