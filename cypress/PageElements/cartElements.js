export class cartElements {
    quantity(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
      cy.get('.stickyHeader').click()
    }

    multipleQty(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get('.closeCartButtonTop').click() 
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click() 
      cy.get(".category[href='/fresh-fruit']").click() 
      cy.get("div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(5) p:nth-child(1)").click({force: true})
      cy.get('.stickyHeader').click()
    }

    addChngLoc(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)").click()
      cy.get(".category[href='/tofu-meat-alternatives']").click()
      cy.get("div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(5) p:nth-child(1)").click({force: true})
      cy.get(".area.citySelectionArea").click()
      cy.get(".change-city").click()
      .wait(2000)
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)").click()
      cy.get(".stickyHeader").click()
    }

    varProCity(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)").click()
      cy.get(".category[href='/premium-perishables']").click().should('have.length.gt', 0)
      cy.get('.productPane > div').its('length').then((itemCount) => {
      cy.log(`Number of items displayed: ${itemCount}`);
      })
      
      cy.get(".area.citySelectionArea").click()
      cy.get(".change-city").click()
      .wait(2000)
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)").click()
      cy.get('.productPane > div').its('length').then((itemCount) => {
      cy.log(`Number of items displayed: ${itemCount}`)
        })
    }

    rmvPro(){
        cy.get('[href="/meat-fish"] > .categoryBox').click()
        cy.get(".category[href='/premium-perishables']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(1)").click()
        cy.get('.stickyHeader').click()
        cy.get("div[title='Remove from bag']").click()
    }

    maxQty(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
        const maxQuantity = 106;
        for (let i = 0; i < maxQuantity; i++) {
        cy.get(".plusQuantity").click()
        }
    }

    multPriceUpdate(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get(".totalMoneyCount").should('be.visible')
        // cy.get(".totalMoneyCount").should('contain', '378')
    }

    autoPriceUpdate(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get(".totalMoneyCount").should('be.visible')
        cy.get('.plusQuantity').first().click()
        .wait(1000)
        cy.get(".totalMoneyCount").should('be.visible')
    }

    reducingItemPrice(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        for (let i=0; i<=3; i++){
          cy.get(".plusQuantity").click()
        }
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get(".totalMoneyCount").should('be.visible')
        cy.get('.minusQuantity').first().click()
        .wait(1000)
        cy.get(".totalMoneyCount").should('be.visible')
    }

    expDiscode(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get(".btnDiscount").click()
        cy.get("input[placeholder='Referral/Discount Code']").type('C1F57CC0')
        cy.get(".discountSubmitBtn").click() 
        cy.get(".error").should('be.visible')
    }

    cartIconUpdate(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get(".total").contains(0)
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        cy.get(".stickyHeader > .itemCount").contains(1)
        cy.get(".total").contains(299)
    }

    SideCate(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
    }

    CartNoItem(){
        cy.get('.stickyHeader').click()
          // cy.get('.closeCartButtonTop').click()
    }

    QtyBeforeCart(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
          cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
    }

    SideMultiQty(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
        cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get('.closeCartButtonTop').click() 
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click() 
        cy.get(".category[href='/fresh-fruit']").click() 
        cy.get("div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(5) p:nth-child(1)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get('.closeCartButtonTop').click()
    }

    CartQtyIncrease(){
        cy.get('[href="/meat-fish"] > .categoryBox').click()
          cy.get(".category[href='/premium-perishables']").click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(1)").click()
          cy.get('.stickyHeader').click()
          cy.get("div[class='quantity']").click()
    }

    CartQtyDecrease(){
        cy.get('[href="/meat-fish"] > .categoryBox').click()
          cy.get(".category[href='/premium-perishables']").click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(1)").click()
          cy.get('.stickyHeader').click()
          cy.get("div[title='Remove one from bag']").click()
    }

    PlusSignQtyIncr(){
        cy.get("a[href='/fruits-vegetables']").click()
          cy.get(".category[href='/fresh-fruit']").click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)").realHover().click({force: true})
          cy.get(".add").click({force: true})
    }

    MinusSignQtyDecr(){
        cy.get("a[href='/fruits-vegetables']").click()
          cy.get(".category[href='/fresh-fruit']").click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)").realHover().click({force: true})
          cy.get(".remove").click({force: true})
    }

    EmptyMsgVisible(){
        cy.get('.stickyHeader').click()
          cy.get(".shoppingCart div.emptyCart .nothingToSeeHereMoveOn ").contains('Your shopping bag is empty. Start shopping').should('exist')
    }

    MaxQtyMsg(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
        const maxQuantity = 110;
        for (let i = 0; i < maxQuantity; i++) {
        cy.get(".plusQuantity").click()
        }
        cy.get(".maxQtyToolTip").should('be.visible')
    }

    CartIconHover(){
        cy.get('.stickyHeader > .itemCount').realHover()
    }

    CartIconUpdate(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
        cy.get('.stickyHeader').click()
        cy.get(".text1").should('be.visible')
    }
}