import React, { useState, Fragment } from "react";
import EditUser from "./forms/editUser";
import AddUser from "./forms/addUser";
import Table from "./tables/table";
import PopUp from "./components/PopUp";
import MediaQuery from "react-responsive";
const App = () => {
  const usersData = [
    { id: 1, name: "Electricidad", username: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { id: 2, name: "Ambulancia", username: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, name: "Gasfitero", username: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];
  const initialFormState = { id: null, name: "", username: "" };

  //set state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  return (
    <MediaQuery maxWidth={720}>
      {isMobile => {
        return (
          <div className="container">
            <div>crud</div>
            <div className="flex-row">
              <div className="flex-large">
                {editing ? (
                  <PopUp active={editing} isMobile={isMobile} onClose={()=>setEditing(false)}>
                  <div style={{padding: '10px'}}>
                  <EditUser
                      editing={editing}
                      setEditing={setEditing}
                      currentUser={currentUser}
                      updateUser={updateUser}
                    />
                  </div>
                   
                  </PopUp>
                ) : (
                  <Fragment>
                    <h2>Add user</h2>
                    <AddUser addUser={addUser} />
                  </Fragment>
                )}
              </div>
              <div className="flex-large">
                <h2>View users</h2>
                <Table
                  users={users}
                  editRow={editRow}
                  deleteUser={deleteUser}
                />
              </div>
            </div>
          </div>
        );
      }}
    </MediaQuery>
  );
};
export default App;
