import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;  
`;

export const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 25px;    
`;

export const ImageContainer = styled.div`
    flex-direction: row;
`;

export const CoffeeImageOne = styled.img`   
  
`;

export const CoffeeImageTwo = styled.img` 
    transform: scaleX(-1);
`;

export const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: row;    
    width: 100%;
    height: 20vh;
    margin-top: 3em;
    font-size: 20px;
`;

export const Icons = styled.img`
    height: 2em;
    width: auto;    
    margin: 0.35em;
`;