import * as faker from "faker";

const name = faker.name.firstName();
document.body.innerHTML = `<h1>Hello, ${name}!</h1>`;
