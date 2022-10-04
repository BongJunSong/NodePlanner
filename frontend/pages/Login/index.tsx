import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, Form, Header, Input, Label, LinkContainer, Error } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validator';

interface loginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<loginForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [onLoginCheck, setOnLoginCheck] = useState(false);

  const submitForm: SubmitHandler<loginForm> = (data) => {
    setOnLoginCheck(true);
    reset({
      email: '',
      password: '',
    });
  };

  if (onLoginCheck) {
    return <Redirect to="/main" />;
  }

  return (
    <div id="container">
      <Header>Node Planner</Header>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Label id="email-label">
          <span>ID</span>
          <div>
            <Input type="email" id="email" {...register('email')} />
            <Error>{errors.email?.message}</Error>
          </div>
        </Label>
        <Label id="password-label">
          <span>PASSWORD</span>
          <div>
            <Input type="password" id="password" {...register('password')} />
            <Error>{errors.password?.message}</Error>
          </div>
        </Label>
        <Button type="submit" disabled={isSubmitting}>
          LOGIN
        </Button>
        {/* <Error>{error && 'アカウントまたはパスワードを確認してください。'}</Error> */}
      </Form>
      {/* <LinkContainer>
        まだ、アカウントがない場合は会員登録をしてください。 &nbsp;
        <a href="/signup">会員登録</a>
      </LinkContainer> */}
    </div>
  );
};

export default Login;
