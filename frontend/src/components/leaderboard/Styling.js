import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 10px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TableTitle = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  margin: 0;
`;

export const TableTitleLinks = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const CitizenDaysLink = styled(TableTitleLinks)``;

export const CitizensList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 10px;
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const CitizenContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CitizenAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const Citizen = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  cursor: pointer;
  font-weight: ${(props) => (props.$isCurrentUser ? "bold" : "normal")};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const CitizenRank = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const CitizenDays = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const Badges = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const Icon = styled.div`
  width: 10px;
  height: 10px;
  background: ${(props) => props.theme.colors.accent};
  border-radius: 50%;
  margin-right: 5px;
`;

export const ProfileContainer = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  min-width: 300px;
`;

export const Items = styled.div`
  margin-top: 20px;
`;

export const ContainerTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin: 0 0 10px 0;
`;

export const InvestItemsContainer = styled.div`
  margin-top: 20px;
`;
