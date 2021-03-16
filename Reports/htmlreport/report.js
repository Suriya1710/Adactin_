$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launches The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"\u003cUsername\u003e\" In The Username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the \"\u003cPassword\u003e\" in the Password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the Login button and navigates to the Search Hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;;;1"
    },
    {
      "cells": [
        "Gokul",
        "123"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;;;2"
    },
    {
      "cells": [
        "Vishnu",
        "345"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;;;3"
    },
    {
      "cells": [
        "Blackstar17",
        "Music17"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin-application;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launches The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"Gokul\" In The Username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the \"123\" in the Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the Login button and navigates to the Search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launches_The_Adactin_Application()"
});
formatter.result({
  "duration": 5613412800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gokul",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_field(String)"
});
formatter.result({
  "duration": 1675804500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_the_Password_field(String)"
});
formatter.result({
  "duration": 1200839600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_clicks_on_the_Login_button_and_navigates_to_the_Search_Hotel_page()"
});
formatter.result({
  "duration": 2519745400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launches The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"Vishnu\" In The Username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the \"345\" in the Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the Login button and navigates to the Search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launches_The_Adactin_Application()"
});
formatter.result({
  "duration": 1447373200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vishnu",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_field(String)"
});
formatter.result({
  "duration": 747147200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_the_Password_field(String)"
});
formatter.result({
  "duration": 692189800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_clicks_on_the_Login_button_and_navigates_to_the_Search_Hotel_page()"
});
formatter.result({
  "duration": 2738213200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launches The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"Blackstar17\" In The Username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the \"Music17\" in the Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the Login button and navigates to the Search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launches_The_Adactin_Application()"
});
formatter.result({
  "duration": 874152000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blackstar17",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_field(String)"
});
formatter.result({
  "duration": 693534900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_the_Password_field(String)"
});
formatter.result({
  "duration": 355529300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_clicks_on_the_Login_button_and_navigates_to_the_Search_Hotel_page()"
});
formatter.result({
  "duration": 3188753700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Hotel Searching",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-searching",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Select The Location And Select The Hotel And Select Room Type",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User Select Number of Rooms And Input The Checkout Date And Select The Number Of Adults",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Number Of Children",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Click The Search Button And It Navigates To Hotel Select Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location_And_Select_The_Hotel_And_Select_Room_Type()"
});
formatter.result({
  "duration": 85300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Number_of_Rooms_And_Input_The_Checkout_Date_And_Select_The_Number_Of_Adults()"
});
formatter.result({
  "duration": 46100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.select_Number_Of_Children()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Search_Button_And_It_Navigates_To_Hotel_Select_Page()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
});