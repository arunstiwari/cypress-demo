describe('Launch Courses Page', function () {
  it('Login Page launched successfully', () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Courses").click();
    
    cy.get('input[id=coursename]').type('Course4');
    cy.get('input[id=description]').type('Streaming Architecture');
    cy.get('input[id=duration]').type('6');
    cy.contains("Add New Course").click();
   
    // cy.find('//*[@id=\"0r0\"]').value();

  })
})