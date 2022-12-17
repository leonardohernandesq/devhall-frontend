import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	:root{
		--primary: #E4111F;
		--secondary: #660000;
		--light-900: #FDFFFC;
		--black-600: #5E5858;
		--black-900: #1B1B1B;
	}

	*{
		box-sizing:border-box;
		padding: 0;
		margin: 0;

	}

	body, input, textarea, button{
		font: 400 1rem 'Poppins', sans-serif;
	}

	html{
		scroll-behavior: smooth;
	}

	a{
		color: inherit;
		text-decoration: none;
		cursor: pointer;

		transition: all 0.6s;
	}

	a:hover{
		color:var(--secondary);
	}

	button{
		cursor: pointer;
		border: none;
		transition: all 0.6s;

		&:hover{
				filter: brightness(95%)
		}
	}

	@media(max-width: 67.5rem){
		html{
			font-size: 93.75%;
		}
	}
	@media(max-width: 45rem){
		html{
			font-size: 87.5%;
		}
	}
	

`
export default GlobalStyle

