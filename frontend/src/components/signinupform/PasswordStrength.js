import React from 'react';
import styled from 'styled-components';

const StrengthContainer = styled.div`
  width: 250px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const StrengthBar = styled.div`
  height: 3px;
  background: ${props => {
    if (props.score === 0) return props.theme.colors.text + '40';
    if (props.score === 1) return '#ff4d4d';
    if (props.score === 2) return '#ffa64d';
    if (props.score === 3) return '#4dff4d';
    return '#00cc00';
  }};
  width: ${props => (props.score * 25)}%;
  transition: all 0.3s ease;
  margin-top: -3px;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0.7;
`;

const RequirementItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: ${props => props.met ? '0.5' : '1'};
  font-family: 'Trispace', serif;
  
  &:before {
    content: ${props => props.met ? '"✓"' : '"○"'};
    color: ${props => props.met ? props.theme.colors.accent : props.theme.colors.text};
    font-size: 10px;
  }
`;

export const PasswordStrength = ({ password }) => {
  const requirements = [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(password) },
    { text: 'Contains number', met: /\d/.test(password) },
    { text: 'Contains special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];

  const getStrengthScore = () => {
    const metRequirements = requirements.filter(req => req.met).length;
    return metRequirements;
  };

  return (
    <StrengthContainer>
      <StrengthBar score={getStrengthScore()} />
      <RequirementsList>
        {requirements.map((requirement, index) => (
          <RequirementItem key={index} met={requirement.met}>
            {requirement.text}
          </RequirementItem>
        ))}
      </RequirementsList>
    </StrengthContainer>
  );
}; 