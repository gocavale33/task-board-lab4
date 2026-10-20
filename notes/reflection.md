# React Reflection

## 1. Why must filter state be lifted up?

FilterBar and TaskList are sibling components. They cannot directly share their own state, so the shared filter state should be owned by their common parent, TaskBoard.

## 2. What can go wrong with array index keys?

If tasks are reordered or filtered, an array index can refer to a different task. This can cause React to reuse the wrong component for an item.

## 3. What does "props flow down, requests flow up" mean?

TaskBoard passes tasks down to TaskList through props. NewTaskInput requests a change by calling onAddTask, and TaskBoard updates the tasks state.
