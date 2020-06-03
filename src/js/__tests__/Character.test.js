import Character from '../Character';

test('new Character', () => {
  const newCharacter = new Character('Test77');
  expect(newCharacter).toEqual({
    name: 'Test77', level: 1, health: 100,
  });
});

test('noname Character', () => {
  const newCharacter = () => new Character();
  expect(newCharacter).toThrow(new Error('имя не задано!'));
});

test('short name', () => {
  const newCharacter = () => new Character('h');
  expect(newCharacter).toThrow(new Error('Имя персонажа должно содержать от двух до десяти символов!'));
});