import app from "./src/config/app";

require('dotenv').config();


app.listen(process.env.PORT, () => {
   console.log('Express server listening on port ' + process.env.PORT);
});



