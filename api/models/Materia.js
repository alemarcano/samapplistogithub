/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: "db",
  tableName: "Materia",
  shema: true,
  autoCreatedAt: false,
 	autoUpdatedAt: false,

  attributes: {

    id:{
      type: 'integer',
       primaryKey: true,
      autoIncrement:true,
      columnName: 'idMateria'
    },

    nombre:{
      type: 'string',
      unique: true,
      columnName: 'Nombre'
    },

    codigo:{
      type: 'string',
      unique: true,
      required:true,
      columnName: 'Codigo'
    }

  }
};

