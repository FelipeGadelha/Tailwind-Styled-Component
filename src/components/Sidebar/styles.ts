import styled from 'styled-components';
import tw from 'tailwind-styled-components'


/* width: ${({ active }) => (active ? v.sidebarWidth : v.sidebarWidthActive)}; */
//width: ${({ active }) => (active ? "345px" : "80px")};
const ContainerS = styled.div`
  grid-area: sideMenu;
  transition: .2s ease-in;
  `;

export const Container = tw(ContainerS)`
  bg-gray-800
  w-64
`