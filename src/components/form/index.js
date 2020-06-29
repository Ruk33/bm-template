import React from "react";
import { useForm, Controller } from "react-hook-form";
import get from "lodash/get";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "components/button";
import Label from "components/label";

export default function Form({
  onSubmit,
  values,
  fields,
  validation,
  primaryButton,
  secondaryButton,
  extraButton,
}) {
  const { handleSubmit, control, errors } = useForm({
    defaultValues: values,
    validationSchema: validation,
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div className="form-group" key={field.label}>
          <Label title={field.label}>
            <Controller
              as={field.component}
              name={field.name}
              control={control}
              {...field.props}
            />
            {get(errors, field.name) && (
              <p className="text-danger">
                {get(errors, `${field.name}.message`)}
              </p>
            )}
          </Label>
        </div>
      ))}
      <Row>
        <Col xl={6}>
          {extraButton && (
            <Button kind="link" type="button" onClick={extraButton.onClick}>
              {extraButton.label}
            </Button>
          )}
        </Col>
        <Col xl={6} className="text-right">
          {secondaryButton && (
            <Button
              kind="secondary"
              type="button"
              className="mr-2"
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.label}
            </Button>
          )}
          {primaryButton && (
            <Button kind="primary" type="submit">
              {primaryButton}
            </Button>
          )}
        </Col>
      </Row>
    </form>
  );
}
