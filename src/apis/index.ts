import axios from 'axios';

const delayTime = (cb: any, ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb);
    }, ms);
  });
};

export const getRooms = async() => {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  try {
    const response = await axios.get(URL);
    await delayTime(() => console.log('2초걸림'), 2000);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
}
