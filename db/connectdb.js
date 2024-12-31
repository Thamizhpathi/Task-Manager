const mongoose =require("mongoose");

const connectString ="mongodb+srv://thamizh:dqiJbs3DoWhO0g6i@thamizhcluster.lid7i.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose. connect(connectString).then(()=> console.log("connected")).catch((err)=>console.log(err));