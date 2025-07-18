// queries.ts
export const createTables = `
  CREATE TABLE IF NOT EXISTS article (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS waiter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS terrace (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS restaurant_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number INTEGER NOT NULL,
    terrace_id INTEGER,
    FOREIGN KEY (terrace_id) REFERENCES terrace(id)
  );

  CREATE TABLE IF NOT EXISTS discount (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    amount REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS bill (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    waiter_id INTEGER,
    table_id INTEGER,
    discount_id INTEGER,
    total REAL NOT NULL,
    status TEXT CHECK(status IN ('in progress', 'paid', 'canceled')) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (waiter_id) REFERENCES waiters(id),
    FOREIGN KEY (table_id) REFERENCES restaurant_tables(id),
    FOREIGN KEY (discount_id) REFERENCES discounts(id)
  );

  CREATE TABLE IF NOT EXISTS bill_item (
    bill_id INTEGER,
    item_id INTEGER,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (bill_id, item_id),
    FOREIGN KEY (bill_id) REFERENCES bills(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
  );
`;
