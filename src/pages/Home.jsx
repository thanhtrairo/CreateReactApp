
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useDispatch } from "react-redux";
import { addMember } from "../actions/member";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập username")
    .max(50, "username tối đa 50 ký tự"),
  age: yup
    .string()
    .required("Vui lòng nhập tuổi")
    .max(20, "mật khẩu tối đa 20 ký tự")
});

function Home() {
  
  const dispatch = useDispatch()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });
  const onLoginSubmit = (data) => {
    dispatch(addMember(data))
  };
  return (
    <div>
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="field">
        <label>Username: </label>
        <input {...register("username")} />
        {errors.username && 
         <p className="error">{errors.username?.message}</p>}
      </div>
      <div className="field">
        <label>Age: </label>
        <input {...register("age")} />
        {errors.age && 
        <p className="error">{errors.age?.message}</p>}
      </div>
      <div className="field">
      <select {...register("classType")}>
        <option value="react">react</option>
        <option value="java">java</option>
      </select>
      </div>
      <div className="field">
        <button type="submit">Add member</button>
      </div>
    </form>
    
    </div>
    
  );
}

export default Home
