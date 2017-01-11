import { DeployTest2Page } from './app.po';

describe('deploy-test2 App', function() {
  let page: DeployTest2Page;

  beforeEach(() => {
    page = new DeployTest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
