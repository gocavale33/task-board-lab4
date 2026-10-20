import { useState } from "react";
import type { Task } from "./schemas";

type TaskCardProps = Pick<Task, "title" | "done" | "dueDate">;

function TaskCard({ title, done: initialDone, dueDate }: TaskCardProps) {
  const [done, setDone] = useState(initialDone);

  return (
    <div className="task-card">
      <h3>{title}</h3>

      {dueDate && <p>Due date: {dueDate}</p>}

      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
        />
        {done ? "Done" : "Not done yet"}
      </label>
    </div>
  );
}

export default TaskCard;
