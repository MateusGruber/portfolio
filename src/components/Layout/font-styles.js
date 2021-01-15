import Cyberspace from '../../assets/fonts/CyberspaceRacewayBack.otf';

export default `

@font-face {
  font-display: swap;
  font-family: "Cyberspace";
  font-style: normal;
  font-weight: 100;
  src: url(${Cyberspace});
  src: url(${Cyberspace}) format("opentype"), url(${`${Cyberspace}?#iefix`}) format('embedded-opentype');
}

html, body, button, input {
  font-family: "Cyberspace", Arial, Helvetica, sans-serif !important;
}
`
