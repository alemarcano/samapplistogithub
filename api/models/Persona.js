/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: "db",
  tableName: "Persona",
  shema: true,
  autoCreatedAt: false,
 	autoUpdatedAt: false,
  attributes: {

    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement:true,
      columnName: 'idPersona'
    },

    cedula: {
  		type: 'integer',
      required: true,
      unique: true,
      columnName: 'Cedula'

  	
    },

    nombres: {
  		type: 'string',
      required: true,
      columnName: 'Nombres'
  
    },

    apellidos: {
  		type: 'string',
      required: true,
      columnName: 'Apellidos'
  
    },

    sexo: {
  		type: 'string',
      required: true,
      columnName: 'Sexo'
  
    },

    nroAp: {
  		type: 'string',
      columnName: 'NroAp'
  
    },

    calle: {
  		type: 'string',
      columnName: 'Calle'
  
    },

    urbanizacion: {
  		type: 'string',
      columnName: 'Urbanizacion'
  
    },

    municipio: {
  		type: 'string',
      columnName: 'Municipio'
  
    },

    estado: {
  		type: 'string',
      columnName: 'Estado'
  
    },

    estudiante: {
      collection:'estudiante',
      via: 'persona'
    }






  }
};

