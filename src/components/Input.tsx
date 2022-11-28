import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  icon: string;
  title?: string;
  value?: string;
};

export const Input: React.FC<Props> = ({ icon, title, value }) => {
  return (
    <View row centerV>
      <View marginR-10>
        <FontAwesome name={icon} size={20} />
      </View>
      <Text dark10>{value ? value : title}</Text>
    </View>
  );
};
