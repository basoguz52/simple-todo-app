import { ITask } from "@/tasks";
import React from "react";
import Task from "./Task";

interface ToDoListOzellikleri {
    tasks: ITask[]
}

const ToDoList: React.FC<ToDoListOzellikleri> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th className="w-full">Tasks</th>
                        {/* <th>Start Date</th>
                        <th>End Date</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {tasks.map(task => <Task key={task.id} task={task}/> )}
                </tbody>
            </table>
        </div>
    );
}

export default ToDoList;