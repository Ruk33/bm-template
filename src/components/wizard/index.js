import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "components/button";

export default function Wizard({ steps, currentStep, onNavigate }) {
  const step = steps[currentStep];
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrentStep = index === currentStep;
          const css = classnames(styles.step, {
            [styles.completed]: isCompleted,
            [styles.current]: isCurrentStep,
          });
          const lineCss = classnames(styles.progressLine, {
            [styles.completed]: isCompleted,
            [styles.current]: isCurrentStep,
          });
          return (
            <>
              <button
                key={`button-${index}`}
                type="button"
                onClick={() => onNavigate(index)}
                className={css}
              >
                <div className={styles.progress} />
                <div className={styles.title}>{step.title}</div>
              </button>
              {index !== steps.length - 1 && (
                <div key={`line-${index}`} className={lineCss} />
              )}
            </>
          );
        })}
      </div>
      <div className={styles.content}>
        <step.component />
      </div>
      <Row>
        <Col xl={6}>
          <Button
            kind="secondary"
            onClick={() => onNavigate(Math.max(0, currentStep - 1))}
          >
            Back
          </Button>
        </Col>
        <Col xl={6} className="text-right">
          <Button
            kind="primary"
            onClick={() =>
              onNavigate(Math.min(steps.length - 1, currentStep + 1))
            }
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
}
