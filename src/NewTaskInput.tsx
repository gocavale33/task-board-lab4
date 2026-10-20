import { useState } from "react";

function NewTaskInput({
  onAddTask,
}: {
  onAddTask: (title: string) => void;
}) {
  const [text, setText] = useState("");

  function handleAdd() {
    const title = text.trim();

    if (title === "") return;

    onAddTask(title);
    setText("");
  }

  return (
    <div className="new-task-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        placeholder="Add a task..."
        aria-label="New task title"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NewTaskInput;
