import * as React from 'react';
import {Formik} from 'formik';
import classNames from 'classnames/bind';

import * as styles from './login.scss';

const cn = classNames.bind(styles);

export const Login = (): JSX.Element => (
    <div className={cn('login')}>
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
                  <form
                      onSubmit={handleSubmit}
                      className={cn('form')}
                  >
                      <input
                        type='text'
                        name='login'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.login}
                        className={cn('form__login')}
                      />

                      <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={cn('form__password')}
                      />
                      <button
                        type='submit'
                        className={cn('form__button')}
                      >
                          Войти
                      </button>
                  </form>
            )}
        </Formik>
    </div>

)
