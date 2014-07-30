/**
 * 할 일 리스트 템플릿
 * @static
 */
nts.TodosTemplate =
    '<section id="todoapp">' +
        '<header id="header">' +
            '<h1>todos</h1>' +
            '<input id="new-todo" placeholder="What needs to be done?" autofocus>' +
        '</header>' +
        '<section id="main">' +
            '<input id="toggle-all" type="checkbox">' +
            '<label for="toggle-all">Mark all as completed</label>' +
            '<ul id="todo-list"></ul>' +
        '</section>' +
        '<footer id="footer">' +
            '<span id="todo-count"></span>' +
            '<button id="clear-completed"></button>' +
        '</footer>' +
    '</section>'
;