import styled from "styled-components";

export const Container = styled.article`
  margin: 2rem 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Company = styled.h4`
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  font-size: 1rem;
  position: relative;

  span {
    display: block;
    color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
  }
`;

export const TimeFrame = styled.time`
  font-weight: bold;
  color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
`;
