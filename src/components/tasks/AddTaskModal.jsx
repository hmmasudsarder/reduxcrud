import { useForm } from "react-hook-form";
import MyModal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Masud Here">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} />
           <button type="submit">Submit</button>
        </form>
      </MyModal>
    </div>
  );
};

export default AddTaskModal;
