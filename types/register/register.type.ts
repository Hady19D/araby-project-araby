import type { RegisterRolesEnum } from './register.enum';

export type RegisterDataType = {
  name: string;
  email: string;
  password: string;
  password_confrimation: string;
  role: RegisterRolesEnum;
  country: string;
  city: string;
  area: string;
  phoneNumber: string;
  whatsNumber: string;
};
