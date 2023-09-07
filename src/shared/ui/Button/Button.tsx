import { FC } from 'react';

type ButtonProps = {
  children: string;
};

export const Button: FC<ButtonProps> = ({ children }) => <button type="button">{children}</button>;
