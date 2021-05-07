import Parchment from '../textures/parchment.jpg';
import DarkParchment from '../textures/dark-parchment.jpg';

export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  background: `url(${Parchment}) no-repeat center center fixed;` 
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  background: `url(${DarkParchment}) no-repeat center center fixed;` 
}