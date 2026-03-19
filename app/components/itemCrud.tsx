"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addItem, deleteItem, editItem } from "@/features/items/itemSlice";

export default function ItemCrud() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.list);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;

    dispatch(
      addItem({
        id: Date.now(),
        name: input,
      })
    );

    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-10">

      <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 shadow-sm">

        <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
          Redux CRUD
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add item"
            className="flex-1 px-4 py-2 rounded-lg border"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Add
          </button>
        </div>

        {/* List */}
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white dark:bg-slate-700 px-4 py-2 rounded-lg"
            >
              <span>{item.name}</span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    dispatch(
                      editItem({
                        id: item.id,
                        name: item.name + " ✏️",
                      })
                    )
                  }
                  className="text-sm text-indigo-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(deleteItem(item.id))}
                  className="text-sm text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}