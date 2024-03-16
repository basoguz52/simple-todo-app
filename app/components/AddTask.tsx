'use client'
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);


    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full" >
                Add New Task <AiOutlinePlus size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form action="">
                    <h3 className="font-bold text-lg">Add New Task</h3>
                    <div className="modal-action">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            name="text"
                        />
                        <button type="submit" className="btn">Submit</button>

                    </div>

                </form>
            </Modal>
        </div>
    );
}

export default AddTask;