
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', tbl => {
    tbl.increments();

    tbl.string('name').notNullable();
      
    tbl.integer('phone').notNullable();  
    
    tbl.dateTime('anniversary').notNullable();
    
    tbl.dateTime('birthday').notNullable();

    tbl.dateTime('graduation').notNullable();

    tbl.dateTime('wedding').notNullable();

    tbl.varchar('comment').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends');
};
