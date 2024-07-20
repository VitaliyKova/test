(function() {
    // Хранит все функции, которые нужно вызвать после загрузки
    var onLoadCallbacks = [];

    // Функция для добавления обработчиков
    window.myOnLoad = function(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            // Если документ уже загружен, вызываем сразу
            callback();
        } else {
            // Иначе добавляем в очередь
            onLoadCallbacks.push(callback);
        }
    };

    // Функция для вызова всех сохраненных обработчиков
    function executeCallbacks() {
        onLoadCallbacks.forEach(function(callback) {
            callback();
        });
        // Очищаем очередь после выполнения
        onLoadCallbacks = [];
    }

    // Проверяем текущее состояние документа и устанавливаем обработчики
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // Если документ уже загружен
        executeCallbacks();
    } else {
        // Добавляем обработчик на событие DOMContentLoaded
        document.addEventListener('DOMContentLoaded', executeCallbacks);
    }
})();