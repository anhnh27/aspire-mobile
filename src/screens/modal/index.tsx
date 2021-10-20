import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/reducers/modal/actions";
import Colors from "../../theme/colors";

const AppModal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { type, message, visible } = modal;

  const onBackdropPress = () => {
    dispatch(hideModal());
    navigation.goBack();
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.backdrop} onTouchEnd={onBackdropPress}>
        <View style={styles.content}>
          {type === "success" && (
            <Image
              style={styles.icon}
              source={require("../../assets/images/success-icon.png")}
            />
          )}
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    height: "25%",
    marginTop: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
  message: {
    color: Colors.text0,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
  },
});
