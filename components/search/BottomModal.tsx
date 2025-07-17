import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../button";
import { BottomModalProps } from "./types";

const BottomModal = ({
  children,
  showModal,
  setShowModal,
  title,
  onClose,
  onApply,
}: BottomModalProps) => {
  const handleOnModalClose = () => {
    setShowModal(false);
    onClose?.();
  };

  return (
    <Modal
      animationType="fade"
      visible={showModal}
      onRequestClose={handleOnModalClose}
      className="flex flex-col justify-center self-center h-full"
      transparent
    >
      <TouchableOpacity activeOpacity={1} onPressOut={handleOnModalClose}>
        <ScrollView
          directionalLockEnabled={true}
          contentContainerClassName="h-[100%] bg-black/75"
        >
          <TouchableWithoutFeedback className="flex flex-col self-end justify-end">
            <View className="flex flex-col gap-y-[36px] bg-black mt-[auto] mb-[0px] h-[fit-content] w-[100%] px-[15px] py-[20px]">
              <Text className="text-primary text-3xl font-bold">{title}</Text>
              <View className="flex flex-col gap-y-[12px]">{children}</View>
              <Button
                children="Apply"
                type="primary"
                onPress={onApply}
                fullWidth
              />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomModal;
