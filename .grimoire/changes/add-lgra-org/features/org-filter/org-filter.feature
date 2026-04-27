Feature: Global organisation filter
  As a lure sports competitor
  I want to filter the entire site to show only content from a specific organisation
  So that I can focus on the org I am currently competing in without noise from the others

  Background:
    Given I am viewing the US Lure Sports Hub

  Scenario: Default view shows content from all organisations
    When I first load the page
    Then the org selector displays "All Orgs" as the active selection
    And the clubs grid displays clubs affiliated with ASFA, AKC, LGRA, or any combination
    And the events list displays ASFA, AKC, and LGRA events
    And the map displays markers for all clubs
    And the hero stat "Clubs" reflects the total number of clubs
    And the hero stat "Events" reflects the total number of non-cancelled events
    And the hero stat "States" reflects the total number of states represented

  Scenario: Selecting ASFA filters clubs, events, map, and hero stats to ASFA content
    When I select "ASFA" in the org selector
    Then the clubs grid shows only clubs whose org list includes "ASFA"
    And the events list shows only events with org "ASFA"
    And the map shows markers only for clubs whose org list includes "ASFA"
    And the hero stat "Clubs" reflects the count of ASFA-affiliated clubs
    And the hero stat "Events" reflects the count of non-cancelled ASFA events
    And the hero stat "States" reflects the count of states with ASFA clubs

  Scenario: Selecting AKC filters clubs, events, map, and hero stats to AKC content
    When I select "AKC" in the org selector
    Then the clubs grid shows only clubs whose org list includes "AKC"
    And the events list shows only events with org "AKC"
    And the map shows markers only for clubs whose org list includes "AKC"
    And the hero stat "Clubs" reflects the count of AKC-affiliated clubs
    And the hero stat "Events" reflects the count of non-cancelled AKC events
    And the hero stat "States" reflects the count of states with AKC clubs

  Scenario: Selecting LGRA filters clubs, events, map, and hero stats to LGRA content
    When I select "LGRA" in the org selector
    Then the clubs grid shows only clubs whose org list includes "LGRA"
    And the events list shows only events with org "LGRA"
    And the map shows markers only for clubs whose org list includes "LGRA"
    And the hero stat "Clubs" reflects the count of LGRA-affiliated clubs
    And the hero stat "Events" reflects the count of non-cancelled LGRA events
    And the hero stat "States" reflects the count of states with LGRA clubs

  Scenario: A club affiliated with multiple orgs appears under any of its orgs
    Given a club with org ["ASFA", "LGRA"] exists in the data
    When I select "ASFA" in the org selector
    Then that club appears in the clubs grid
    When I select "LGRA" in the org selector
    Then that club still appears in the clubs grid

  Scenario: Switching the org filter updates the map without a page reload
    When I select "LGRA" in the org selector
    Then markers for ASFA-only clubs are hidden on the map
    When I select "All Orgs" in the org selector
    Then all club markers are visible on the map again

  Scenario: Org filter and clubs state filter apply together
    Given I have selected "LGRA" in the org selector
    When I select "MN" in the clubs state filter
    Then the clubs grid shows only LGRA-affiliated clubs located in Minnesota

  Scenario: Org filter and clubs region filter apply together
    Given I have selected "ASFA" in the org selector
    When I select a region in the club region filter
    Then the clubs grid shows only ASFA-affiliated clubs in that region

  Scenario: Org filter and event state filter apply together
    Given I have selected "LGRA" in the org selector
    When I select "OH" in the event state filter
    Then the events list shows only LGRA events located in Ohio

  Scenario: Org filter and event type filter apply together
    Given I have selected "AKC" in the org selector
    When I select "Upcoming only" in the event type filter
    Then the events list shows only upcoming AKC events
