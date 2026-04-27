Feature: Club source verification
  As a lure coursing competitor or newcomer
  I want each club listing to link to a verified web presence
  So that I can confirm the club is real and find their contact information

  Background:
    Given I am viewing the US Lure Coursing Hub

  Scenario: A club with a verified website displays a link on its card
    Given a club has a verified website URL in the data
    When I view that club's card
    Then the card displays a link to the club's website
    And the link opens in a new tab

  Scenario: A club with only a Facebook group displays a Facebook link on its card
    Given a club has a Facebook group URL as its website
    When I view that club's card
    Then the card displays a link to the club's Facebook group
    And the link opens in a new tab

  Scenario: A club without any verified link displays no broken link
    Given a club has no website field in the data
    When I view that club's card
    Then the card displays no website link
    And no placeholder or broken link is shown
