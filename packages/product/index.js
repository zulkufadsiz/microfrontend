const { faker }  = require('@faker-js/faker');

const product = document.getElementById('dev-product');
const pName = document.createElement('p');
const p = document.createElement('p');
pName.innerHTML = faker.commerce.productName();
p.innerHTML = faker.commerce.price();
product.appendChild(pName);
product.appendChild(p);
const productName = faker.commerce.productName()

const mount = (el) => {
    el.innerHTML = productName;
}

mount(el);
export { mount };