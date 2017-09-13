import { Ng0913Page } from './app.po';

describe('ng0913 App', () => {
  let page: Ng0913Page;

  beforeEach(() => {
    page = new Ng0913Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
