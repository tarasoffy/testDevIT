import React from "react";
import { styles } from "./Selected.styles";
import SelectDropdown from "react-native-select-dropdown";
import VectorDown from "../../assets/VectorDown.svg";

const SelectedComponent = ({ data, selectCode }) => {
  return (
    <SelectDropdown
      buttonStyle={styles.selectNumberButtonStyle}
      buttonTextStyle={styles.selectNumberButtonTextStyle}
      dropdownOverlayColor="rgba(0, 0, 0, 0.3)"
      rowTextStyle={styles.selectNumberButtonTextStyle}
      dropdownIconPosition="right"
      renderDropdownIcon={() => <VectorDown />}
      defaultValueByIndex={0}
      data={data}
      onSelect={(selectedItem, index) => {
        selectCode(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

export default SelectedComponent;
