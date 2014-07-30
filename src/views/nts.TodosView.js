maria.SetView.subclass(nts, 'TodosView', {

    /**
     * @class nts.TodosView
     * @extends maria.SetView
     * @param {nts.TodosModel} model
     */
    constructor : function(model){
        maria.SetView.apply(this, [model]);
    },

    uiActions: {
        'keyup #new-todo': 'onKeyupNewTodo',
        'click #toggle-all': 'onClickToggleAll',
        'click #clear-completed': 'onClickClearCompleted'
    },

    /**
     * @lends nts.TodosView.prototype
     */
    properties : {

        /**
         * 모델 상태를 기준으로 렌더링한다.
         */
        buildData : function(){
            var welMain = $(this.find('#main')),
                welFooter = $(this.find('#footer')),
                welBtnClear = $(this.find('#clear-completed')),
                welToggleAll = $(this.find('#toggle-all')),
                welTodoCount = $(this.find('#todo-count')),
                model = this.getModel(),
                todosLength = model.size,
                completedLength = model.completed().length,
                incompletedLength = model.incompleted().length;

            welMain.show();
            welFooter.show();
            welBtnClear.show();
            welToggleAll.prop('checked', true);

            // 모두 완료한 상태하지 않았다면?
            if(model.isAllCompleted() === false){
                welToggleAll.prop('checked', false);
            }

            // 할 일이 없다면?
            if(todosLength === 0){
                welMain.hide();
                welFooter.hide();
            }

            // 완료한 할 일이 없다면?
            if(completedLength === 0){
                welBtnClear.hide();
            }

            welTodoCount.html('<strong>' + incompletedLength + '<strong> items left');
            welBtnClear.html('Clear completed (' + completedLength + ')');
        },

        /**
         * 모델의 change 이벤트 리스너
         * @param {CustomEvent} event
         */
        update : function(event){
            maria.SetView.prototype.update.call(this, event);
            this.buildData();
        },

        /**
         * 컨테이너 엘리먼트를 반환한다.
         * @returns {HTMLUListElement}
         */
        getContainerEl : function () {
            return this.find('#todo-list');
        },

        /**
         * 자식 뷰 객체를 생성하여 반환한다.
         * @param {nts.TodoModel} todoModel
         * @returns {nts.TodoView}
         */
        createChildView : function (todoModel) {
            return new nts.TodoView(todoModel);
        },

        /**
         * 현재 input 엘리먼트에 있는 값을 반환한다.
         * @returns {string}
         */
        getInputValue : function(){
            return this.find('#new-todo').value;
        },

        /**
         * 현재 input 엘리먼트에 있는 값을 제거한다.
         */
        clearInput : function(){
            this.find('#new-todo').value = '';
        }
    }
});