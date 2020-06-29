import React from "react";
import { useForm, Controller } from "react-hook-form";
import get from "lodash/get";
import Button from "components/button";
import Label from "components/label";

export default function Form({ onSubmit, values, fields, validation }) {
  const { handleSubmit, control, errors } = useForm({
    defaultValues: values,
    validationSchema: validation,
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Label key={field.label} title={field.label}>
          <Controller
            as={field.component}
            name={field.name}
            control={control}
          />
          {get(errors, field.name) && (
            <p>{get(errors, `${field.name}.message`)}</p>
          )}
        </Label>
      ))}
      <Button kind="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
