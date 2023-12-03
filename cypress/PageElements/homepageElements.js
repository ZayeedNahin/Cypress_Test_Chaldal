export class homepageElements{
    SelectCatHomepage(){
        cy.xpath("//a[@href='/meat-fish']").click()
    }

    SubCatVisible(){
        cy.xpath("//a[@href='/meat-fish']").click()
        cy.xpath("//div[@class='everythingElseWrapper unauthed']").click()
    }

    RelevantSubCat(){
      cy.xpath("//section[@id='delivery-info']//div[@class='mainTile']").click()
      cy.xpath("//div[@class='category-blocks-wrapper']//a[1]").click()
      cy.xpath("//section[@class='bodyTable']").should('be.visible') 
    }

    SlideCatForward(){
        cy.get('.headerContainer > .scrollRight').should('be.enabled')
      for(let n=0; n< 3; n++){
        cy.get('.headerContainer > .scrollRight').click()
      }
    }

    SlideCatBackward(){
        cy.get('.headerContainer > .scrollLeft').should('be.enabled')
        for(let n=0; n< 3; n++){
          cy.get('.headerContainer > .scrollLeft').click()
        }
    }

    ItemDetailPic() {
      cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      cy.get('.productPane').should('be.visible') 
    }

    FullDetailsItem(){
        cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').trigger('mouseover')
      cy.contains('Details').click({force:true}) 
    } 

    ItemHoverAddtoBag(){
        cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').trigger('mouseover')
      cy.contains('Add to Shopping Bag').should('exist')
    }

    ItemDarkenOnHover(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)")
      .realHover()
      .should('have.css', 'background-color', 'rgba(40, 40, 40, 0.75)')
    }

    DetailsOnHover(){
        cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').realHover()
      cy.contains('Details').should('be.visible') 
    }


}