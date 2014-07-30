maria.ElementView.subclass(nts, 'TodoView', {

    /**
     * @class nts.TodoView
     * @extends maria.ElementView
     * @param {nts.TodoModel} model
     */
    constructor : function(model){
        maria.ElementView.apply(this, [model]);
    },

    uiActions: {
        'click .destroy': 'onClickDestroy',
        'click .toggle': 'onClickToggle'
    },

    /**
     * @lends nts.TodoView.prototype
     */
    properties : {

        /**
         * 모델 상태를 기준으로 렌더링한다.
         */
        buildData: function () {
            var model = this.getModel(),
                welItem = $(this.find('li')),
                welItemLabel = $(this.find('label')),
                welToggle = $(this.find('.toggle'));

            welItem.removeClass('completed incompleted');
            model.isCompleted()? welItem.addClass('completed') : welItem.addClass('incompleted');
            welItemLabel.html(nts.escapeHTML(model.title()));
            welToggle.prop('checked', model.isCompleted());
        },

        /**
         * 모델의 change 이벤트 리스너
         */
        update : function(){
            this.buildData();
        }
    }
});