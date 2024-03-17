'use client'
import { ITask } from "@/tasks";
import React, { FormEventHandler, useState } from "react";
import { FiDelete, FiEdit, FiTrash, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { deleteToDo, editToDo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {

    const router = useRouter();

    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditToDo: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        editToDo({
            id: task.id,
            text: taskToEdit
        })
        setOpenModalEdit(false)
        router.refresh()
    }
    const handleSubmitDeleteToDo: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        deleteToDo(task.id)
        setOpenModalDelete(false)
        router.refresh()
    }

    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            {/* <td>{ }</td>
            <td>{ }</td> */}
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditToDo}>
                        <h3 className="font-bold text-lg">Edit Task</h3>
                        <div className="modal-action">
                            <input
                                value={taskToEdit}
                                onChange={e => setTaskToEdit(e.target.value)}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                name="text"
                            />
                            <button type="submit" className="btn">Submit</button>

                        </div>

                    </form>
                </Modal>
                <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor="pointer" className="text-red-500" size={25} />
                <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                    <form onSubmit={handleSubmitDeleteToDo}>
                        <h3 className="font-bold text-lg">Delete Task</h3>
                        <p style={{ fontSize: '16px' }} className="py-4">Are you sure, you want to delete this task?</p>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-neutral">Yes</button>
                        </div>

                    </form>
                </Modal>
            </td>
        </tr>
    );
}

export default Task;