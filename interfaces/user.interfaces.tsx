export interface User {
  firstName?: string;
  secondName?: string;
  email: string;
  password: string;
}

export interface UserInterface {
  user: User;
  userRoles: object;
  userProfile: object[];
  userAuthorized: boolean;
}

export interface UserCredentials {
  userCredentials: UserInterface;
}
