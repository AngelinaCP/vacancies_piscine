'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('vacancies', [{
      title: 'JS developer',
      description: "Very very good job",
      english_lvl: "Upper-Intermediate",
      grade: "High",
      tags: ["Communicative", "Responsible", "Good person"],
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
    await queryInterface.bulkInsert('vacancies', [{
      title: 'Java developer',
      description: "Very very good job",
      english_lvl: "Upper-Intermediate",
      grade: "High",
      tags: ["Communicative", "Responsible", "Good person"],
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
    await queryInterface.bulkInsert('vacancies', [{
      title: 'C++ developer',
      description: "Very very good job",
      english_lvl: "Upper-Intermediate",
      grade: "High",
      tags: ["Communicative", "Responsible", "Good person"],
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('vacancies', null, {});
  }
};
