import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabsRoot = styled(Tabs.Root)`
  width: 100%;
`;

export const TabsList = styled(Tabs.List)`
  background-color: var(--neutral-13);
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0 1rem;
  border-radius: 8px;
`;

export const TabsTrigger = styled(Tabs.Trigger)` 
  position: relative;
  border: none;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  color: var(--neutral-07);
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;

  p {
    margin: 0.5rem 0 0 0;
  }
  
  &[data-state='active'] {
    color: var(--neutral-01);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    border-radius: 0 0 99px 99px;
    background-color: var(--pink-08);
    transition: all 0.2s ease;
    transform: scaleX(0);
  }
  
  &[data-state='active']::before {
    transform: scaleX(1);
  }
`;

export const TabsContent = styled(Tabs.Content)`
  margin-top: 10px;
`;