// components/FileUpload.tsx
import React, { ChangeEvent } from 'react';

interface FileUploadProps {
  label: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, id, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="file"
        id={id}
        className="mt-1 p-2 w-full border rounded-md"
        onChange={onChange}
      />
    </div>
  );
};

export default FileUpload;
