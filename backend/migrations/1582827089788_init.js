/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.createTable("user", {             
        id: {
            type: 'id',            
            notNull: true,
            primaryKey: true
        }, 
        login: { type: "text", notNull: true },
        password: {type: "text", notNull: true }, 
        city: { type: "text", notNull: true }, 
        age: { type: "integer", notNull: true}, 
        email: { type: "text", notNull: true }
    })
}

exports.down = pgm => {
    pgm.dropTable("user", { ifExists: true })
}
