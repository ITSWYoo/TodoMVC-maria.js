maria.Model.subclass(nts, 'TodoModel', {

    /**
     * @class nts.TodoModel
     * @extends maria.Model
     * @param {string} title
     */
    constructor : function(title){
        maria.Model.apply(this, []);
        this._title = title || '';
        this._completed = false;
    },

    /**
     * @lends nts.TodoModel.prototype
     */
    properties : {

        /**
         * 타이틀을 설정하거나 반환한다.
         * @param {string?} title
         * @returns {string|undefined}
         */
        title : function(title){
            if(title === undefined){
                return this._title;
            }

            this._title = nts.trim(title);
            this.dispatchEvent({type : 'change'});
        },

        /**
         * 할 일을 완료한 상태인지 판단한다.
         * @returns {boolean}
         */
        isCompleted : function(){
            return this._completed;
        },

        /**
         * 할 일의 상태를 설정한다.
         * @param {boolean} completed
         */
        setCompleted : function(completed){
            if(this._completed !== completed){
                this._completed = completed;
                this.dispatchEvent({type : 'change'});
            }
        },

        /**
         * 할 일의 상태를 토글한다.
         */
        toggleCompleted : function(){
            this.setCompleted(!this.isCompleted());
        }
    }
});