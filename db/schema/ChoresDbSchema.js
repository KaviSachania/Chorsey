module.exports =
    "ALTER TABLE chores " +
        "CHANGE choreId choreId INT NOT NULL PRIMARY KEY, " +
        "CHANGE name name VARCHAR(255) NOT NULL, " +
        "CHANGE description description TEXT NULL, " +
        "CHANGE dueDate dueDate DATE NOT NULL, " +
        "CHANGE userId userId INT NULL, " +
        "CHANGE houseId houseId INT NOT NULL, " +
        "CHANGE completed completed BOOLEAN NOT NULL default FALSE;";
        //completed
        //repeating_type
        //future_assign