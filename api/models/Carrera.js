/**
 * Carrera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: "db",
  tableName: "Carrera",
  shema: true,
  autoCreatedAt: false,
 	autoUpdatedAt: false,

  attributes: {

    id:{
      type: 'integer',
       primaryKey: true,
      autoIncrement:true,
      columnName: 'idCarrera'
    },


    nombre:{
      type: 'integer',
      columnName: 'Nombre'
    },

  }
};

