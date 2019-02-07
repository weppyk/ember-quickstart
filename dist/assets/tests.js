'use strict';

define("ember-quickstart/tests/acceptance/list-rentals-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  //import { visit, currentURL } from '@ember/test-helpers';
  (0, _qunit.module)('Acceptance | list rentals', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('should show rentals as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/rentals', 'should redirect automatically');
    });
    (0, _qunit.test)('should link to information about the company.', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-about");
      assert.equal((0, _testHelpers.currentURL)(), '/about', 'should navigate to about');
    });
    (0, _qunit.test)('should link to contact information.', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), '/contact', 'should navigate to contact');
    });
    (0, _qunit.test)('should list available rentals.', async function (assert) {});
    (0, _qunit.test)('should filter the list of rentals by city.', async function (assert) {});
    (0, _qunit.test)('should show details for a selected rental', async function (assert) {});
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("ember-quickstart/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals.js should pass ESLint\n\n');
  });
});
define("ember-quickstart/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-quickstart/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-quickstart/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-quickstart/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-quickstart/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-quickstart/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-quickstart/templates/contact.hbs should pass TemplateLint.\n\nember-quickstart/templates/contact.hbs\n  17:4  error  Incorrect indentation for `{{#link-to}}` beginning at L17:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  19:14  error  Incorrect indentation for `link-to` beginning at L17:C4. Expected `{{/link-to}}` ending at L19:C14 to be at an indentation of 4 but was found at 2.  block-indentation\n  18:0  error  Incorrect indentation for `    About\n` beginning at L18:C0. Expected `    About\n` to be at an indentation of 6 but was found at 4.  block-indentation\n');
  });
  QUnit.test('ember-quickstart/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-quickstart/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-quickstart/templates/rentals.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-quickstart/templates/rentals.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-quickstart/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/list-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/list-rentals-test.js should pass ESLint\n\n30:58 - \'assert\' is defined but never used. (no-unused-vars)\n33:70 - \'assert\' is defined but never used. (no-unused-vars)\n36:69 - \'assert\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass ESLint\n\n');
  });
});
define("ember-quickstart/tests/test-helper", ["ember-quickstart/app", "ember-quickstart/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-quickstart/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/rentals-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | rentals', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:rentals');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/config/environment', [], function() {
  var prefix = 'ember-quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
