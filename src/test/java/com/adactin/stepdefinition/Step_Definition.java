package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactin.helper.Page_Object_Manager;
import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.runner.Runner;
import com.automation.baseclass.Base_Class;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_Class {

	public static WebDriver driver = Runner.driver;

	Page_Object_Manager pom = new Page_Object_Manager(driver);

	@Before
	private void beforeHooks() {
		// TODO Auto-generated method stub

	}
	
	@After
	private void afterHooks() {
		// TODO Auto-generated method stub

	}
	
	
	@Given("^user Launches The Adactin Application$")
	public void user_Launches_The_Adactin_Application() throws Throwable {

		String url = FileReaderManager.getInstance().getInstanceCR().getUrl();
		getUrl(url);

	}

	@When("^user Enters The \"([^\"]*)\" In The Username field$")
	public void user_Enters_The_In_The_Username_field(String email) throws Throwable {

		inputValueElement(pom.get_InstanceLogin().getUserName(), email);

	}

	@When("^user enter the \"([^\"]*)\" in the Password field$")
	public void user_enter_the_in_the_Password_field(String password) throws Throwable {

		inputValueElement(pom.get_InstanceLogin().getPassword(), password);

	}

	@Then("^user clicks on the Login button and navigates to the Search Hotel page$")
	public void user_clicks_on_the_Login_button_and_navigates_to_the_Search_Hotel_page() throws Throwable {

		clickOnElement(pom.get_InstanceLogin().getLoginBtn());

	}

	@When("^user Select The Location And Select The Hotel And Select Room Type$")
	public void user_Select_The_Location_And_Select_The_Hotel_And_Select_Room_Type() throws Throwable {

	}

	@When("^User Select Number of Rooms And Input The Checkout Date And Select The Number Of Adults$")
	public void user_Select_Number_of_Rooms_And_Input_The_Checkout_Date_And_Select_The_Number_Of_Adults()
			throws Throwable {

	}

	@When("^Select Number Of Children$")
	public void select_Number_Of_Children() throws Throwable {

	}

	@Then("^user Click The Search Button And It Navigates To Hotel Select Page$")
	public void user_Click_The_Search_Button_And_It_Navigates_To_Hotel_Select_Page() throws Throwable {

	}

}
