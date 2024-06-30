/// <reference types="Cypress" />
describe('My First Test', function() {
    it('First Test Case', function() {

      cy.viewport(1820, 980)
      cy.visit("https://www.kurtosys.com/")

      //navigate to Insights
      cy.get('#kurtosys-menu-item-75710 > .top-level-link > .kurtosys-menu-item-wrapper > .kurtosys-menu-title > .menu-image-title').click()

     //Click white papers & e books
     cy.get('.elementor-element-1e16b85 > .elementor-widget-container > .elementor-heading-title > a')
     .invoke('removeAttr', 'target')
     .click()

     

      //Verify that title reads "White papers"
      cy.wait(1000)

      cy.get('.elementor-element-7456037 > .elementor-widget-container > .elementor-heading-title')
      .should('contain.text', 'White Papers')
     

     // Click on “UCITS Whitepaper”
     cy.get('.post-59806 > .elementor-post__card > .elementor-post__text > .elementor-post__title > a').click()
     cy.scrollTo('bottom')
      

      //Fill in first name
      cy.get('#form-field-firstname').type('Sive')

      //Fill in last name
      cy.get('#form-field-lastname').type('Nomvalo')


      //Note : Upon clicking UCITS Whitepaper we only get three fields at the bottom which are : First Name . Last Name , Email and a button Subscribe. 
      //Theres not field that reads for Company and Industry and theres no 'Send me a copy button' . I did not populate email since the instructions said to populate, I stopped after filling in Last Name
      

  
    })
  })