/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          firstName: 'Jhon',
          lastName: 'Therry',
          email: 'Jhon_Therry43@google.com',
          password: '123456',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'MarinaShustrova',
          lastName: 'Walsh',
          email: '89647000410h@yandex.ru',
          password: '123456',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'John',
          lastName: 'Lock',
          email: '123@yahoo.com',
          password: '123456',
          isSuperAdmin: 'false',
        },
        {
          firstName: 'Mary',
          lastName: 'Lewes',
          email: '123@gmail.com',
          password: '123456',
          isSuperAdmin: 'false',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
