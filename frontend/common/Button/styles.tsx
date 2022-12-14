import styled from "styled-components";

export const Button = styled.button`
  color: ${props => props.color};
  size: 24px;
`;

export const PriceTextButtonStyle = styled.div`
  display: flex;
  color: ${props => props.theme.color.brown};
  cursor: pointer;
  align-items: center;
  h3 {
    font-size: 20px !important;
  }
  gap: 5px;
  svg {
    width: 20px;
    height: 15px;
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: 30px !important;
    }
    gap: 10px;
    svg {
      width: 25px;
      height: 30px;
    }
  }
`;

export const PriceButtonStyle = styled.div`
  margin: auto;
  width: 100%;
  height: 50px;
  border-radius: 2px;
  display: flex;
  background-color: ${props => props.theme.color.darkGreen};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${props => props.theme.color.ivory};

  gap: 10px;
  svg {
    width: 10px;
    height: 20px;
  }
  h3 {
    letter-spacing: 5px;
  }
  transition: all ease-in 0.3s;
  :hover {
    background-color: ${props => props.theme.color.mainGreen};
  }

  @media screen and (max-width: 600px) {
    width: 60vw;
    font-size: 36px;
    svg {
      width: 30px;
      height: 40px;
    }
  }
`;

export const BuyListButtonStyle = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 2px;
  display: flex;
  background-color: ${props => props.theme.color.ivory};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  gap: 10px;
  svg {
    stroke-width: 10px;
    fill: ${props => props.theme.color.black};
    width: 40px;
    height: 40px;
  }
  transition: all ease-in 0.3s;
  :hover {
    background-color: ${props => props.theme.color.ivoryHover};
  }

  @media screen and (max-width: 600px) {
    font-size: 36px;
    z-index: 2;
    width: 30vw;
  }
`;

export const SubmitButtonStyle = styled.button`
  background-color: ${props => props.theme.color.darkGreen};
  color: #fbfbfb;
  padding: 3% 0 3%;
  margin: 1%;
  width: 50%;
  font-family: ${props => props.theme.font.TextFont2};

  :hover {
    background-color: ${props => props.theme.color.mainGreen};
    color: white;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 100%;
    padding: 2% 0 2%;
  }
`;

export const CancelButtonStyle = styled.button`
  background-color: ${props => props.theme.color.black};
  color: #7a887a;
  padding: 3% 0 3%;
  margin: 1%;
  width: 50%;
  font-family: ${props => props.theme.font.TextFont2};

  :hover {
    background-color: #2c5841;
    color: ${props => props.theme.color.darkGray};
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 100%;
    padding: 2% 0 2%;
  }
`;

export const SearchButtonStyle = styled.button`
  background-color: ${props => props.color};
  font-family: ${props => props.theme.font.TitleFont};
  font-size: 20px;
  color: black;
  border-radius: 15px;
  padding: 3% 0 3%;
  margin: 1%;
  width: 150px;
  height: 100px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  :hover {
    background-color: ${props => props.theme.color.darkGray};
  }

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 60px;
    border-radius: 10px;
    font-size: 15px;
    margin: 1%;
    padding: 2% 0 2%;
  }
`;
export const LoginButtonStyle = styled.div`
  width: 350px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  background-color: ${props => props.theme.color.brown};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 10px;

  font-family: ${props => props.theme.font.TitleFont};

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 50px;
    font-size: 15px;
  }
`;

interface StatusButtonType {
  isActive: boolean;
  backgroundColor: string;
  backgroundHover: string;
  textColor: string;
}

export const StatusButtonStyle = styled.li<StatusButtonType>`
  width: 120px;
  height: 60px;
  border-radius: 16px;
  font-size: ${props => (props.isActive ? "18px" : "14px")};
  color: ${props =>
    props.isActive ? props.theme.color.darkGreen : props.textColor};
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.font.TextFont2};
  font-weight: ${props => (props.isActive ? "bold" : null)};
  word-break: keep-all;

  :hover {
    cursor: pointer;
    color: ${props => props.theme.color.darkGreen};
  }

  span {
    margin: 3%;
    padding-left: 12px;
  }
`;
