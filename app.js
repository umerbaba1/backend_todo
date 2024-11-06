const express = require("express");
const app = express();

app.use(express.json());

// Array of objects containing all the data of user input todo
let todo = [];

// Showing the current to-do
app.get("/", (req, res) => {
  res.send(todo);
});

// Created the unique id for the task each time user input and its send in obj{id,title}
app.post("/", (req, res) => {
  const input = req.body.task;
  if (input) {
    unique();
    todo.push({
      id: id_unique,
      title: input,
    });
  } else {
    res.status(411).json({
      Message:"Please Enter Task"
    })
  }

  console.log(req.body);
  res.send(todo);
});

//Delete the user from specific id when user enter thet spcific id

app.delete("/", (req, res) => {
  const id_value = req.body.id;
  todo = todo.filter((value) => {
    return value.id !== id_value;
  });
  res.send(todo);
});

// Used map filter in order to get the value and when id is found changed the data of title according to the input
app.put("/", (req, res) => {
  const id_data = req.body.id;
  const data_changed = req.body.task;
  todo = todo.map((value) => {
    if (value.id === id_data) {
      return { ...value, title: data_changed };
    }
    return value;
  });
  res.send(todo);
});

// function to make unique id
let id_unique = 0;
function unique() {
  return id_unique++;
}

app.get("/data/:value", (req, res) => {
  // res.status(404).json({
  //   data: "Wrong data entered",
  // });
  const dataValue=req.params.value
  console.log(dataValue)
  res.json({
  })
});

app.listen(300);
