import { RealCityPage } from './app.po';

describe('real-city App', () => {
  let page: RealCityPage;

  beforeEach(() => {
    page = new RealCityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
