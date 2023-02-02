import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import user from '../../../assets/Personal/user.png';
import {colors, spacing} from '../../constants/theme';
import DatePicker from 'react-native-date-picker';

const windowWidth = Dimensions.get('window').width;
const PersonalInfo = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log(date);
  return (
    <View>
      <View
        style={{
          width: windowWidth,
          height: 200,
          marginTop: spacing.l,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 200,
            borderWidth: 1,
          }}>
          <Image
            source={user}
            style={{width: '100%', height: '100%', borderRadius: 200}}
            resizeMode="contain"
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: windowWidth - 60,
              height: 45,
              marginTop: 20,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <TextInput
              style={{fontSize: 15, marginHorizontal: 10, color: colors.gray}}
              placeholder="Họ và tên"
              placeholderTextColor={colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: windowWidth - 60,
              height: 45,
              marginTop: 20,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={() => setOpen(true)}>
            <Text
              style={{marginHorizontal: 10, fontSize: 15, color: colors.gray}}>
              Ngày sinh 01/01/2022
            </Text>
            <DatePicker
              modal
              open={open}
              date={date}
              onDateChange={setDate}
              mode="date"
              confirmText="Xác nhận"
              cancelText="Huỷ"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: windowWidth - 60,
              height: 45,
              marginTop: 20,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <TextInput
              style={{fontSize: 15, marginHorizontal: 10}}
              placeholder="Email"
              placeholderTextColor={colors.gray}
              keyboardType="email-address"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;
