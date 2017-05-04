import { EdConnectPage } from './app.po';

describe('ed-connect App', () => {
  let page: EdConnectPage;

  beforeEach(() => {
    page = new EdConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
