//Create Book Library tables

var createDBTables = exports;

createDBTables.createBookTable = "CREATE TABLE IF NOT EXISTS Book ("
                    +"title varchar(25),"
                    +"author varchar(25),"
                    +"summary varchar(300),"
                    +"ISBN varchar(20),"
                    +"genre varchar(25),"
                    +"url varchar(30));";

createDBTables.createAuthorTable = "CREATE TABLE IF NOT EXISTS Author ("
                      + "first_name varchar(25),"
                      + "family_name varchar(25),"
                      + "date_of_birth Date,"
                      + "date_of_death Date,"
                      + "name varchar(25),"
                      + "lifespan varchar(25),"
                      + "url varchar(25));";

createDBTables.createBookInstanceTable = "CREATE TABLE IF NOT EXISTS BookInstance ("
                            + "ISBN varchar(20),"
                            + "imprint varchar(25),"
                            + "status varchar(15),"
                            + "due_back Date,"
                            + "url varchar(25));";

createDBTables.createGenreTable = "CREATE TABLE IF NOT EXISTS Genre ("
                     + "name varchar(25),"
                     + "url varchar(30));";

