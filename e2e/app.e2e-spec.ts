import { PizzaPaaSPage } from './app.po';

describe('pizza-paa-s App', () => {
  let page: PizzaPaaSPage;

  beforeEach(() => {
    page = new PizzaPaaSPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
