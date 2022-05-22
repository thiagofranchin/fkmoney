import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    // Adiciona um espaço entre os inputs ("Todo input que tem input antes dele")
    & + input { 
      margin-top: 1.5rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    background: var(--green);
    color: #FFF;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 2.5rem; 

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

`;