import { browser, element, by } from 'protractor';
import { NgTrainingPage } from './app.po';


describe('ng-training App', () => {
  let page: NgTrainingPage;

  beforeEach(() => {
    page = new NgTrainingPage();
  });

  it('should display message saying home works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });
});

describe('Bejelentkezés',() => {
  let page: NgTrainingPage; {
    var Loginmainbutton = element(by.id('loginn'));
    var Email = element(by.id('emailke'));
    var Password = element(by.id('passwordke'));
    var LoginButton = element(by.id('login'));
    var username = element(by.id('user'));
    }
it('Bejelentkezés,felhasználó ellenőrzés:', function() {

    Loginmainbutton.click();
    Email.sendKeys('roland.bihal@icellmobilsoft.hu');
    Password.sendKeys('Aa123456');

    LoginButton.click();
    expect(username.getText()).toEqual('akármi');
    element(by.id('user')).getText().then(function(text) {
    console.log(text);
    });
   
  });
});
