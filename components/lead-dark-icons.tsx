import { SvgIcon } from './svg-icons';
import SvgDarkModeShape from '../types/dark-toggle';
import { MouseEvent } from 'react';


interface SvgDarkModeDefined extends SvgDarkModeShape {
  onClick?: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

