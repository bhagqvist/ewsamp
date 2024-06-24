export type Employee = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  initials: string;
  lastName: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
