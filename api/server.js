const express = require('express');
const cors = require('cors');
const faker = require('faker');

const port = 3000;
const host = 'localhost';

const app = express();
app.use(cors());

const gerarPessoaAleatoria = () => {
    let pessoa = {
        nome: ` ${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        position: {
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
        }

    }
    return (pessoa);
}

app.get('/', (req, res) => {

    let pessoas = [];
    for (let i = 0; i < 10; i++) {

        pessoas.push(gerarPessoaAleatoria());

    }

    res.setHeader('Contet-Type', 'application/json');
    res.end(JSON.stringify(pessoas));

});
app.listen(port, host, () => {

});