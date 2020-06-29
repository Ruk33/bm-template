import React from "react";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import Card from "components/card";
import Form from "components/form";
import Input from "components/input";
// import { useParams } from 'react-router-dom';

export default function LandingPage() {
  // const { id, ... } = useParams()
  const fields = [
    {
      name: "username",
      label: "Username",
      component: Input,
    },
    {
      name: "password",
      label: "Password",
      component: Input,
      props: {
        type: "password",
      },
    },
  ];
  const validation = object().shape({
    username: string().trim().required("El usuario es requerido"),
    password: string().trim().required("La contraseña es requerida"),
  });
  const values = {
    username: "franco",
    password: "",
  };
  return (
    <div>
      <Card className="m-4">
        <h2 className="font-weight-bold">Login</h2>
        <Form
          fields={fields}
          validation={validation}
          values={values}
          onSubmit={console.log}
          primaryButton="Login"
          extraButton={{
            label: (
              <Link className="stretched-link" to="/home">
                Create account
              </Link>
            ),
          }}
        />
      </Card>
    </div>
  );
}
