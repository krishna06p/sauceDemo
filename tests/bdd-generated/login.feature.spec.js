// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('SauceDemo Login', () => {

  test('Successful login', async ({ Given, When, Then, page }) => { 
    await Given('I open the saucedemo login page', null, { page }); 
    await When('I login with "standard_user" and "secret_sauce"', null, { page }); 
    await Then('I should see the products page', null, { page }); 
  });

  test.describe('Invalid login "<case>"', () => {

    test('Invalid login "Without username and password"', async ({ Given, When, Then, page }) => { 
      await Given('I open the saucedemo login page', null, { page }); 
      await When('I login with "locked_out_user" and "secret_sauce"', null, { page }); 
      await Then('I should see an error message', null, { page }); 
    });

    test('Invalid login "With only username"', async ({ Given, When, Then, page }) => { 
      await Given('I open the saucedemo login page', null, { page }); 
      await When('I login with "user" and ""', null, { page }); 
      await Then('I should see an error message', null, { page }); 
    });

    test('Invalid login "With only password"', async ({ Given, When, Then, page }) => { 
      await Given('I open the saucedemo login page', null, { page }); 
      await When('I login with "" and "pass"', null, { page }); 
      await Then('I should see an error message', null, { page }); 
    });

    test('Invalid login "With invalid username and invalid password"', async ({ Given, When, Then, page }) => { 
      await Given('I open the saucedemo login page', null, { page }); 
      await When('I login with "invalid_user" and "invalid_pass"', null, { page }); 
      await Then('I should see an error message', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the saucedemo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":13,"value":"\"standard_user\"","children":[{"start":14,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"secret_sauce\"","children":[{"start":34,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I open the saucedemo login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I login with \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":13,"value":"\"locked_out_user\"","children":[{"start":14,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"secret_sauce\"","children":[{"start":36,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I open the saucedemo login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I login with \"user\" and \"\"","stepMatchArguments":[{"group":{"start":13,"value":"\"user\"","children":[{"start":14,"value":"user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":24,"value":"\"\"","children":[{"start":25,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I open the saucedemo login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I login with \"\" and \"pass\"","stepMatchArguments":[{"group":{"start":13,"value":"\"\"","children":[{"start":14,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"pass\"","children":[{"start":21,"value":"pass","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I open the saucedemo login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I login with \"invalid_user\" and \"invalid_pass\"","stepMatchArguments":[{"group":{"start":13,"value":"\"invalid_user\"","children":[{"start":14,"value":"invalid_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"invalid_pass\"","children":[{"start":33,"value":"invalid_pass","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
]; // bdd-data-end