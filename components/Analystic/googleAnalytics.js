import ReactGA from "react-ga"
 
export const initGA = () => {
  // ReactGA.initialize("UA-167570852-1")
  ReactGA.initialize("UA-160635379-1")
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}