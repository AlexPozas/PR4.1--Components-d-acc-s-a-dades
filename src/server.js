const app = require('./app');

// Inicialitza el servidor, que estarà escoltant en el port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Arrencant servidor de PozasA \nEscoltant en el port ${port}...`));
