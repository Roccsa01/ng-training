import { browser, element, by } from 'protractor';

export class NgTrainingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home')).getText();
  }


}
