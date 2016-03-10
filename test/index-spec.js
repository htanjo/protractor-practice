'use strict';

browser.ignoreSynchronization = true;

describe('Index page', () => {
  beforeAll(() => {
    browser.get('/');
  });

  it('contains expected title', () =>
    expect(browser.getTitle()).toBe('Protractor')
  );

  it('contains expected heading', () =>
    expect($('h1').getText()).toBe('Hello, Protractor!')
  );
});
