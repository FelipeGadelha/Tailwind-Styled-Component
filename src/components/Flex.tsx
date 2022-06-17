import tw from 'tailwind-styled-components'

// ${(p) => (p.$primary ? "bg-indigo-600" : "bg-indigo-300")}
export const Flex = tw.div`
    flex 
    min-h-screen 
    flex-col 
    items-center 
    justify-center 
    py-2
`