import styled from 'styled-components';

export const ConcactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ElementBox = styled.div`
  margin-right: 100px;
`;

export const HeadersStyle = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
`;

export const SpanStyle = styled.span`
  color: ${props => props.theme.colors.accentMain};
`;

export const FilterBox = styled.div`
  width: 360px;
  padding: 20px;

  border: 1px solid ${props => props.theme.colors.accentMain};
`;
