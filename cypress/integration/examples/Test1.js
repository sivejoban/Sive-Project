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
     
    //  cy.scrollTo('bottom')

     cy.get('#onetrust-accept-btn-handler').click()

    
    cy.wait(5000)
   
    //Fill in First Name
    cy.get('iframe[src="https://www2.kurtosys.com/l/18882/2020-06-04/bx16sd"]').its('0.contentDocument.body').find('#18882_231669pi_18882_231669')
    .should('be.visible').then(cy.wrap)
    .type('SIVE')


    //Fill in Last name
    cy.get('iframe[src="https://www2.kurtosys.com/l/18882/2020-06-04/bx16sd"]').its('0.contentDocument.body').find('#18882_231671pi_18882_231671').type('NOMVALO')
    
      //Fill in Company
    cy.get('iframe[src="https://www2.kurtosys.com/l/18882/2020-06-04/bx16sd"]').its('0.contentDocument.body').find('#18882_231675pi_18882_231675').type('NOMVALO COMPANY')

    
    cy.wait(1000)

    //Fill IN INDUSTRY
    cy.get('iframe[src="https://www2.kurtosys.com/l/18882/2020-06-04/bx16sd"]').its('0.contentDocument.body').find('#18882_231677pi_18882_231677').type('GAMING')
    // cy.scrollTo('top')
    cy.wait(1000)
    //Click send me a copy
    cy.get('iframe[src="https://www2.kurtosys.com/l/18882/2020-06-04/bx16sd"]').its('0.contentDocument.body').find('input[value="Send me a copy"]').click()
    cy.scrollTo('top')
   
    cy.wait(5000)
    
 
  //Validate error message label
   cy.get('iframe[src="https://www2.kurtosys.com/l/18882/2020-06-04/bx16sd"]').its('0.contentDocument.body').find('.error.no-label')

  
   
   
       
      });
  });


     
    


  

  