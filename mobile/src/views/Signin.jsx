import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Sign_In = 'Sign_Un';
const Sign_Up = 'Sign_Up';
export default function Signin({navigative}) {
  const [signInState, setSignInState] = useState(Sign_In);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{height: '25%', width: '100%'}}>
        <HeaderSignin
          signInState={signInState}
          setSignInState={setSignInState}
        />
      </View>
      <View style={{height: '50%', width: '100%'}}>
        {signInState === Sign_In ? <BodySignin /> : null}
      </View>
    </View>
  );
}

const HeaderSignin = ({signInState, setSignInState}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: '#fcb69f',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, fontWeight: '600', color: '#fff'}}>
            V&T Coffee
          </Text>
          <Text style={{fontSize: 20, fontWeight: '400', color: '#fff'}}>
            A coffee makes you happier
          </Text>
        </View>
        <View style={{height: 50, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setSignInState(Sign_In)}
            disabled={signInState === Sign_In ? true : false}>
            <Text style={{fontSize: 20, color: '#fcb69f'}}>Sign In</Text>
            {signInState === Sign_In ? (
              <View
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: '#fcb69f',
                  position: 'absolute',
                  bottom: 0,
                }}></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setSignInState(Sign_Up)}
            disabled={signInState === Sign_Up ? true : false}>
            <Text style={{fontSize: 20, color: '#fcb69f'}}>Sign Up</Text>
            {signInState === Sign_Up ? (
              <View
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: '#fcb69f',
                  position: 'absolute',
                  bottom: 0,
                }}></View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const BodySignin = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '300',
            textAlign: 'center',
          }}>
          Chào mừng đến với
        </Text>
        <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
          V&T Coffee
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          width: windowWidth - 60,
          marginLeft: 30,
          height: 45,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#bdc3c7',
        }}>
        <Image
          source={require('../../assets/img/vietnam-flag-icon.png')}
          style={{
            width: 20,
            height: 20,
            borderRadius: 50,
            marginLeft: 10,
          }}
          resizeMode="stretch"
        />
        <View
          style={{
            borderEndWidth: 1,
            with: 1,
            height: '50%',
            paddingLeft: 10,
            borderColor: '#bdc3c7',
          }}></View>
        <TextInput
          placeholder="Nhập số điện thoại"
          style={{paddingLeft: 15, fontSize: 15, height: '100%', flex: 1}}
          autoCapitalize={false}
        />
      </View>
      {/* password */}
      <View
        style={{
          borderWidth: 0.5,
          width: windowWidth - 60,
          marginLeft: 30,
          height: 45,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#bdc3c7',
        }}>
        <Image
          source={require('../../assets/img/lock-24.png')}
          style={{
            width: 20,
            height: 20,
            borderRadius: 50,
            marginLeft: 10,
          }}
          resizeMode="stretch"
        />
        <View
          style={{
            borderEndWidth: 1,
            with: 1,
            height: '50%',
            paddingLeft: 10,
            borderColor: '#bdc3c7',
          }}></View>
        <TextInput
          placeholder="Nhập mật khẩu"
          style={{paddingLeft: 15, fontSize: 15, height: '100%', flex: 1}}
          autoCapitalize={false}
        />
        <TouchableOpacity
          style={{
            height: '100%',
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/img/hide-pass.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
