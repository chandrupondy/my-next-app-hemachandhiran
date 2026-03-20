let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

// READ
export const fetchUsersApi = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve([...users]), 1000) 
  );

// CREATE
export const addUserApi = (user: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      users = [...users, user]; 
      resolve(user);
    }, 1000)
  );

// UPDATE
export const updateUserApi = (user: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      users = users.map((u) => (u.id === user.id ? user : u)); 
      resolve(user);
    }, 1000)
  );

// DELETE
export const deleteUserApi = (id: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      users = users.filter((u) => u.id !== id); 
      resolve(id);
    }, 1000)
  );