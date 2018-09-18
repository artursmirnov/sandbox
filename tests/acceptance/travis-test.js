import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

const FAIL_TESTS = false;

module('Acceptance | travis', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /travis', function(assert) {
    assert.equal(false, FAIL_TESTS);
  });
});
