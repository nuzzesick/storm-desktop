import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const AppContent = styled.div`
  position: relative;
  background: ${Colors.BASE_DARK1};
  width: 75%;
  margin: 16vh 15%;
`;

export const TorrentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.8rem;
  margin: 0 4rem;
  width: 100%;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-left: 8rem;
  align-items: center;
  justify-content: center;
  background: ${Colors.BASE_DARK1};
`;

export const LoadingContent = styled.div`
  width: 40px;
  height: 40px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5rem;
  svg {
    width: 2.6rem;
  }
`;

export const EmptyTitle = styled.div`
  color: ${Colors.BASE_DARK4};
  margin: 1.4rem 0 0.6rem 0;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const EmptySubtitle = styled.div`
  color: ${Colors.BASE_DARK5};
  font-size: 1rem;
  font-weight: 500;
`;
