import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('MyApp.db');


const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, position TEXT, skype TEXT, password TEXT)',
      [],
      () => {
        console.log('table "users" created');
      },
      (error) => {
        console.log('errors created table "users":', error);
      }
    );
  });
};


const insertUser = (user) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (name, email, phone, position, skype, password) VALUES (?, ?, ?, ?, ?, ?)',
        [user.name, user.email, user.phone, user.position, user.skype, user.password],
        (_, results) => {
          resolve(results);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};


const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (_, results) => {
          if (results.rows.length > 0) {
            resolve(results.rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const updateUser = (user) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE users SET name = ?, phone = ?, position = ?, skype = ? WHERE email = ?',
        [user.name, user.phone, user.position, user.skype, user.email],
        (_, results) => {
          resolve(results);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export { createTables, insertUser, getUserByEmail, updateUser };
