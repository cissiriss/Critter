import { useState } from "react";
import { PostForm } from "./PostForm";

export default function NewPost() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="container flex flex-col flex-1 items-center">
      <button id="modal-button" className="btn mt-10" onClick={openModal}>
        New Post
      </button>
      <dialog
        open={modalOpen}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Post</h3>
          <PostForm setModalOpen={setModalOpen} />
          <div className="modal-action">
            <form method="dialog">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
