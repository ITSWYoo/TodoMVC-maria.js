maria.Controller.subclass(nts, 'TodosController', {

    /**
     * @class nts.TodosController
     * @extends maria.Controller
     */
    constructor : function(){
        maria.Controller.apply(this, []);
    },

    /**
     * @lends nts.TodosController.prototype
     */
    properties : {

        /**
         * 새로운 할 일 목록 추가 요청
         * @param {CustomEvent} event
         */
        onKeyupNewTodo : function(event){
            var view = this.getView(),
                model = this.getModel(),
                value = '',
                todo = null;

            if(nts.isEnterKeyCode(event.keyCode)){
                value = view.getInputValue();
                todo = new nts.TodoModel(value);

                model.add(todo);
                view.clearInput();
            }
        },

        /**
         * 할 일 목록 상태 토글 요청
         */
        onClickToggleAll : function(){
            var model = this.getModel();

            if(model.isAllCompleted()){
                model.markAllIncompleted();
            }else{
                model.markAllCompleted();
            }
        },

        /**
         * 완료한 할 일 목록 삭제 요청
         */
        onClickClearCompleted : function(){
            this.getModel().deleteCompleted();
        }
    }
});