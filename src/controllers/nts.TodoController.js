maria.Controller.subclass(nts, 'TodoController', {

    /**
     * @class nts.TodoController
     * @extends maria.Controller
     */
    constructor : function(){
        maria.Controller.apply(this, []);
    },

    /**
     * @lends nts.TodoController.prototype
     */
    properties : {

        /**
         * 할 일 삭제 요청
         */
        onClickDestroy : function(){
            this.getModel().destroy();
        },

        /**
         * 할 일 토글 요청
         */
        onClickToggle : function(){
            this.getModel().toggleCompleted();
        }
    }
});