// Establish a Socket.io connection
const socket = io();

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();
client.configure(feathers.socketio(socket));

// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));

const login = async () => {
  try {
    // First try to log in with an existing JWT
    return await client.reAuthenticate();
  } catch (error) {
    // If that errors, log in with email/password
    // Here we would normally show a login page
    // to get the login information
    return await client.authenticate({
      strategy: 'local',
      email: 'hello@feathersjs.com',
      password: 'supersecret'
    });
  }
};

const main = async () => {
  const auth = await login();

  console.log('User is authenticated', auth);

  // Log us out again
  await client.logout();
};

main();