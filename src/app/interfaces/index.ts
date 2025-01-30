import { CSSProperties } from "react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  pets: Pets[];
}
interface Pets {
  id: number;
  name: string;
  species: string;
}
interface Animal {
  name: string;
  icon?: string | null;
}

interface DropDownProps {
  onSelectionChange: (selectedAnimals: Animal[]) => void;
}
interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
}
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export type {
  Customer,
  Pets,
  Animal,
  DropDownProps,
  ButtonProps,
  ContainerProps,
};
