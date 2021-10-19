### Features

*Listar posts
*Mostrar quantidade de posts
*Media de palavras por post
*Possibilidade de like no post
\*Visualizar a reputação de cada post

-

### Exemplo Promise Query Firebase(firestore)

firestore
.collection("users")
.get()
.then((res) => {
console.log(res.docs);
console.log(".then", res);
})
.catch((error) => console.error(error.message));

OU

const getUsers = async () => {
try {
const res = await firestore.collection("users").get();
console.log("async", res);
const users = res.docs.map((doc) => console.log(doc.data()));
} catch (error: any) {
console.error(error.message);
}

### User Object

{
id: 1,
name: "Italo Ferreira Dutra",
username: "fractal",
userposts: posts,
image:
"https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/74460482_3302145156492729_5896033092795105280_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHzHJzglxOjJ8HEsVXN51gSVXPk30uQ3rJVc-TfS5Desl_ACizwBkJiW6EqMlR8YXmCc3nluRpPktx3n642TIAh&_nc_ohc=AeMAu_mwk0oAX-Wzq7y&_nc_ht=scontent.fcpq5-1.fna&oh=e6a6df8142f48d16adfb46450ba2bb79&oe=615DB5D4",
email: "cabecinhapremium@hotmail.com",
address: {
country: "Brasil",
city: "Rio Claro",
state: "São Paulo",
},
}

### Contexto

Usar console log no valor da propriedade na função/propriedade criada, para confirmar se ele esta chegando da forma correta

### Functions

function(){} -----> Padrao Antigo

() => {} -----> Sem nome

const x = () => {} ------> Função atribuida a variavel

### useEffect

Função que recebe como parametro uma função e uma array
Executa toda vez que o array de dependencias mudar

### useMemo

Nao renderiza todas as dependencias por conta de uma mudança no array de dependencias, renderizando só o necessario
