import React, { useRef } from "react";
import "./InputField.css";

interface InputType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) => void;
  
}

const InputField: React.FC<InputType> = ({ todo, setTodo, handleAdd }: InputType) => {

    const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form action="" className="input" onSubmit={
        (e) => {
        handleAdd(e)
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="input-box"
        placeholder="Enter a task"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
