# DevTest Engineering Assessment
- **Teste BackEnd na DevTest**

Este projeto é um sistema back-end para uma aplicação de quadro de empregos, replicando o conceito e as funcionalidades da **Plus Network**. O sistema fornece funcionalidades para registro de usuários, candidatura a vagas, filtros avançados de pesquisa e notificações por e-mail, tudo dentro de uma API REST.

## Tecnologias Utilizadas

- **Node.js** com **Fastify**: Para lidar com requisições HTTP.
- **TypeScript**: Para tipagem estática e qualidade de código.
- **Prisma**: ORM para interação com o banco de dados.
- **PostgreSQL**: Banco de dados para armazenamento.
- **Nodemailer**: Para envio de notificações por e-mail.
- **jsonwebtoken**: Para gerenciamento de autenticação de usuários.
- **bcrypt**: Para hashing de senhas.

## Funcionalidades

1. **Gerenciamento de Usuários**
   - Cadastro e login de usuários.
   - Redefinição de senha através de link temporário por e-mail ou OTP.
   - Autenticação baseada em JWT.

2. **Candidaturas a Vagas**
   - Usuários podem se candidatar a vagas e receber confirmação por e-mail.
   - Possibilidade de salvar e curtir publicações de vagas para referência futura.

3. **Filtros Avançados**
   - Filtro de vagas por critérios como cargo, nome da empresa, etc.
   - Opções para classificação, paginação e pesquisa.

4. **Notificações**
   - Notificações por e-mail estilizadas para candidaturas e atualizações.

5. **Seed de Banco de Dados**
   - Dados de seed injetados no banco PostgreSQL usando um script JSON.

6. **Sistema de Filas**
   - Filas para processamento de tarefas em segundo plano (ex.: notificações por e-mail).

7. **Documentação da API**
   - Documentação da API REST utilizando ApiDog.
   - Link da documentacao da api: https://www.apidog.com/apidoc/project-731167

## Iniciando o Projeto

### Pré-requisitos

- Node.js e npm instalados localmente.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/franciscojoaopedro/backend-engineering-assessment.git
   cd backend-engineering-assessment
   ```
2. Instalar as dependecias
   ``` bash
   npm install
   npx prisma generate dev
   ```
3. Executar o projecto
   ```bash
   npm run dev
   ```
