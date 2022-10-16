import styled from 'styled-components';
import * as Avatar from '@radix-ui/react-avatar';

export const Container = styled.div`
  
`;

export const AvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 100%;
  /* background-color: blackA.blackA3; */
`;

export const AvatarImage = styled(Avatar.Image)`
  border-radius: 99px;
  width: 100%;
  height: 100%;
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--pink-08);
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
`;