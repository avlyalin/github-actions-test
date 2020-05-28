import faker from 'faker';
import {
  CARDS_DICTIONARIES,
  FIELD_SIZES,
  LANGUAGES,
  TEAMS,
} from 'src/data/constants';

function currentUser() {
  return {
    id: faker.random.uuid(),
    name: faker.name.lastName(),
    team: faker.random.objectElement(TEAMS),
  };
}

function settings() {
  return {
    language: faker.random.objectElement(LANGUAGES),
    fieldSize: faker.random.objectElement(FIELD_SIZES),
    dictionary: faker.random.objectElement(CARDS_DICTIONARIES),
  };
}

function users() {
  const amount = faker.random.number({ min: 5, max: 10 });
  const users = [];
  for (let i = 0; i < amount; i++) {
    users.push({
      id: faker.random.uuid(),
      name: faker.name.lastName(),
      team: faker.random.objectElement(TEAMS),
    });
  }
  return users;
}

function captains(users) {
  const blueId = faker.random.arrayElement(users).id;
  let redId = faker.random.arrayElement(users).id;
  while (redId === blueId && users.length > 1) {
    redId = faker.random.arrayElement(users).id;
  }
  return {
    [TEAMS['blue']]: blueId,
    [TEAMS['red']]: redId,
  };
}

export { currentUser, settings, users, captains };
