import React from "react";
import { useState } from "react";
import "./todoList.css";
import { useEffect } from "react";
//////////////////////////////////////////////////////////////////////////////////////////////////          COmponent start
const TODOLIST = () => {
  const [title, settitle] = useState("");
  const [task, settask] = useState("");
  const [enter, setenter] = useState("");
  const [filter, setFilter] = useState("ALL");

  ///////////////////////////////////////////////////////////////////////////     Getting stored value from local storage
  const [list, setlist] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  //////////////////////////////////////////////////////////////////////////     Storing tasks in local storage whenever list changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);
  /////////////////////////////////////////////////////////////////////////////////////////////        Task handler function
  const taskHandler = () => {
    if (title && task) {
      setlist([{ title, task, isChecked: false }, ...list]);

      settitle("");
      settask("");
    } else {
      setenter("please fill all the fields");
      setTimeout(() => {
        setenter("");
      }, 2000);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////   Task deleter function
  const taskDeleter = (index) => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setlist(newlist);
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////   Handle checkbox change function
  function handleCheckboxChange(index) {
    setlist((prevList) => {
      return prevList.map((item, i) => {
        if (i === index) {
          return { ...item, isChecked: !item.isChecked };
        } else {
          return item;
        }
      });
    });
  }

  ///////////////////////////////////////////////////////////////////////////////// //////////     handle filter change function
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////   Filter the list based on the filter state
  const filteredList = list.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "Completed Tasks" && item.isChecked) return true;
    if (filter === "Incompleted Tasks" && !item.isChecked) return true;
    return false;
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////  JSX CODE START
  return (
    <div className="A0">
      <section className="A1">
        <h1 className="A2"> welcome!</h1>
        <p className="A3">
          This platform enables you to efficiently manage all your tasks,
          thereby optimizing your work process and time management.
        </p>
      </section>
      {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Section-2 (Form to add task and title, button, and image)
*/}
      <section className="A4">
        <div className="A5" style={{ textAlign: "center" }}>
          <h1 className="A6">TODO LIST</h1>
          <div className="A7">
            <label htmlFor="title" className="A8">
              TITLE
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              className="A9"
            />
            <br className="A10" />
            <label htmlFor="task" className="A11">
              TASK
            </label>
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => settask(e.target.value)}
              className="A12"
            />

            <br className="A13" />
            <button onClick={taskHandler} className="A14">
              ADD
            </button>
            <p className="A15">{enter}</p>
          </div>
        </div>
        <div className="imgcont">
          <img
            className="midimg1"
            style={{
              width: "95%",
              height: "70%",
              marginTop: "70px",
              borderRadius: "20px",
            }}
            src=" https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="  person doing task"
          ></img>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Tasks filter options using select tag */}
      <h1 style={{ textAlign: "center" }}>Tasks List</h1>
      <div>
        <select class="custom-select" onChange={handleFilterChange}>
          <option>ALL</option>
          <option>Completed Tasks</option>
          <option>Incompleted Tasks</option>
        </select>
      </div>
      {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      section-3 ( displaying list of tasks) */}
      <section className="A16">
        <ul className="A17">
          {filteredList.map((item, index) => {
            return (
              <li key={index} style={{ listStyle: "none" }} className="A18">
                <div className="A19">
                  <div className="task-title">
                    <h1 className="A20">{item.title}-</h1>
                    <p className="A21">{item.task}</p>
                  </div>
                  <div className="task-status">
                    <label htmlFor={`check${index}`} className="A22">
                      Task status
                    </label>
                    <input
                      type="checkbox"
                      id={`check${index}`}
                      name={`check${index}`}
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                      className="A23"
                    />
                    <p style={{ display: "inline" }} className="A24">
                      {item.isChecked ? "Completed" : "Incomplete"}
                    </p>
                  </div>
                  <br className="A25" />
                  <br className="A26" />
                  <div className="delete-task">
                    <h2 style={{ display: "inline" }} className="A27">
                      Delete
                    </h2>
                    <img
                      onClick={() => taskDeleter(index)}
                      src="delete.png"
                      alt="Delete"
                      height={"27px"}
                      width={"27px"}
                      className="A28"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default TODOLIST;
