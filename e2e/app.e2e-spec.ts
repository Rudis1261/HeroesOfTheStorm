import { HeroesOfTheStormPage } from './app.po';

describe('heroes-of-the-storm App', () => {
  let page: HeroesOfTheStormPage;

  beforeEach(() => {
    page = new HeroesOfTheStormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
