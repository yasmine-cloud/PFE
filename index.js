/*const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const eventRouter = require('./routes/events');
const medicationReminderRouter = require('./routes/medicationReminder');
const taskRoutes = require('./routes/taskRoutes');
const caregiverRoutes = require('./routes/caregiverRoutes');



const PORT = process.env.PORT ||3000;
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(eventRouter);
app.use(medicationReminderRouter);
app.use('/api/tasks', taskRoutes);
app.use('/api', caregiverRoutes);




const DB="mongodb+srv://chtilatasnim:socHY1l7ZfdGPf5J@cluster0.klm21ux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
  });*/
  ////////////////////wprkk
const express = require("express");
const helmet = require("helmet");

const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const eventRouter = require('./routes/events');
const medicationReminderRouter = require('./routes/medicationReminder');
const taskRoutes = require('./routes/taskRoutes');
const caregiverRoutes = require('./routes/caregiverRoutes');
const personRoutes = require('./routes/personRoutes');


const PORT = process.env.PORT || 3000;
const app = express();


app.use(helmet());
app.use(express.json());
app.use(authRouter);
app.use(eventRouter);
app.use(medicationReminderRouter);
app.use('/api/tasks', taskRoutes);
app.use('/caregivers', caregiverRoutes);
app.use('/api/persons', personRoutes);

const DB = "mongodb+srv://chtilatasnim:socHY1l7ZfdGPf5J@cluster0.klm21ux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(() => {
  console.log("Connection Successful");
})
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
