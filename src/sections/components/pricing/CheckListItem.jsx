import React from "react";
import { FiXSquare, FiCheckCircle } from "react-icons/fi";

export const CheckListItem = ({ children, checked }) => (
    <div className="flex items-center gap-2 text-lg">
      {checked ? (
        <FiCheckCircle className="text-xl text-indigo-600" />
      ) : (
        <FiXSquare className="text-xl text-zinc-400" />
      )}
      {children}
    </div>
  );
