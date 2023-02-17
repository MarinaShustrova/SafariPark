/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@admin',
          password: 'admin',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@admin',
          password: 'admin',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@admin',
          password: 'admin',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@admin',
          password: 'admin',
          isSuperAdmin: 'true',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
