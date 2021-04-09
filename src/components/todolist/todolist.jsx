import React, { isValidElement, useState } from "react";
import {
  AppBar,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
  List,
  Button,
  Divider,
  ListItemText,
  ListItem,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { connect } from "react-redux";
import Filteredlinks from "../filteredlinks/filteredlinks";
import Todoheader from "./todoheader";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
        return todos;
  }
};

const Todolist = (props) => {
  const { crt, filter } = props;
  const visibleTodos = getVisibleTodos(crt, filter);
  const [input, setInput] = useState("");
  const[val,setval]=useState();
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <Todoheader />
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={8} sm={7} md={6} lg={4}>
          <Paper
            style={{ margin: "0.5rem 0", padding: "0 1rem", display: "flex" }}
          >
            <TextField
              onChange={(e) => setInput(e.target.value)}
              value={input}
              margin="normal"
              label="Add New Todo"
              fullWidth
            />
            <Button
              onClick={() => {
                props.onClickAdd(input);
                setInput("");
              }}
              style={{ margin: "25px 0px 20px 10px" }}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </Paper>
          <Paper>
            <List style={{padding:'0px'}}>
              {visibleTodos.map((todo) => (
                <React.Fragment key={todo.id} >
                    <ListItem  style={{ height: "64px" }}>
                    <Checkbox
						tabIndex={-1}
                        checked={todo.completed}
                        onClick={() => props.onClickChange(todo.id)}
					
					/>
                    <TextField id="standard-basic" style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}  type="text" defaultValue={todo.text} onChange={(e)=>setval(e.target.value)}/>
                    {/* <ListItemText
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                      
                    >
                      {todo.text}
                    </ListItemText> */}
                    <ListItemSecondaryAction>
						<IconButton aria-label='Edit' >
							<EditIcon onClick={()=>props.onClickUpdate(todo.id,val)} />
						</IconButton>
						<IconButton
							aria-label='Delete'
							>
							<DeleteIcon onClick={()=>props.onClickDelete(todo.id)} />
						</IconButton>
					</ListItemSecondaryAction>
                  </ListItem>
          
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
          <Paper style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
             <div style={{marginTop:15}}><p>Total Tasks: {visibleTodos.length}</p></div>
            <div >
              <Filteredlinks filter="SHOW_ALL">All</Filteredlinks>
            </div>
            <div>
              {" "}
              <Filteredlinks filter="SHOW_ACTIVE">Active</Filteredlinks>
            </div>
            <div>
              {" "}
              <Filteredlinks filter="SHOW_COMPLETED">Completed</Filteredlinks>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};
let nextTodoId = 0;
const mapStateToProps = (state) => {
  console.log(state);
  return {
    crt: state.reducer,
    filter: state.visibilityFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (input) =>dispatch({ type: "ADD_TODO", text: input, id: nextTodoId++ }),
    onClickChange: (id) => dispatch({ type: "TOGGLE_TODO", id: id }),
    onClickDelete: (id)=>dispatch({ type: "DELETE_TODO", id:id}),
    onClickUpdate: (id,val)=>dispatch({ type: "UPDATE_TODO", id:id,text:val})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
