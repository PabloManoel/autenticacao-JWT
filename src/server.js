const app = require("./app");

// TODO: colocar como variavel de ambiente
const port = "3000";

app.listen(port, function() {
    console.log(`app listen on port ${port}`)
});
