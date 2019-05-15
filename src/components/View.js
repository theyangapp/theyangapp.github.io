import styled from 'styled-components';

const View = styled.div`
  display: 'flex';
  flex-direction: ${props => props.row ? 'row' : 'column'};
`

export default View;