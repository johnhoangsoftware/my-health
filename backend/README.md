# MYHEALTH

## BACKEND

How to run?

- Config your database in `src/configs/db.json` and `.env`
- Run this commandline at the root of project:

```bash
    # install all packages
    npm install

    # Migrate database
    npx sequelize-cli db:migrate --config ./src/configs/db.json --migrations-path ./src/migrations

    # Seed
    npx sequelize-cli db:seed:all --config ./src/configs/db.json --seeders-path ./src/seeder

    #Run
    npm run dev

    ---------------
    # More:
    # Undo migrate
    npx sequelize-cli db:migrate:undo:all --config ./src/configs/db.json --migrations-path ./src/migrations

    # Undo seed
    npx sequelize-cli db:seed:undo:all --config ./src/configs/db.json --seeders-path ./src/seeder
    
```
