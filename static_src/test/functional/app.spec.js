
const nav = require('./nav');

describe('app container', function() {
  beforeEach(function() {
    nav.gotoApp('app-guid-one');
  });

  it('should have application name in the page heading', function () {
    const heading = browser.element('.test-heading');
    heading.waitForExist();

    expect(heading.isExisting()).toBeTruthy();
    expect(heading.getText()).toContain('app-app-guid-one');
  });
});
