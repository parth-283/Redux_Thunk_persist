import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddListText, DeleteListText, EditListText } from "../actions/index";

function AddList() {
  const myState = useSelector((state) => state.changeTodoText.userData);
  const dispatch = useDispatch();

  const [tododata, setTodoData] = useState({
    id: 0,
    text: "",
  });
  const [updatedtext, setUpdatedText] = useState(false);
  const [editedvalue, setEditedValue] = useState({
    id: 0,
    text: "",
  });

  const HandleAddTodo = (e) => {
    setTodoData({
      ...tododata,
      text: e.target.value,
      id: Math.random().toString().substr(9, 6),
    });
  };

  const HandleAdd = () => {
    if (tododata.text.length > 0) {
      dispatch(AddListText(tododata));
      setTodoData({ ...tododata, text: "" });
    } else {
      alert("Enter Text ...");
    }
  };

  const handleDelete = (e) => {
    dispatch(DeleteListText(e));
  };

  const handleEdit = (e) => {
    setUpdatedText(true);
    setEditedValue({ id: e.id });
    setTodoData({ ...tododata, text: e.text });

  };
  
  const HandleUpdate = () => {
    setUpdatedText(false);
    setTodoData({ ...tododata, text: "" });
    dispatch(EditListText({ ...editedvalue,text: tododata.text }));
  };
  
 

  return (
    <div>
      <div className="container">
        <h1>List</h1>
        <input
          type="text"
          name="List"
          value={tododata.text}
          onChange={(e) => HandleAddTodo(e)}
        />
        {!updatedtext ? (
          <>
            <button onClick={() => HandleAdd()}>Add List</button>
          </>
        ) : (
          <>
            <button onClick={() => HandleUpdate()}>update</button>
          </>
        )}

        <br />
        <div className="container border  " style={{ width: "25%" }}>
          {myState.map((item) => (
            <>
              <div className="text-start">
                <lable className="" key={item.id}>
                  {item.text}
                </lable>
                <br />
                <div className="text-end">
                  <button onClick={(e) => handleDelete(item.id)}>delete</button>
                  <button onClick={(e) => handleEdit(item)}>Edit</button>
                </div>
              </div>
            </>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}

export default AddList;
