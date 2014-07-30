maria.SetModel.subclass(nts, 'TodosModel', {

    /**
     * @class nts.TodosModel
     * @extends maria.SetModel
     */
    constructor : function(){
        maria.SetModel.apply(this, []);
    },

    /**
     * @lends nts.TodosModel.prototype
     */
    properties : {

        /**
         * 완료한 할 일 목록을 반환한다.
         * @returns {Array.<nts.TodoModel>}
         */
        completed : function(){
            var completedTodos = [];

            this.forEach(function(todo){
                if(todo.isCompleted()){
                    completedTodos.push(todo);
                }
            });

            return completedTodos;
        },

        /**
         * 완료하지 않은 할 일 목록을 반환한다.
         * @returns {Array.<nts.TodoModel>}
         */
        incompleted : function(){
            var incompletedTodos = [];

            this.forEach(function(todo){
                if(todo.isCompleted() === false){
                    incompletedTodos.push(todo);
                }
            });

            return incompletedTodos;
        },

        /**
         * 모든 할 일을 완료 했는지 판단한다.
         * @returns {boolean}
         */
        isAllCompleted: function () {
            return (this.size > 0) && (this.completed().length === this.size);
        },

        /**
         * 완료한 할 일을 삭제한다.
         */
        deleteCompleted : function(){
            this['delete'].apply(this, this.completed());
        },

        /**
         * 할 일 목록을 모두 완료한 상태로 전환한다.
         */
        markAllCompleted: function () {
            this.forEach(function (todo) {
                todo.setCompleted(true);
            });
        },

        /**
         * 할 일 목록을 모두 완료하지 않은 상태로 전환한다.
         */
        markAllIncompleted: function () {
            this.forEach(function (todo) {
                todo.setCompleted(false);
            });
        }
    }
});