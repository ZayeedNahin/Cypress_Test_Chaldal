describe('Homepage category item darken on hover', () => {
  it('Verify hovering on the items darkens the item picture', () => {
    cy.visit('https://chaldal.com/')
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
    cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)")
    .realHover()
    .should('have.css', 'background-color', 'rgba(40, 40, 40, 0.75)'); 
 
  })
})



describe('Homepage category item details option visibility', () => {
  it('Verify hovering on the items displays the details option', () => {
    cy.visit('https://chaldal.com/')
    cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
    cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
    

    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').realHover()
    cy.contains('Details').should('be.visible')
    
  })
}) 


// describe('Homepage category item state change of add to bag button', () => {
//   it('Verify that add to bag button exhibits different state upon hovering', () => {
//     cy.visit('https://chaldal.com/')
//     cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
//     cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
    

//     cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3)")
//     .should('have.css', 'transform', 'none')
//     .realHover() 
//     .should('have.css', 'transform','translateY(-1px)')
    
//   })
// }) 

describe('Add to Cart Suite', () => {
  it('Verify that shopping bag is empty message is displayed when add to cart icon is clicked without adding any item', () => {
    cy.visit('https://chaldal.com/')
    cy.get('.stickyHeader').click()
    cy.get(".shoppingCart div.emptyCart .nothingToSeeHereMoveOn ").contains('Your shopping bag is empty. Start shopping').should('exist')
    
  })
})

 describe('Add to Cart', () => {
    it('Verify that user is displayed an alert message if maximum quantity is selected ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
      const maxQuantity = 110;
      for (let i = 0; i < maxQuantity; i++) {
      cy.get(".plusQuantity").click()
      }
      cy.get(".maxQtyToolTip").should('be.visible')
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify that add to cart icon button exhibits different state upon hovering. For example: reduced opacity gets brighter on hover', () => {
      cy.visit('https://chaldal.com/')
 cy.get('.stickyHeader > .itemCount').realHover()
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify that add to cart icon is updated with number of item and total price  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get(".text1").should('be.visible')
      

    })
  })

  describe('Sidebar', () => {
    it('Verify that sidebar is open by default  ', () => {
      cy.visit('https://chaldal.com/')
     
      cy.get(".menu-container").should('be.visible')
      

    })
  })

  describe('Sidebar', () => {
    it('Verify that sidebar is collapsable  ', () => {
      cy.visit('https://chaldal.com/')
     
      cy.get(".hamburgerMenu.hidden-xs").click()
      cy.get(".menu-container").should('be.hidden')

    })
  })

  describe('Sidebar (Localization)', () => {
    it('Verify that log in button is translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click() 
      cy.get(".signInBtn").contains('লগ ইন') 
    })
    
    it('Verify that city locator has translated into targeted language ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get(".metropolitanAreaName").contains('ঢাকা') 
      
    })

    it('Verify search bar container has translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get(".searchBarContainer").contains('গ্রোসারি পৌঁছে দিচ্ছি আপনার দোরগোড়ায়') 
      
    })

    it('Verify search bar placeholder has translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get("input[placeholder='পণ্য খুঁজুন (যেমন, ডিম, দুধ, আলু)'][name='mainSearch']").should('be.visible')
     
      
    })

    it('Verify category name has translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get("a[href='/fruits-vegetables']").contains('ফল ও শাকসবজি')
     
      
    })

    it('Verify category items name has translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").contains('তাজা ফল').click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)")
      .contains('সাগর কলা 8 টি')
     
      
    })

    it('Verify login error message has translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get(".signInBtn").click() 
      cy.get("button[class='loginBtn']").contains('সাইন আপ / লগ ইন').click()
      cy.get(".errorContainer").contains('অনুগ্রহ করে সঠিক বাংলাদেশি ফোন নাম্বার দিন । যেমন +8801672955886')

      
    })

    it('Verify quantity error message has translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".localeRightContainer").click()
      cy.get("a[href='/fruits-vegetables']").click()
            cy.get(".category[href='/fresh-fruit']").click()
            cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
            const maxQuantity = 110;
            for (let i = 0; i < maxQuantity; i++) {
            cy.get(".plusQuantity").click()
            }
            cy.get(".maxQtyToolTip").should('be.visible').contains('আপনার পছন্দসই পরিমাণ এই পণ্যের জন্য উপলব্ধ নয়')

    })

    
  })
    

  describe('Sidebar (Responsiveness)', 
        {
          viewportHeight: 896,
         viewportWidth: 414
        }, () => {
         
    it('Verify that sidebar is not visible  ', () => {
          cy.visit('https://chaldal.com/')
         
          cy.get(".menu-container").should('not.be.visible') 
    
        })

        it('Verify that menu icon is visible  ', () => {
          cy.visit('https://chaldal.com/')
         
          cy.get('.hamBergerMenuIcon').should('be.visible') 
          
    
        })

      })





























  







  