type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const defaultValues: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultValues, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
