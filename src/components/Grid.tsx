import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(8rem, max-content) auto;
  grid-auto-rows: minmax(6rem, max-content) auto;
  /* grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 10vh 30vh 30vh 30vh; */
  grid-template-areas: "sideMenu header header header header"
                        "sideMenu main main main main"
                        "sideMenu main main main main"
                        "sideMenu main main main main";
`;