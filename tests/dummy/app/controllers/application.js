import Ember from 'ember';

export default Ember.Controller.extend({
  styling: [{
    selector: 'h2',
    styles: [{
      key: 'background-color',
      value: 'red'
    }]
  }]
});
