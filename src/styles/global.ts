import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
   --red: #e52e4d;
   --green: #33CC95;
   --blue: #5429CC;
   
   --blue-light: #6933FF;
   
   --text-title: #363F5F;
   --text-body: #969CB3;
   
   --background: #F0F2F5;
   --shape: #FFFFFF;
  }
 
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (min-width: 1080px) {
      font-size: 93.75%; // 15px | (16px / 0.9375)
    }

    @media (min-width: 720px) {
      font-size: 87.5%; // 14px | (16px / 0.875)
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased; // Deixa as fontes mais suaves
  }

  // Essas tags tem sua própria fonte, por isso forçamos a fonte padrão.
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; // Defaults é 500
  }

  h1, h2, h3, h4, h5, h6, strong {  
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed; // Mostra o cursor de "nao pode clicar"
    opacity: 0.6;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);    
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.6rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`