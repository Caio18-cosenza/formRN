import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

export type InputProps = TextInputProps & {
  value?: string;
};

export function Input({ value, ...rest }: InputProps) {
  return <View></View>;
}
