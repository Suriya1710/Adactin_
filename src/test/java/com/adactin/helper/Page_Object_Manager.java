package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotelPage;

public class Page_Object_Manager {

	public WebDriver driver;

	private LoginPage login;

	private SearchHotelPage hotel;

	public Page_Object_Manager(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);

	}

	public LoginPage get_InstanceLogin() {

		login = new LoginPage(driver);
		return login;

	}

	public SearchHotelPage get_InstanceSearchHotel() {

		hotel = new SearchHotelPage(driver);

		return hotel;

	}

}
