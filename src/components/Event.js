import React, { useContext } from "react";
import { DELETE_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `本当にイベントID${id}を削除してもよろしいですか？`
    );

    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id,
      });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleClickDeleteButton}
      >
        削除
      </button>
    </tr>
  );
};

export default Event;
