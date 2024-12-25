
import { greet } from './utils.js';

const message = greet(`"This text are passed from index.js to utils.js"`);

document.getElementById("lblheader").innerText = message;

