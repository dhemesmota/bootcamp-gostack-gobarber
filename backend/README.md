<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src="https://raw.githubusercontent.com/dhemesmota/bootcamp-gostack-gobarber/master/.github/logo.png" width="200px" />
  <br>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dhemesmota/bootcamp-gostack-gobarber">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dhemesmota/bootcamp-gostack-gobarber">
  
  <img alt="GiHub Issues" src="https://img.shields.io/github/issues/dhemesmota/bootcamp-gostack-gobarber" >
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dhemesmota/bootcamp-gostack-gobarber">
  
  <img alt="GitHub License" src="https://img.shields.io/github/license/dhemesmota/bootcamp-gostack-gobarber">

</p>

<h4 align="center">Back-End</h4>


<p align="center">
  <img alt="Print Codigos" src="https://user-images.githubusercontent.com/26680031/67155279-470bd800-f2e2-11e9-910c-1e850c57bc71.png" >
</p>



<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-ferramentas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_with_curl-instruções">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#paperclip-arquivos">Arquivos</a>
</p>


## :rocket: Tecnologias e ferramentas
- [ReactJS][reactjs]
- [React Native][react-native]
- [Node.JS][nodejs]
- [Sentry Node][sentrynode]
- [Bcryptjs][bcryptjs]
- [Bee Queue][bee-queue]
- [Date-fns][date-fns]
- [Dotenv][dotenv]
- [Prettier][prettier]
- [Express][express]
- [JSON Webtoken][jsonwebtoken]
- [Mongoose][mongoose]
- [Multer][multer]
- [Nodemailer][nodemailer]
- [Sequelize][sequelize]
- [Yup][yup]
- [Eslint][eslint]
- [Nodemon][nodemon]
- [Sucrase][sucrase]
- [...][...]

## :wrench: Ferramentas

- [Postbird][postbird]
- [Insomnia][insomnia]
- [MongoDB Compass][mongodb-compass]
- [Docker][docker]


## :clipboard: Funcionalidades
- Manter usuários
- Autenticação via JWT
- Upload de imagens
- Prestadores de serviços
- Manter agendamentos
- Visualizar horários agendados
- Notificações via e-mail
- Visualizar horários disponíveis

## :page_with_curl: Instruções 
Para executar esse aplicativo você precisa ter o [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v12][nodejs] ou superior, [Yarn](https://yarnpkg.com) ou [NPM](https://www.npmjs.com/get-npm) instalado no seu computador.<br>
No seu prompt de comando:
```bash
# Crie um arquivo .env e configure as variáveis de ambiente

# Instale as dependências
$ yarn install

# Configure os bancos de dados
## Postgres
$ docker run --name gobarber -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres:11
## MongoDB
$ docker run --name mongobarber -p 27017:27017 -d -t mongo
## Redis
$ docker run --name redisbarber -p 6379:6379 -d -t redis:alpine

# Rodar aplicativo
$ yarn dev

# Abra um novo prompt
$ yarn queue
```

## :paperclip: Arquivos
:pushpin: [Insomnia](https://github.com/dhemesmota/bootcamp-gostack-gobarber/blob/master/Insomnia.json): arquivo contendo rotas da aplicação, deve ser importado no Insominia, se não tiver, bastar instalar em seu computador. [Link para download](https://insomnia.rest).

## :memo: Licença
Este projeto está sob a licença MIT.[Licença](https://github.com/dhemesmota/bootcamp-gostack-gobarber/blob/master/LICENSE.md)

[reactjs]: https://pt-br.reactjs.org/
[react-native]: https://facebook.github.io/react-native/
[nodejs]: https://nodejs.org/en/
[react-router-dom]: https://www.npmjs.com/package/react-router-dom
[react-toastify]: https://github.com/fkhadra/react-toastify
[styled-components]: https://www.styled-components.com/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[axios]: https://github.com/axios/axios
[sentrynode]: https://www.npmjs.com/package/@sentry/node
[bcryptjs]: https://www.npmjs.com/package/bcryptjs
[bee-queue]: https://github.com/bee-queue/bee-queue
[date-fns]: https://date-fns.org/
[dotenv]: https://www.npmjs.com/package/dotenv
[express]: https://expressjs.com/pt-br/
[jsonwebtoken]: https://github.com/auth0/node-jsonwebtoken
[mongoose]: https://mongoosejs.com/
[multer]: https://github.com/expressjs/multer
[nodemailer]: https://nodemailer.com/about/
[sequelize]: https://sequelize.org/
[yup]: https://github.com/jquense/yup
[nodemon]: https://nodemon.io/
[sucrase]: https://github.com/alangpierce/sucrase

[...]: https://github.com/dhemesmota/gympoint

[postbird]: https://electronjs.org/apps/postbird
[mongodb-compass]: https://www.mongodb.com/products/compass
[insomnia]: https://insomnia.rest
[docker]: https://docs.docker.com/docker-for-windows/install/

