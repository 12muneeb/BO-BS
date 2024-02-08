// import React from 'react';
// import {Image, Text, View} from 'react-native';
// import {colors} from '../utils';

// const ProfileImage = ({
//   size = 140,
//   imageUri,
//   innerAsset = false,
//   name = ' ',
//   style,
// }) => {
//   if (imageUri)
//     return (
//       <View
//         style={{
//           marginTop: -20,
//           // backgroundColor: colors.primary,
//           height: 145,
//           width: 145,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 72.5,
//         }}>
//         <Image
//           source={innerAsset ? imageUri : {uri: imageUri}}
//           style={[
//             {
//               width: size,
//               height: size,
//               resizeMode: 'cover',
//               borderRadius: 70,
//             },
//             style,
//           ]}
//         />
//       </View>
//     );
//   return (
//     <View
//       style={[
//         {
//           width: size,
//           height: size,
//           borderRadius: size / 2,
//           borderWidth: size / 50,
//           borderColor: colors.primary,
//           backgroundColor: colors.secondary,
//           alignItems: 'center',
//           justifyContent: 'center',
//         },
//         style,
//       ]}>
//       <Text
//         numberOfLines={1}
//         style={{
//           color: colors.primary,
//           fontSize: size * 0.75,
//           fontWeight: '800',
//           width: '100%',
//           textAlign: 'center',
//         }}>
//         {name[0].toUpperCase()}
//       </Text>
//     </View>
//   );
// };

// export default ProfileImage;

// my new code
import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../utils';
import {appIcons, appImages} from '../assets';

// const ProfileImage = ({
//   size = 145,
//   imageUri,
//   innerAsset = false,
//   name = ' ',
//   style,
//   borderwidth
// }) => {
//   if (imageUri)
//     return (
//       <View
//         style={{
//           // backgroundColor: colors.primary,
//           height:borderwidth ? 200 : 145,
//           width: borderwidth ? '100%' : 145,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 72.5,
//         }}>
//         <Image
//           source={innerAsset ? imageUri : {uri: imageUri}}
//           style={[
//             {
//               width: borderwidth ? '100%' : size,
//               height: borderwidth ? 200 : size,
//               resizeMode: 'cover',
//               borderRadius: 70,
//             },
//             style,
//           ]}
//         />
//       </View>
//     );
//   return (
//     <View
//       style={[
//         {
//           width: 200,
//           height: size,
//           borderRadius: size / 2,
//           borderWidth: size / 50,
//           borderColor: colors.primary,
//           backgroundColor: colors.secondary,
//           alignItems: 'center',
//           justifyContent: 'center',
//         },
//         style,
//       ]}>
//       <Text
//         numberOfLines={1}
//         style={{
//           color: colors.primary,
//           fontSize: size * 0.75,
//           fontWeight: '800',
//           width: '100%',
//           textAlign: 'center',
//         }}>
//         {name[0].toUpperCase()}
//       </Text>
//     </View>
//   );
// };

// export default ProfileImage;
const ProfileImage = ({
  size = 140,
  imageUri,
  innerAsset = false,
  name = ' ',
  style,
  resizeMode,
  backgroundColor,
  borderColor,
  borderWWidth,
  height,
  backheight,
  backwidth,
  borderRadiii,
  borderStyle,
  imgwidth,
  imgheight,
  customStyle,
  viewBorder,
  imgtintcolor,
  upload,
}) => {
  if (imageUri)
    return (
      <View
        style={[
          {
            marginTop: -20,
            backgroundColor: backgroundColor,
            height: backheight ? 200 : 130,
            // borderStyle: borderStyle && 'dashed' ,
            width: backwidth ? 320 : 130,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: viewBorder ? 50 : 72.5,
            borderColor: borderColor,
            borderWidth: borderWWidth,
          },
          customStyle,
        ]}>
        <Image
          source={innerAsset ? imageUri : {uri: imageUri}}
          style={[
            {
              tintColor: imgtintcolor,
              width: backheight ? 320 : imgwidth ? imgwidth : 130,
              height: backwidth ? 200 : imgheight ? imgwidth : 130,
              resizeMode: 'cover',
              borderRadius: borderRadiii ? 0 : 72.5,
              borderWidth: borderWWidth ? 4 : null,
              borderColor: borderWWidth ? colors.secondary : null,
            },
            style,
          ]}
        />
      </View>
    );
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: borderRadiii ? 10 : size / 2,
          borderWidth: borderRadiii ? 1.5 : size / 50,
          borderColor: borderRadiii ? colors.white : colors.primary,
          backgroundColor: colors.secondary,
          alignItems: 'center',
          justifyContent: 'center',
          borderStyle: 'dashed',
        },
        style,
      ]}>
      {/* <Text
        numberOfLines={1}
        style={{
          color: colors.primary,
          fontSize: size * 0.75,
          fontWeight: '800',
          width: '100%',
          textAlign: 'center',
        }}>
        {name[0].toUpperCase()}
      </Text> */}
      {upload && (
        <>
          <Image
            source={appIcons.upload}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
          <Text
            numberOfLines={1}
            style={{
              color: colors.lightgray,
              // fontSize: size * 0.75,
              width: '100%',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Upload Image
          </Text>
        </>
      )}
    </View>
  );
};

export default ProfileImage;
