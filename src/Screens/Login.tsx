import React from 'react';
import { View, Text, Button } from 'react-native';
import { ControllerInput } from '../Components/Controller/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string;
  pass: string;
}

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  email: yup.string().email('Email inválido').required('Informe seu email'),
  pass: yup.string().required('Informe sua senha'),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <ControllerInput
        name='name'
        control={control}
        placeholder='Digite seu nome...'
        placeholderTextColor={'#7c7c7c'}
        keyboardType='default'
      />
      {errors.name && (
        <Text style={{ textAlign: 'center', color: 'red' }}>
          {' '}
          *{errors.name?.message}{' '}
        </Text>
      )}
      <ControllerInput
        name='email'
        control={control}
        placeholder='Digite seu email...'
        placeholderTextColor={'#7c7c7c'}
        keyboardType='email-address'
      />
      {errors.email && (
        <Text style={{ textAlign: 'center', color: 'red' }}>
          {' '}
          *{errors.email?.message}{' '}
        </Text>
      )}
      <ControllerInput
        name='pass'
        control={control}
        placeholder='Digite sua senha...'
        placeholderTextColor={'#7c7c7c'}
        secureTextEntry={true}
      />
      {errors.pass && (
        <Text style={{ textAlign: 'center', color: 'red' }}>
          {' '}
          *{errors.pass?.message}{' '}
        </Text>
      )}
      <Button
        title='Acessar'
        color={'blue'}
        onPress={handleSubmit(handleFormSubmit)}
      />
    </View>
  );
}
