import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView  } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DoctorDetails({navigation}) {


    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>

                
                
            </ScrollView>
        </KeyboardAwareScrollView>  

    )
}

const styles = StyleSheet.create({ 
    bgColor: {
      backgroundColor: "#24DCE2",
      borderColor: "#24DCE2"
    },
  });