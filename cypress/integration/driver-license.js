Cypress.Screenshot.defaults({ capture: 'fullPage' });
describe('Book a driver license appointment', () => {
  it('visits the sita page', () => {
      // cy.viewport('macbook-16')
      cy.visit('https://sedeclave.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCita.faces')

  })
  it('selects "Barcelona" as the office location', () => {
      cy.get('[id="publicacionesForm:oficina"]').select('Barcelona')
      cy.wait(2000)
  })
  it('selects "Canjes de permissos"', () => {
      cy.get('[id="publicacionesForm:tipoTramite"]').select('Canjes de permisos de conducción')

      cy.wait(2000)
  })
  it('selects "Brazil" as country', () => {
      cy.get('[id="publicacionesForm:pais"]').select('Brasil')

      cy.wait(2000)
  })

  it('solves captcha and submit', () => {
    cy.get('iframe')
    .first()
    .then((recaptchaIframe) => {
      const body = recaptchaIframe.contents()
      cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
    })
    cy.wait(2000)
    cy.get('[name="publicacionesForm:j_id71"]').click()
    cy.wait(2000)
  })

  it('shows error message in case not available', () => {
    // cy.scrollTo('bottom')
    // cy.wait(2000)
    cy.contains('El horario de atención al cliente está completo para los próximos días. Inténtelo más tarde')
  })

})
