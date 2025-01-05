const { faker }  = require('@faker-js/faker');

const user = document.getElementById('dev-user');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();


const mount = (el) => {
    el.innerHTML = `${firstName} ${lastName}`;
}


mount(user);
export { mount };