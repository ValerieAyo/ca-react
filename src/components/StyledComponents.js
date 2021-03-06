import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


const FadeIn = keyframes`
  0% {
    box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3);
  }

  100% {
      box-shadow: none;
  }
`

const HoverObj = keyframes`
0% {
  transform: translateY(5px);
} 

50% {
  transform: translateY(-5px)
}

100% {
  transform: translateY(5px);
}
`

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2em;
  font-family: Helvetica;
  border-radius: .2rem; 
  transition: background-color 150ms ease-in;
  border: none;
  margin: .5rem 0;
  &:hover {
    cursor: pointer;
    /* background-color: #43a047; */
    background-color: #000;
    color: #fff;
  }

  &:active, &:focus  {
    outline: 0;
  }
  ${({ primary }) => 
      primary && 
      css`
        color: #fff;
        /* background-color: ${({ bgColor }) => bgColor}; */
        background-color: #F36B2B;
        transition: box-shadow 250ms ease-out, background-color 200ms ease-in;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          ${'' /* background-color: #333; */}
          /* background-color: #fff; */
          background-color: #43a047;

          color: #fff;
          // use the shadow to add a pulse animation.
          /* box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3); */
        }
      `
    }
`

export const Title = styled.h1`
  color: #fff;
  padding: 0;
  font-size: 2.2rem;
  
`

export const SubTitle = styled.h2`
  color: #ddd;
  font-size: 1.1rem;
  margin-top: 1rem;

  ${({ uppercase }) => 
    uppercase && css`
      text-transform: uppercase;
    `
  }
`

export const Paragraph = styled.p`
  color: #ddd;
  font-size: 1.1rem;
`

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = ({ primary, children, bgColor }) => {
  return (
    <StyledButton 
      primary={primary}
      bgColor={bgColor}
      >
      { children }
    </StyledButton>
    )
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 3rem 0;
  height: 100%;
  text-align: center;
  padding: 0 1rem;
`
export const SummaryHeader = styled.div`
  margin: 1.5rem 1rem;
  width: 60%;


/* 
  p {
    width: 80vw;
  } */

 

  @media (max-width: 586px) {    
    width: 100%;

    h1 {
      font-size: 1.5rem;
      margin: .5rem 0;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const SummaryCard = styled.div`
  height: 100%;
  padding: 1rem;
  /* width: 40%; */
  width: 50%;
  /* text-align: center; */
  /* margin: 1rem 0; */
  border-radius: .2rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* background-color: #F36B2B; */
  background-color: #f36b2b;
  background-image: linear-gradient(163deg, #f36b2b 0%, #F7CE68 100%);
  box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2);
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  .totalPrice {
    font-size: 45px;
    display: flex;
    /* background-color: thistle; */
    /* padding: 0; */

    span {
      font-size: 1.1rem;
      margin-top: .5rem;
      font-weight: 800;
    }
  }

  @media (max-width: 582px) {
    width: 100%;
    box-shadow: none;
  }
  
`

export const CardStyle = styled.div`
  /* height: 30rem; */
  height: 100%;
  padding: 3rem 0;
  width: 40%;
  /* width: 100%; */
  text-align: center;
  margin: 1rem 0;
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F36B2B;
  box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2);
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  @media (min-width: 318px) and (max-width: 707px) {
    width: 100%;
  }

  svg {
    height: 1.5rem;
    margin-left: .5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    box-shadow: none;
  }

  img {
    height: auto;
    width: 60%;
  }
`

export const LinkButton = styled.a`
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  padding: .5rem 1.5rem;
  border-radius: .3rem;
  display: flex; 
  align-items: center;
  border: 3px solid transparent;
  text-decoration: none;
  transition: color 300ms ease-out, background-color 150ms ease-out;
  margin: 1rem 0;

  &:hover {
    background-color: #000;
    color: #ddd;

    svg {
      transform: translateX(5px);
    }
    /* border: #fff 3px solid; */
  }

  svg {
    height: 1.5rem;
    margin-left: .5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #400; */
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;

  .price {
    font-size: 2rem;
  }
`

// export const LinkStyled = styled(Link)`

// `

export const IconStyle = styled.div`
  display: inline;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const ShopCartContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #ff0; */
  /* text-align: center; */
  display: flex;
  justify-content: center;
  color: #fff;
  min-height: 100vh;
`

export const CartItemStyle = styled.div`
  height: 100%;
  /* display: grid;
  grid-template-columns: 1.5fr .7fr;
  grid-gap: 2.5rem; */
  display: flex;
  flex-direction: column-reverse;

  width: 100%;
  /* width: 100%; */
  justify-content: space-between;
  padding: 3rem;
  /* background: #ff0; */

  @media (max-width: 512px) {
    padding: 0;
  }
`

export const BasicCard = styled.div`
  height: 100%;
  display: flex;
  /* width: 100%; */
  justify-content: center;
  /* padding: 3rem; */
  /* background: rgb(33, 33, 33); */

  ${({ shadow, bgColor }) => 
    shadow && 
    css`
      box-shadow: 2px 3px 19px 0px rgba(0,0,0,0.75);
      transition: box-shadow 300ms ease-in-out;
      background-color: ${bgColor};
      &:hover {
        box-shadow: none;
      }
    `
  } 

  @media (min-width: 315px) and (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;  
  }
`

export const CartCard = styled.div`
  background-color: #212121;
  color: #fff;
  /* line that added the 3d look to cart card */
  margin: 2rem 1rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-radius: .2rem;
  align-items: center;
  padding: 1rem;
  transition: box-shadow 300ms ease-in-out;
  /* width: 100%; */

  .item-actions {
    display: flex;
    align-items: center;
  }


  .card-info {
    display: flex;
    /* background: #fff; */
    align-items: center;
    justify-content: space-between;
    
  }

  input {
    padding: 1rem .3rem;
    width: 50%;
    font-size: 1rem;
    color: #fff;
    border-bottom: solid 3px #444;
    background-color: transparent;
    margin: 0 1rem;
    transition: border-bottom 200ms ease-in-out;
    z-index: 500;

    &:focus {
      outline: 0;
      border-bottom: solid 3px #F36B2B;

    }
  }

  /* add a slight animation to clothing */
  .cart-image {
    border: 5px solid #ff9c59;
    border-radius: 100%;
    background-color: #F36B2B;
    /* padding: .5em; */
    height: 8rem;
    width: 8rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  img {
    height: auto;
    width: 100%;
  }

  &:hover {
    /* box-shadow: 0 0 3px 10px #ff9c59; */
    box-shadow: 0 0 3px 10px #2c2c2c;
    img {
      animation: ${HoverObj} 600ms ease-in-out infinite;
    }

  }
/* 
  @media (min-width: 318px) and (max-width: 480px) {
    .card-info {
      display: flex; 
      flex-direction: column;
    }
  } */


  @media (min-width: 315px) and (max-width: 779px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    width: 100%;

    .name {
      margin: 1rem 0;
    }

    p {
      font-size: 1.3rem;
    }

    /* .card-info {
      margin: .5rem 0;
    } */
    
    &:hover {
      box-shadow: none;
    }

    input {
      text-align: center;
    }
    
  }

  @media (max-width: 388px) {
    /* margin: 0; */
    .item-actions {
      display: flex;
      flex-direction: column;
    }
  }
`
export const FormGroup = styled.div`
  width: 100%;
  /* background-color: #fff; */
`

export const Form = styled.form`
  height: 100%;
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  margin: 0 1rem;
  border-radius: .2rem;
  width: 100%;
  /* width: 100%; */
  justify-content: space-between;
  /* padding: 3rem; */
  background: #1a1a1a;

  @media (min-width: 315px) and (max-width: 900px) {
    margin: 1rem 0;
  }

  @media (max-width: 368px) {
    margin: 0;
  }

`

export const Input = styled.input`
  
    padding: 1rem .5rem;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    border-bottom: solid 3px #444;
    background-color: #000;
    margin: 1rem 0;
    transition: background-color 700ms ease-in;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
    transition: border-bottom 200ms ease-in-out;
    /* z-index: 1000; */

    &:focus {
      outline: 0;
      border-bottom: solid 3px #F36B2B;
      box-shadow: 10px 10px 22px -12px rgba(0,0,0,0.75);
      background-color: transparent;
    }
/* 
    .push-left {
      margin-left: 5rem;
      font-size: 50px;
      background-color: #F36B2B;
    } */
  `



export const CheckoutCard = styled.div`
  background-color: #212121;
  color: #fff;
  text-align: left;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1em 3rem;

  h2 {
    font-weight: 400;
    text-align: center;
    padding: 1rem 0;
  }


  /* @media (max-width: 720px) {
    position: sticky;
    top: 0;
  } */  
`

export const RowLayout = styled.div`
  align-items: center;
  display: flex;
  overflow-x: hidden;
  /* background: #ff0; */

  // * Make sure to pass this rule value as a PROP!
  /* padding: 3rem; */

  input {
    width: 50%;
  }

  input:nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 566px) {
   display: flex;
   flex-direction: column; 

   input {
     width: 100%;
     margin: 1.5rem 0
   }

   input:nth-child(2) {
     margin: 0;
   }
  }

  
`

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-align: center;
    font-size: 1.3rem;
  }


  @media (min-width: 315px) and (max-width: 626px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 1.5rem 0;

    .items-length {
      p {
          display: none;
      }
    }
    .total-price {
      p {
        font-size: 1.5rem;
      }
    }
    /* div:last-child {
      display: flex;
      flex-direction: column-reverse;
    } */
  } 
`

export const Page = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media (max-width: 558px) {
    padding: 0 2rem;
  }

  @media (max-width: 340px) {
    padding: 0 .5rem;
  }

`