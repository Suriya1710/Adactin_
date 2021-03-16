package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.automation.baseclass.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", 
glue = "com.adactin.stepdefinition", 
monochrome = true, 
dryRun = false, 
strict = true, 
tags = {"@Smoketest" }, 
plugin = { "html:Reports/htmlreport",
				"pretty",
				"json:Reports/JSON_report.json"

})

public class Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws Throwable {

		String browser = FileReaderManager.getInstance().getInstanceCR().getBrowser();

		driver = Base_Class.getBrowser(browser);

	}

	@AfterClass
	public static void teardown() {

		Base_Class.close();

	}

}
