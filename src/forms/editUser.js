import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const EditUser = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Descripción</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <Div>
        <div style={{ margin: "5px" }}>
          <button>Editar</button>
        </div>
        <div style={{ margin: "5px" }}>
          <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancelar
          </button>
        </div>
      </Div>
    </form>
  );
};

export default EditUser;
