import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../Input';
import { TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  control: Control<any>;
  name: string;
}

export function ControllerInput({ control, name, ...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <TextInput
          style={{
            backgroundColor: '#ccc',
            width: '50%',
            height: 40,
            alignSelf: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
}
