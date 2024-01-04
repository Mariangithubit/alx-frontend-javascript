function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const arr = (await Promise.allSettled([user, photo]))
    .map((obj) => ({ status: obj.status, value: (obj.status === 'fulfilled' ? obj.value : obj.reason.toString()) }));

  return arr;
}

export default handleProfileSignup;
