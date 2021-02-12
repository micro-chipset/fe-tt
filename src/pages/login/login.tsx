import * as React from 'react';
import {Formik} from 'formik'

export const Login = (): JSX.Element => (
    <div>
        <Formik
            initialValues={{login: '', password: ''}}
            onSubmit={(values) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 400);
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                  <form onSubmit={handleSubmit}>
                      <input
                        type='text'
                        name='login'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.login}
                      />

                      <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <button
                        type='submit'
                      >
                          Войти
                      </button>
                  </form>
            )}
        </Formik>
    </div>

)
