import MyModal from "../ui/Modal";

const TaskDetailsModal = (isOpen, setIsOpen) => {
  return (<div className="">
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen}></MyModal>
  </div> );
};

export default TaskDetailsModal;
