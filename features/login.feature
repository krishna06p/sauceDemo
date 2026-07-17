Feature: SauceDemo Login

  Scenario: Successful login
    Given I open the saucedemo login page
    When I login with "standard_user" and "secret_sauce"
    Then I should see the products page

  Scenario Outline: Invalid login "<case>"
    Given I open the saucedemo login page
    When I login with "<username>" and "<password>"
    Then I should see an error message

    Examples:
      | username       | password      | case | 
      | locked_out_user| secret_sauce  | Without username and password   |
      | user   |   | With only username  |
      |    | pass  | With only password  |
      | invalid_user   | invalid_pass  | With invalid username and invalid password  |

