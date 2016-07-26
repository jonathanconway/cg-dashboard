
describe('main page', function() {
  it('should have the right title', function () {
    browser.url('/#/')
    var title = browser.getTitle();
    expect(title).toEqual('cloud.gov Dashboard');
  });

  it('should have the dashboard page heading', function() {
    var pageHeading = browser.getText('.content h2');
    expect(pageHeading).toEqual('Dashboard');
  });
});
