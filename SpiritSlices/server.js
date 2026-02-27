let express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(8400, () => {
    console.log('Server is running on port 8400');
});