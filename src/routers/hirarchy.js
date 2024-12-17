import ROUTES from "./routerModel";

const navigationHierarchy = {
    [ROUTES.ROOT]: {
        noBackButtonRoutes: [ROUTES.ROOT, ROUTES.ERROR], // Pages with no back button
    },
    [ROUTES.ABOUT]: {
        backRoute: ROUTES.ROOT, // Always goes back to Home page
    },
    [ROUTES.MAP]: {
        backRoute: ROUTES.ROOT, // Always goes back to Home page
    },
    [ROUTES.ADMIN]: {
        backRoute: ROUTES.ROOT, // Always goes back to Home page
    },
    [ROUTES.LOGIN]: {
        canGoBackTo: [ROUTES.ROOT, ROUTES.SIGNUP], // Can only go back to Home or Signup pages
    },
    [ROUTES.SIGNUP]: {
        canGoBackTo: [ROUTES.ROOT, ROUTES.LOGIN], // Can only go back to Home or Login pages
    },
    [ROUTES.EXHIBITS]: {
        backRoute: ROUTES.MAP, // Always goes back to Map page
    },
    [ROUTES.ADD_REVIEW]: {
        canGoBackTo: ['previousPage'], // Goes back to the page it was before (Exhibit List/Exhibit Details)
    },
    [ROUTES.EDIT_REVIEW]: {
        canGoBackTo: ['previousPage'], // Goes back to the page it was before (Exhibit List/Exhibit Details)
    },
    [ROUTES.ADD_EXHIBIT]: {
        backRoute: ROUTES.EXHIBITS, // Always goes back to Exhibit List page
    },
    [ROUTES.EDIT_EXHIBIT]: {
        backRoute: ROUTES.EXHIBITS, // Always goes back to Exhibit List page
    },
    [ROUTES.EXHIBIT_INFO]: {
        backRoute: ROUTES.EXHIBITS, // Always goes back to Exhibit List page
    },
    [ROUTES.ADD_ANIMAL]: {
        backRoute: (exhibitId) => `${ROUTES.EXHIBIT_INFO}/${exhibitId}`, // Always goes back to Exhibit Details page
    },
    [ROUTES.EDIT_ANIMAL]: {
        backRoute: (exhibitId) => `${ROUTES.EXHIBIT_INFO}/${exhibitId}`, // Always goes back to Exhibit Details page
    },
    [ROUTES.ANIMAL_INFO]: {
        backRoute: (exhibitId) => `${ROUTES.EXHIBIT_INFO}/${exhibitId}`, // Always goes back to Exhibit Details page
    },
    [ROUTES.EDIT_PROFILE]: {
        backRoute: ROUTES.PROFILE, // Always goes back to Profile page
    },

};

export default navigationHierarchy;
