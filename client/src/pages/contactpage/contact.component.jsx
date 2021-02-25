import React from 'react';
import { ContactPageContainer, Title, ImageContainer, CoffeeImageOne, CoffeeImageTwo, Details, Icons } from './contactpage.styles'
import coffee_cup from '../../assets/coffee_cup.gif'
import email from '../../assets/email.svg'
import portfolio from '../../assets/portfolio.svg'
import github from '../../assets/github.svg'


const ContactPage = () => {
  return (
    <ContactPageContainer>
      <Title>Contact LMD Roast!</Title>
      <ImageContainer>
        <CoffeeImageOne src={coffee_cup} alt='coffee cup image' />
        <CoffeeImageTwo src={coffee_cup} alt='coffee cup image' />
      </ImageContainer>
      <Details>
        <Icons src={email} alt='email icon' />malek.alia@gmail.com
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icons src={portfolio} alt='portfolio icon' />https://aliamk.github.io/Portfolio/
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icons src={github} alt='github icon' />https://github.com/aliamk
      </Details>
    </ContactPageContainer>
  )
}

export default ContactPage