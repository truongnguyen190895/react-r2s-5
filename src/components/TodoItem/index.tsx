import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.css";

interface Props {
  id: number;
  title: string;
  isCompleted: boolean;
  onRemove: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

export const TodoItem = ({
  id,
  title,
  isCompleted,
  onRemove,
  onEdit,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoContent, setTodoContent] = useState<string>(title);

  const handleClickEdit = () => {
    if (isEditing) {
      onEdit(id, todoContent);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };

  const onClickRemoveOrCancel = () => {
    if (isEditing) {
      setTodoContent(title);
      setIsEditing(false);
    } else {
      onRemove(id);
    }
  };

  return (
    <div className={styles.container}>
      {isEditing ? (
        <input type="text" value={todoContent} onChange={handleChange} />
      ) : (
        <h3>{title}</h3>
      )}

      <Button variant="info" size="sm" onClick={handleClickEdit}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button variant="danger" size="sm" onClick={onClickRemoveOrCancel}>
        {isEditing ? "Cancel" : "Delete"}
      </Button>
    </div>
  );
};
