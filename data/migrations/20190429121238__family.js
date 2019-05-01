
exports.up = function(knex, Promise) {
    return knex.schema.createTable('family', tbl => {
      tbl.increments();
  
      tbl.string('name').notNullable().unique();
        
      tbl.integer('phone').notNullable();
      
      tbl.dateTime('anniversary').notNullable();
      
      tbl.dateTime('birthday').notNullable();
  
      tbl.dateTime('graduation').notNullable();
  
      tbl.dateTime('wedding').notNullable();
  
      tbl.varchar('comment').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('family');
  };