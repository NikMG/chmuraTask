'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        task: 'First test',
      },
      {
        task: 'Second Taks'
      }]);
    },

  async down (queryInterface, Sequelize) {
  }
};
