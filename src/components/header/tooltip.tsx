import { ReactNode } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import { Flag } from './styles';
interface Props {
  children: ReactNode;
}
export const Tooltip = ({ children }: Props) => {
  return (
    <Flag>
      {children} <IoMdArrowDropdown size={32} />
    </Flag>
  );
};
