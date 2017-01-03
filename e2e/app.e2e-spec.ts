import { AccountPage } from './app.po';

describe('account App', function() {
  let page: AccountPage;

  beforeEach(() => {
    page = new AccountPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
