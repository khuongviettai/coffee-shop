import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import vietnamFlag from '../../assets/icon/vietnam-flag.png';
import lock from '../../assets/icon/lock.png';
import user from '../../assets/icon/user.png';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
export default Login = ({navigation}) => {
  const [loginState, setLoginState] = useState(LOGIN);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#F2F2F2'}}>
      <View style={{height: '30%', width: '100%'}}>
        <HeaderLogin loginState={loginState} setLoginState={setLoginState} />
      </View>
      <View style={{height: '60%', width: '100%'}}>
        {loginState === LOGIN ? <BodyLogin /> : null}
        {loginState === REGISTER ? <BodyRegister /> : null}
      </View>
    </View>
  );
};

const HeaderLogin = ({loginState, setLoginState}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            // flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 40, fontWeight: '500'}}>V&T Coffee</Text>
          <View
            style={{
              height: 50,
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setLoginState(LOGIN);
              }}
              disabled={loginState === LOGIN ? true : false}>
              <Text style={{fontSize: 20}}>Đăng nhập</Text>
              {loginState === LOGIN ? (
                <View
                  style={{
                    height: 3,
                    width: '75%',
                    backgroundColor: '#FA4A0C',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setLoginState(REGISTER);
              }}
              disabled={loginState === REGISTER ? true : false}>
              <Text style={{fontSize: 20}}>Đăng ký</Text>
              {loginState === REGISTER ? (
                <View
                  style={{
                    height: 3,
                    width: '75%',
                    backgroundColor: '#FA4A0C',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const BodyLogin = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#979797',
          marginTop: -100,
        }}>
        <Image source={vietnamFlag} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          borderColor: '#979797',
        }}>
        <Image source={lock} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Mật khẩu"
          keyboardType="phone-pad"
          autoCapitalize={false}
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          marginTop: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{position: 'absolute', right: 0}}>
          <Text style={{color: '#FA4A0C'}}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          width: windowWidth - 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FA4A0C',
          borderRadius: 30,
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={{color: '#F6F6F9', fontSize: 17}}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const BodyRegister = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#979797',
        }}>
        <Image source={user} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Họ và tên"
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#979797',
          marginTop: 20,
        }}>
        <Image source={vietnamFlag} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          borderColor: '#979797',
        }}>
        <Image source={lock} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Mật khẩu"
          keyboardType="phone-pad"
          autoCapitalize={false}
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          borderColor: '#979797',
        }}>
        <Image source={lock} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Mật khẩu"
          keyboardType="phone-pad"
          autoCapitalize={false}
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          marginTop: 30,
          flexDirection: 'row',
        }}></View>
      <TouchableOpacity
        style={{
          height: 60,
          width: windowWidth - 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FA4A0C',
          borderRadius: 30,
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={{color: '#F6F6F9', fontSize: 17}}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};
