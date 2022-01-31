const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

let excitedWelcomeMessage = welcomeMessage.toUpperCase();

let upperCaseCurrentUser = currentUser.toUpperCase();

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

const shortGreeting = welcomeMessage.slice(0,7) + ", " + firstInitial + "!";