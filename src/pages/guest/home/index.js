import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { object, string } from "yup";
import Form from "components/form";
import Input from "components/input";
import Card from "components/card";
import Alert from "components/alert";
import Button from "components/button";
import Avatar from "components/avatar";
import Media from "components/media";
import NotificationBox from "components/notification-box";
import VerticalMedia from "components/vertical-media";
import Wizard from "components/wizard";
import RadioButton from "components/radio-button";
import Switch from "components/switch";
import CheckBox from "components/check-box";
import Select from "components/select";
import Table from "components/table";
import AutoComplete from "components/auto-complete";

export default function HomePage() {
  const [step, setStep] = useState(0);
  const [switchExample, setSwitchExample] = useState(false);
  const [radioExample, setRadioExample] = useState("foo");
  const [checkBoxExample, setCheckBoxExample] = useState(["foo"]);
  const [selectExample, setSelectExample] = useState({
    label: "Foo",
    value: "foo",
  });
  const fields = [
    {
      label: "Username",
      name: "username",
      component: Input,
    },
    {
      label: "Password",
      name: "password",
      component: <Input type="password" />,
    },
  ];
  const validation = object().shape({
    name: string()
      .required("Please input a name")
      .length(42, "The name has to have at least 42 characters"),
  });
  return (
    <Container>
      <Row>
        <Col xl={6}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Form example</h4>
            <Alert kind="success" title="success" className="my-4">
              New user created successfully!
            </Alert>
            <Form
              fields={fields}
              validation={validation}
              primaryButton="Login"
              secondaryButton={{
                label: "Cancel",
                onClick: () => alert("You clicked the secondary button"),
              }}
              extraButton={{
                label: "Need help?",
                onClick: () => alert("You clicked the extra button"),
              }}
            />
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Alerts example</h4>
            <Alert kind="success" title="success" className="my-4">
              Client created
            </Alert>
            <Alert kind="info" title="info" className="my-4">
              Client information
            </Alert>
            <Alert kind="warning" title="warning" className="my-4">
              Client created with warnings
            </Alert>
            <Alert kind="error" title="error" className="my-4">
              Oops... something went wrong
            </Alert>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Button types</h4>
            <div className="my-3">
              <Button kind="primary" type="button">
                Primary button
              </Button>
            </div>
            <div className="my-3">
              <Button loading kind="primary" type="button">
                Primary button
              </Button>
            </div>
            <div className="my-3">
              <Button kind="secondary" type="button">
                Secondary button
              </Button>
            </div>
            <div className="my-3">
              <Button kind="link" type="button">
                Link button
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Avatar</h4>
            <Avatar
              size="big"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <Avatar
              size="medium"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <Avatar
              size="small"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Media</h4>
            <Media
              className="my-3"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            >
              <h5 className="m-0 font-weight-bold">My title</h5>
              <p>Lorem ipsum dolor sit amet...</p>
            </Media>
            <Media
              border
              className="my-3"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            >
              <h5 className="m-0 font-weight-bold">My title</h5>
              <p>Lorem ipsum dolor sit amet...</p>
            </Media>
            <Media
              shadow
              className="my-3"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            >
              <h5 className="m-0 font-weight-bold">My title</h5>
              <p>Lorem ipsum dolor sit amet...</p>
            </Media>
          </Card>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">VerticalMedia</h4>
            <VerticalMedia
              className="my-3"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            >
              <h5 className="m-0 font-weight-bold">My title</h5>
              <p>Lorem ipsum dolor sit amet...</p>
            </VerticalMedia>
            <VerticalMedia
              border
              className="my-3"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            >
              <h5 className="m-0 font-weight-bold">My title</h5>
              <p>Lorem ipsum dolor sit amet...</p>
            </VerticalMedia>
            <VerticalMedia
              shadow
              className="my-3"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            >
              <h5 className="m-0 font-weight-bold">My title</h5>
              <p>Lorem ipsum dolor sit amet...</p>
            </VerticalMedia>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Notification box</h4>
            <NotificationBox
              className="my-3"
              kind="success"
              primaryButton={{ label: "Close window" }}
            >
              This is a successful message, excellent!
            </NotificationBox>
            <NotificationBox
              className="my-3"
              kind="error"
              primaryButton={{ label: "Close window" }}
              extraButton={{ label: "Need help?" }}
            >
              Oops... something went wrong
            </NotificationBox>
            <NotificationBox
              className="my-3"
              kind="warning"
              primaryButton={{ label: "Close window" }}
              secondaryButton={{ label: "Stay" }}
            >
              Warning, you may lose some information if you leave this page
            </NotificationBox>
            <NotificationBox
              className="my-3"
              kind="info"
              primaryButton={{ label: "Close window" }}
            >
              This is just an information box
            </NotificationBox>
          </Card>
        </Col>
        <Col xl={12}>
          <Card className="mt-4">
            <h4 className="font-weight-bold mb-4">Wizard</h4>
            <Wizard
              onNavigate={(step) => setStep(step)}
              steps={[
                {
                  title: "Select your name",
                  component: () => <div>Step content</div>,
                },
                {
                  title: "Validate your identity",
                  component: () => (
                    <div>
                      <h3 className="mb-0 font-weight-bold">
                        Validate your identity
                      </h3>
                      <p className="lead">
                        Please verify your identity by providing an email
                      </p>
                      <Form
                        fields={[
                          { label: "Email", name: "email", component: Input },
                        ]}
                      />
                    </div>
                  ),
                },
                {
                  title: "Finish",
                  component: () => <div>Step content</div>,
                },
              ]}
              currentStep={step}
            />
          </Card>
        </Col>
        <Col xl={12}>
          <Card className="my-4">
            <h4 className="font-weight-bold mb-4">Form inputs</h4>
            <Row>
              <Col xl={6}>
                <RadioButton
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Baz", value: "baz" },
                  ]}
                  value={radioExample}
                  onChange={setRadioExample}
                />
              </Col>
              <Col xl={6}>
                <CheckBox
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Baz", value: "baz" },
                  ]}
                  value={checkBoxExample}
                  onChange={setCheckBoxExample}
                />
              </Col>
            </Row>
            <Switch onChange={setSwitchExample} value={switchExample} />
            <Select
              className="my-4"
              value={selectExample}
              onChange={setSelectExample}
              options={[
                { value: "foo", label: "Foo" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
              ]}
            />
            <AutoComplete
              value={selectExample}
              onChange={setSelectExample}
              onSearch={() => {}}
              options={[
                { value: "foo", label: "Foo" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
                { value: "bar", label: "Bar" },
              ]}
            />
            <Table
              className="mt-4"
              columns={[
                {
                  title: "Name",
                  component: ({ row }) => <span>{row.name}</span>,
                },
                {
                  title: "Last name",
                  component: ({ row }) => <span>{row.lastName}</span>,
                },
              ]}
              rows={[
                {
                  name: "franco",
                  lastName: "montenegro",
                },
                {
                  name: "lean",
                  lastName: "Vandenbosch",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
