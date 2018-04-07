module.exports = function(){

    this.getUser = function(connection, callback){
        connection.query('SELECT * FROM user', callback);
    }
    this.saveUser = function(user, connection, callback){
        connection.query('INSERT INTO user SET ?', user, callback);
    }

    return this;

}
