import { AngularRouterPage } from './app.po';

describe('angular-router App', () => {
  let page: AngularRouterPage;

  beforeEach(() => {
    page = new AngularRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
