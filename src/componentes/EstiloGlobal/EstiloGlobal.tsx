import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
:root {
  font-size: 62.5%;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	color: ${({ theme }) => theme.cores.branco};
	font-family: "Roboto", serif;
  	font-optical-sizing: auto;
  	font-weight: 400;
  	font-style: normal;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
	color: inherit;
	text-decoration: none;
}

img {
	width: inherit;
}

button {
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	font-weight: inherit;
	padding: 0;
	border: none;
	background-color: unset;
}

input {
	border: none;
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	font-family: inherit;
}

textarea {
	border: none;
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	font-family: inherit;
}

select {
	border: none;
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	font-family: inherit;
}
.link {
    font-size: ${({ theme }) => theme.espacamentos.s};
    line-height: ${({ theme }) => theme.espacamentos.m};
    font-weight: 600;
    box-sizing: border-box;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.cores.terciario};
	}

  @media screen and (min-width: 1024px){
    font-size: ${({ theme }) => theme.espacamentos.m};
  }
}
`;