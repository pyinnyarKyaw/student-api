const app = require('./app');
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
});