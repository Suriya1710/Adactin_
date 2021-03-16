Feature: Hotel Booking In Adactin Application 

@Smoketest 
Scenario Outline: 

	Given user Launches The Adactin Application 
	When user Enters The "<Username>" In The Username field 
	And user enter the "<Password>" in the Password field 
	Then user clicks on the Login button and navigates to the Search Hotel page 
	
	
	Examples: 
	
		|Username|Password|
		|Gokul|123|
		|Vishnu|345|
		|Blackstar17|Music17|
		
		
		
		
		
		@Smoketest 
		Scenario: Hotel Searching 
			When user Select The Location And Select The Hotel And Select Room Type 
			And User Select Number of Rooms And Input The Checkout Date And Select The Number Of Adults 
			And Select Number Of Children 
			Then user Click The Search Button And It Navigates To Hotel Select Page 
			
		@Sanitytest 
		Scenario: Hotel Selecting 
			When user Select The Hotel Radio Button 
			Then user Click The Continue Button And It Navigates To Book A Hotel Page 
			
		@Regressiontest 
		Scenario: Book Hotel 
			When user Enters The Firstname In The Firstname Box And User Enters The Lastname In the Lastname Box 
			And User Enters The Billing Address In The Address Box And User Enters The Creditcard Number In The Creditcard Number Box 
			And Select The Expiry Month Of The Card And Select The Expiry Year Of The Card And User Enter The Cvv Number Of The Card 
			Then user Clicks the Booknow Button And It Navigates To Confirm Page 
			
			
		@Regressiontest 
		Scenario: Hotel Confirmation 
			When user Takes Screenshot Of The Order 
			Then user Click The Itinary Button And It Navigates To Logout Page 
			
		@Regressiontest 
		Scenario: Logging Out From App 
			Then user Click The Logout Button To Signout From The App 
			
			
