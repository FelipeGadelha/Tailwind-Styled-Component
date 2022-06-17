import styled from 'styled-components'
import tw from 'tailwind-styled-components'

// background:  ${p => p.theme.colors.background};

export const Container = styled.main`
  background: #FBFAFB;
  grid-area: main;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.4rem 1.5rem 0.2rem inset;
  ::-webkit-scrollbar {
    width: 0.6rem;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3)
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3)
  }
`;