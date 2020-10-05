# Autenticação JWT
Demonstração de processo de autenticação do tipo JWT em uma aplicação nodeJs

<br/>

---
---

<h2 align="center"> 
	🚧&nbsp;&nbsp;🚧&nbsp;&nbsp;🚧  Em desenvolvimento...  🚧&nbsp;&nbsp;🚧&nbsp;&nbsp;🚧&nbsp;&nbsp;
</h2>

---
---
<br/>

## Instalação

```bash
# Clone este repositório
$ git clone git@github.com:PabloManoel/autenticacao-JWT.git

# Acesse a pasta do projeto no terminal/cmd
$ cd autenticacao-JWT

# Instale as dependências
$ npm install
```

---
<br/>

## Execução

<br/>

### Em desenvolvimento

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd autenticacao-JWT

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <HTTP://localhost:3000/>
```

---
<br/>

## Endpoints

<br/>

### ★ Login 
| | |
| :-- | :-- | 
| URL | http://localhost:3000/auth/login |
| método | POST |
| header: content-type | application/x-www-form-urlencoded |
| body | user: string, pwd: string | 
| | |

<br/>

### ★ Logout 
| | |
| :-- | :-- | 
| URL | http://localhost:3000/auth/login |
| método | POST |
| body | null | 
| | |

<br/>

### ★ Busca anotações por usuário
| | |
| :-- | :-- | 
| URL | http://localhost:3000/notes |
| método | GET |
| header: x-access-token | jwt |
| | |

<br/>

---

<br/>

## Débitos técnicos

- Manipulador de exceções
- Services
- Banco de dados
- Modulo de permissões
- docker e dockerCompose
- testes

---
<br/>

## Tecnologias

👉 [Npm](https://www.npmjs.com/)

👉 [Node](https://nodejs.org/en/)

👉 [Express](https://expressjs.com/)

👉 [Git](https://git-scm.com/)

👉 [JWT](https://jwt.io/introduction/)

---

## Autor

<a href="https://github.com/PabloManoel">
 <img style="border-radius: 50% 50% 0 0; padding-top:10px" src="https://avatars1.githubusercontent.com/u/25345710?s=460&u=1a40ec32900c78618cf47314c0bf555b6bfba641&v=4" width="100px;" alt=""/>
</a>
<br />

### Feito por Pablo Manoel 🤘 Entre em contato!

[<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40" width="40" alt="Medium" />](https://github.com/PabloManoel)&nbsp;&nbsp;&nbsp;
[<img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" height="40" width="40" alt="Linkedin" />](https://www.linkedin.com/in/pablo-manoel/)&nbsp;&nbsp;
[<img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" height="40" width="40" alt="Medium" />](https://medium.com/@pablo.manoel)

---
---
