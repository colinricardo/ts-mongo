const userAdded = (email: string) => {
  console.log(`${email} was added as a user!`);
  console.log("We do some setup work...");
  setTimeout(() => {
    console.log(`The setup work for ${email} finished!`);
  }, 4000);
};

export default {
  userAdded,
};
