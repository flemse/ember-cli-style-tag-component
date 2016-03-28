import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-tag', 'Integration | Component | style tag', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('styling', [
    {selector: '.test', styles: [{key: 'color', value: 'red'}]}
  ]);

  this.render(hbs`{{style-tag styling=styling}}`);

  assert.equal(this.$().text().trim(), `.test {\n  color: red;\n}`);
});
