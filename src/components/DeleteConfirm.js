import Button from '@common/Button';
import React from 'react';

function DeleteConfirm({ item, onDelete, setOpen }) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      Are you sure to delete this item?
      <div className="flex gap-10 mb-4">
        <Button
          color="grey"
          onClick={() => {
            setOpen(false);
          }}
        >
          CANCEL
        </Button>
        <Button
          color="red"
          onClick={() => {
            onDelete(item);
            setOpen(false);
          }}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default DeleteConfirm;
