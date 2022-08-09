
# Bem-vindo(a) ao Universe!

Você é apaixonado ou quer desvendar os mistérios do universo? Vem com a gente que é sucesso! 
Aqui você pode percorrer os planetas e luas, além de cadastrar dados.
Para embarcar nessa jornada siga os passos abaixo para não ter problemas.


# Descrição do projeto

**Desenvolvedores:** Bárbara Almeida e Estevão Boaventura 

**Instituição de ensino:** Colégio Cotemig Técnico

**Objetivo do Projeto:** Desenvolvido com o objetivo de praticar e aprofundar os conhecimentos em node e react.

**Linguagens utilizadas:**
React Typescript
Node Js

## Instruções para rodar o projeto

Após fazer o clone do projeto rode os seguintes comandos no terminal:

 - **npm install**  ou **yarn install** (para instalar todas as dependências do projeto)
 - **npm run start** ou **yarn run start** (para rodar o backend)
 - **cd universe-app** (para entrar na pasta do front) e logo depois **npm run start** ou **yarn run start** (para rodar o front)
 
Observação: Caso você utilize **yarn**, basta substituir a palavra npm por yarn que funcionará do mesmo jeito.

## Descrição Front-end (universe-app)

Figma de criação: https://www.figma.com/file/j2lXtCDZd4CSMHa90m9FHy/Universe?node-id=0%3A1

Rotas do Front:
Home: http://localhost:3000/
Planets: http://localhost:3000/planets
Astronauts: http://localhost:3000/astronauts


## Descrição Back-end (universe)

Projeto criado seguindo os padrões MVC (Model, View, Controller).
As rotas podem ser testadas pelo Insomnia ou Pelo próprio front.

##  GetAllMoons

    http://localhost:3001/moons

## DeleteMoon

    http://localhost:3001/moon/{id}/delete

|         Parâmetro       |Descrição            
|----------------|-------------------------------|
|id| Obrigatório para identificação          | 


    
## CreateMoon

    http://localhost:3001/moon/create
|         Parâmetro       |Descrição                                 
|----------------|-------------------------------|
|body| JSON        

    
    body: {
            "id": 12,
            "planet_reference": "Mars",
			"name": "phobos",
            "radio": 18
            }
 
## UpdateMoon

    http://localhost:3001/moon/{id}
|         Parâmetro       |Descrição                                   
|----------------|-------------------------------
|id| Obrigatório para identificação              
|body          |JSON           


    
    body: {
            "id": 1,
            "planet_reference": "Mars",
			"name": "phobos",
            "radio": 18
          }


 

# #Links API pública
Além da API interna descrita acima, também fizemos uso de uma API pública para retornar os planetas na tela "Planets".

Link: https://api.le-systeme-solaire.net/swagger/

## GetAllPlanets

    https://api.le-systeme-solaire.net/rest/bodies


## Agradecemos pela atenção!

