import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'section',
    classNames:['todoapp'],
    todoService: Ember.inject.service('todo'),
    actions: {
        createTodo(title){
            this.get('todoService').create(title);
        },
        toggleTodo(todoItem){
            this.get('todoService').toggleStatus(todoItem);
        }
    }
});
