import styled, { keyframes } from 'styled-components';

const badgeanimation = keyframes`
  10% { opacity: 0; transform: scale(0.2)}
  70% { opacity: 1; transform: scale(1.8)}
  to { opacity: 1; transform: scale(1) }
`
export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  bottom: 25px;
  right: 24px;
  z-index: 3;
  animation: ${badgeanimation} 1.2s linear;
  opacity: 0;
  padding: 0;
  height: 20px;
  @media (min-width: 768px) {
    top: 25px;
  }
`;

export const BadgeText = styled.h1`
  font-size: 24px;
`;

export const BadgeIcon = styled.img`
`;