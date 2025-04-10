import {APP_API} from './../../src/app/config/app-api.config';
import {APP_ROUTES} from './../../src/app/config/app-routes.config';

describe('My First Test', () => {
  it('Visits cv page', () => {
    cy.intercept(APP_API.cvs, {fixture:'cvs'});
    cy.visit(APP_ROUTES.cv);

    cy.get("[test-cy='cvsList']");
    cy.get("[test-cy='cvCard']").should('not.exist');

    cy.get("[test-cy='cvsList']").children().first().click();
    cy.intercept(APP_API.cvs + 1, { fixture: 'cv1' });

    cy.get("[test-cy='cvDetailButton']").click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/1');
    });

  });
});
