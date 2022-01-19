//класс Секшн отвечает за отрисовку элементов на странице
//У класса нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер

export default class Section {
    constructor ({items, renderer}, containerSelector) {
        this._initialArray = items; //айтемс - массив данных для добавления на страницу при инициализации класса
        this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице
        this._container = document.querySelector(containerSelector); //контейнер, в который нужно добавлять созданные элементы
    }

    //метод, который отвечает за отрисовку всех элементов
    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
    //метод, который принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        this._container.append(element);
    }
}