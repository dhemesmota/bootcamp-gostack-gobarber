import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Lottie from 'react-lottie';

import logo from '~/assets/logo.svg';
import loader from '~/assets/loader1.json';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? (
            <Lottie options={defaultOptions} height={20} width={100} />
          ) : (
            'Criar conta'
          )}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
