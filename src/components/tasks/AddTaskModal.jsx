import { useForm } from "react-hook-form";
import MyModal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onCancel = () => {
    reset();
    setIsOpen(false)
  }
  const onSubmit = (data) => {
    dispatch(addTask(data))
    onCancel();
  };
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Masud Here">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-md"
              id="title"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Description
            </label>
            <input
              type="text"
              className="w-full rounded-md"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Dateline
            </label>
            <input
              type="date"
              className="w-full rounded-md"
              id="date"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Assign To
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value="Masud Sarder">Masud Sarder</option>
              <option value="Zubair Ibn">Zubair Ibn</option>
              <option value="Hridoy">Hridoy</option>
              <option value="Mojahid">Mojahid</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Priority
            </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option defaultValue value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => onCancel()} type="button" className="btn btn-danger">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </MyModal>
    </div>
  );
};

export default AddTaskModal;
