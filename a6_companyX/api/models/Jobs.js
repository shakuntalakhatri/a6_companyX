/**
 * Jobs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'jobs',
  attributes: {
    id : {
      type : 'string',
      columnName: 'jobname',
      required: true
    },
    partid :{
      type : 'number',
      columnName: 'partid',
      required: true
    },
    quantity :{
      type : 'number',
      columnName: 'quantity',
      defaultsTo: 100
    }
  }

};

