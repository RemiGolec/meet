# meet

Application allowing users to browse upcoming events in cities.

below are proposed TEST SCENARIOS

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
User Story: As a user I should be able to check the details of an event by clicking on the event.
  •	Scenario 1: An event element is collapsed by default
    - Given a user is on main page.
    - When nothing is clicked.
    - Then the event details are collapsed.
  •	Scenario 2: User can expand an event to see its details
    - Given a user would like to see details of the event.
    - When user clicks on the event.
    - Then the details expand.
  •	Scenario 3: User can collapse an event to hide its details
    - Given a user saw the details and would like to close the expanded information.
    - When user clicks on the expanded information.
    - Then the information will collapse.

FEATURE 3: SPECIFY NUMBER OF EVENTS
User Story: As a user I should be able to choose how many events I would like to see displayed at one time.
  •	Scenario 1: When user hasn’t specified a number, 32 is the default number
    - Given that user hasn’t set the number of events they would like to see in one go.
    - When the user opens the city page.
    - Then the number of events displayed is 32.
  •	Scenario 2: User can change the number of events they want to see
    - Given that user had set the number of events they would like to see in one go.
    - When user opens the city page.
    - Then the user should see only the number of events specified in settings.

FEATURE 4: USE THE APP WHEN OFFLINE
User Story: As a user I should be able to see the information about events in the city I have chosen recently (while I was able to connect to internet), after the internet was disconnected.
  •	Scenario 1: Show cached data when there’s no internet connection
    - Given the internet connection is not available.
    - When the user opens the app and has stored cache data.
    - Then the most recently chosen city and time frame data about events will be displayed.
  •	Scenario 2: Show error when user changes the settings (city, time range)
    - Given the internet connection is not available.
    - When the user decides to change the city or time range of events.
    - Then the Error message is displayed.

FEATURE 5: DATA VISUALIZATION
User Story: As a user I should be able to see the number of events in each city in the form of a chart, which would help me narrow the choice.
  •	Scenario 1: Show a chart with the number of upcoming events in each city
    - Given the user is on the main page.
    - When the user would like to see in one glance the number of events happening in all the cities.
    - Then the user can access a chart with all the information clearly visible. 


