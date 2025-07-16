export type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  fullName: string;
  profileUrl: string;
};

export type Author = User & {};
