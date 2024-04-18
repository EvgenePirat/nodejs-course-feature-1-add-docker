export default {
    schema: './src/db/schema.js',
    out: './drizzle',
    driver: 'pg',

    dbCredentials: {
        host: '127.0.0.1',
        port: 5432,
        database: 'nodejs_course_database',
        user: 'nodejs_course_admin',
        password: 'my_password'
    },
 };