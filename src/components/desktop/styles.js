import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 28rem;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: #4b5563;
  margin-bottom: 2rem;
`;

export const QRContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
`;

export const InstructionList = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  padding: 0 1rem;
`;

export const Instruction = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: "${props => props.number}";
    min-width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
`;