# React Notes

## 1. Props and State

The title prop is passed from a parent component and TaskCard cannot change it directly. The done state belongs to TaskCard and can change when the checkbox is clicked.

## 2. Why use task.id instead of the array index?

Using the array index as a key can cause React to associate the wrong component with an item when the list is reordered or filtered. Using task.id gives each task a stable and unique key.

## 3. Controlled Input

The input value comes from React state. When the onChange handler is removed, typing no longer updates the state, so the controlled input cannot be edited normally.
