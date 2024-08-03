import { extendTheme,ThemeConfig } from "@chakra-ui/react";
const config: ThemeConfig={
    initialColorMode:"light",
}
export const theme=extendTheme({
    config,
    tablebackground:{
        light:'linear(to-r,#A1BAFE,#8D5185)',
        dark:'linear(to-r,#B82E1F,#000000)'
    },
    iconcolors:{
        light:'purple',
dark:'gold'
    },
    txtcolors:{
        light:'black',
dark:'aqua'
    },
    formbackground:{
        light: 'linear(to-r,grey,orange)',
        dark: 'linear(to-r,#000000,#923CB5)',
    },
    bordercolors:{
light:'2px solid grey',
dark:'2px solid gold'
    },
    gradients: {
        light: 'linear(to-r, white,#e8e4da, #f0bf43)',
        dark: 'linear(to-r, #1A202C, #2D3748)',
      },
      form:{
        light: 'linear(to-r, #d6d6b4,#c2c25d, #f2f235)',
        dark: 'linear(to-r, #1A202C, #2D3748)',

      },
    colors:{
        gray:{
            50:'#f9f9f9',
            100:'#ededed',
            200:'#d3d3d3',
            300:'#b3b3b3',
            400:'#a0a0a0',
            500:'#898989',
            600:'#6c6c6c',
            700:'#202020',
            800:'#121212',
            900:'111'

        }
    }
});

export default theme;