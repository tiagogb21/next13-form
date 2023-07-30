import React from "react";
import Input from "../Input";
import { IEventField } from "@/data/field";

interface IFieldProps {
  fields: IEventField[];
}

const Field: React.FC<IFieldProps> = ({ fields }) => {
  return (
    <fieldset className="flex flex-col gap-4">
      <legend className="font-bold">{/* Aqui você pode colocar o título do grupo de campos, se necessário */}</legend>
      {fields?.map(({ id, title, validationMessage }) => (
        <Input key={id} id={id} title={title} validationMessage={validationMessage} />
      ))}
    </fieldset>
  );
};

export default Field;
