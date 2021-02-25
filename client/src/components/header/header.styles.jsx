import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Normal HTML items like divs/spans: styled.div
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;  
  margin-bottom: 25px;
  padding-right: 25px;
`;

/* Because LINK is a component, we use brackets like a function
  instead of a dot */
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 0 0 15px 15px;
    margin: 0;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 25px;
`;

/* Because we have a conditional style that applies to both div and Link,
we define the styles first and then apply them to each */

/* Replacing OptionsDiv with <OptionLink as='div'> so don't need this anymore  */
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${ OptionContainerStyles }
// `;

export const CompanyName = styled.h1`
  margin-top: 0.1em;
`;

/* .header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
} */
