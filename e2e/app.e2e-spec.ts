import { AngularBattlePage } from './app.po';

describe('angular-battle App', () => {
  let page: AngularBattlePage;

  beforeEach(() => {
    page = new AngularBattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
