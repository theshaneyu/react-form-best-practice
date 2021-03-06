import { Button } from 'antd';
import { Field, Form, Formik } from 'formik';
import React from 'react';

import { yupSchema } from '../../lib/yupSchema';
import { AntdTextField } from './AntdTextField';
import styles from './styles/AntdForm.module.css';

export const AntdForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        onSubmit={(values, actions) => {
          console.log('form values =>', values);

          actions.resetForm();
        }}
        validationSchema={yupSchema}
      >
        {({ values, errors }) => (
          <>
            <Form className={styles.form}>
              <div className={styles.field}>
                <Field
                  name="firstName"
                  component={AntdTextField}
                  placeholder="First Name"
                />
              </div>

              <div className={styles.field}>
                <Field
                  name="lastName"
                  component={AntdTextField}
                  placeholder="Last Name"
                />
              </div>

              <Button
                disabled={
                  !values.firstName ||
                  !values.lastName ||
                  !!errors.firstName ||
                  !!errors.lastName
                }
                type="primary"
                htmlType="submit"
              >
                submit
              </Button>
            </Form>

            <pre className={styles.values}>
              {JSON.stringify(values, null, 2)}
            </pre>
          </>
        )}
      </Formik>
    </>
  );
};
