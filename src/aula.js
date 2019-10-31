//Promisses
const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
      reject("don't ok");
    }, 2000);
  })
  // console.log(myPromise());
  // myPromise()

  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log('error de servidor');
  });

const execPromisse = async () => {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}
// execPromisse();

//Axios
import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response.data.avatar_url);
    } catch (err) {
      console.log('Erro na api');
    }
  }
}
// Api.getUserInfo('lefialho');
// Api.getUserInfo('lefialhofjoisud');



//EXERCÍCIOS - Transforme os seguintes trechos de código utilizando async/await:

// Exercício 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log('1s');
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
}
umPorSegundo();

// function umPorSegundo() {
//   delay().then(() => {
//     console.log('1s');
//     delay().then(() => {
//       console.log('2s');
//       delay().then(() => {
//         console.log('3s');
//       });
//     })
//   });
// }
// umPorSegundo();


// Exercício 2
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.warn('Usuário não existe');
  }
}
// getUserFromGithub('gtghfg');
// getUserFromGithub('lefialho');

// function getUserFromGithub(user) {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Usuário não existe');
//  })
// }


// Exercícios 3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
  // static getRepositories(repo) {
  // axios.get(`https://api.github.com/repos/${repo}`)
  // .then(response => {
  // console.log(response.data);
  // })
  // .catch(err => {
  // console.log('Repositório não existe');
  // })
  // }
}
Github.getRepositories('lefialho/web-components');
Github.getRepositories('rocketseat/dslkvmskv');


// Exercício 4
const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}
buscaUsuario('lefialho');

// const buscaUsuario = user => {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     });
// }
// buscaUsuario('diego3g');