import * as React from 'react';
import {
    Formik,
    Field,
    Form,
} from 'formik';
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
            {() => (
                <Form className={cn('form')}>
                    <Field
                        type="text"
                        name="login"
                        className={cn('form__login')}
                    />
                    <Field
                        type="password"
                        name="password"
                        className={cn('form__password')}
                    />
                    <button
                        type="submit"
                        className={cn('form__button')}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
)
