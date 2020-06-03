/**
 * <Создание объекта персонажа с определенным именем и типом>
 *
 *
 * @param {string} name - Имя создаваемого персонажа
 * @param {string} type - Вид персонажа
 *
 * @throws Выбрасывает ошибку, если имя персонажа менее 2 символов или более 10,
 * если передаваемый вид 'undefined',
 * если передается !string
 */


function Character(name, type) {
  this.name = name;
  this.type = type;
}