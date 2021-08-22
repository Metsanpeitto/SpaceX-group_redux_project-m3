import axios from 'axios';

const urlRockets = 'https://api.spacexdata.com/v3/rockets';
const urlMissions = 'https://api.spacexdata.com/v3/missions';
const urlDragons = 'https://api.spacexdata.com/v3/dragons';

const getMissions = async () => axios.get(`${urlMissions}`).then((result) => {
  const missions = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    data.forEach((item) => {
      const mission = {
        id: item.mission_id,
        name: item.mission_name,
        description: item.description,
      };
      return missions.push(mission);
    });
  }
  return missions;
});

const getDragons = async () => axios.get(`${urlDragons}`).then((result) => {
  const dragons = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    data.forEach((item) => {
      const dragon = {
        rocket_id: item.id,
        rocket_name: item.name,
        flickr_images: item.flickr_images,
        description: item.description,
        type: item.type,
      };
      dragons.push(dragon);
    });
  }
  return dragons;
});

const getRockets = async () => axios.get(`${urlRockets}`).then((result) => {
  const rockets = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    data.forEach((item) => {
      const rocket = {
        rocket_id: item.rocket_id,
        rocket_name: item.rocket_name,
        flickr_images: item.flickr_images,
        description: item.description,
        active: item.active,
      };
      rockets.push(rocket);
    });
  }
  return rockets;
});

const getReservations = () => {
  const reservations = {
    rockets: [],
    dragons: [],
    missions: [],
  };
  return reservations;
};

export default {
  getRockets, getDragons, getMissions, getReservations,
};
