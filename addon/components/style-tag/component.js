import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: 'style',
  attributeBindings: ['type'],
  type: 'text/css',
  layout,
  styling: []
});
