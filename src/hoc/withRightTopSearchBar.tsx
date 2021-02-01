import React, {
  ComponentType,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from "react";
import {
  Dimensions,
  TextInput,
  View,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import FishingTripIcon from "../components/FishingTripIcon/FishingTripIcon";
import SearchButton from "../components/SearchButton/SearchButton";
import { BackButton } from "../navigation/DefaultHeaderProps";
import { MAIN_COLOR, MYSTIC } from "../utils/colors";
import { scale } from "../utils/scales";

interface Props {
  searchPlaceholder?: string;
}

const withRightTopSearchBar = (WrappedComponent: ComponentType<any>) => (props: Props) => {
  const [userToSearch, setUserToSearch] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);

  const searchInputRef = useRef<TextInput>() as MutableRefObject<TextInput>;

  useEffect(() => {
    if (!searching) {
      Actions.refresh({
        left: renderBackButton(),
        right: renderSearchButton()
      });
    } else if (searching || userToSearch) {
      Actions.refresh({
        right: renderHeaderSearchInput(),
        left: renderClearSearchButton()
      });

      setTimeout(() => searchInputRef.current.focus(), 10);
    }
  }, [searching, userToSearch]);

  const renderBackButton = () => <TouchableOpacity onPress={() => {
    setSearching(false);
    Actions.pop();
  }}
  >
    <BackButton />
  </TouchableOpacity>;

  const renderSearchButton = () => {
    const handleSearch = () => setSearching(true);

    return <View style={{ paddingRight: scale(20) }}>
      <SearchButton onPress={handleSearch} />
    </View>;
  };

  const renderHeaderSearchInput = () => (
    <View style={styles.inputWrapper}>
      <TextInput
        ref={searchInputRef}
        style={styles.input}
        placeholder={props.searchPlaceholder}
        returnKeyType="search"
        onChangeText={setUserToSearch}
      />
    </View>
  );

  const renderClearSearchButton = () => <TouchableOpacity
    style={styles.clearButtonWrapper}
    onPress={() => {
      setSearching(false);
      setUserToSearch("");
    }}
  >
    <FishingTripIcon name="icon-voltar" size={scale(18)} color={MAIN_COLOR} />
  </TouchableOpacity>;

  return <WrappedComponent
    {...props}
    userToSearch={userToSearch}
    searching={searching}
  />;
};

const { width: windowWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  clearButtonWrapper: {
    height: 60,
    width: 0.15 * windowWidth,
    paddingLeft: scale(20),
    justifyContent: "center",
    alignItems: "flex-start"
  },
  inputWrapper: {
    height: 60,
    width: 0.85 * windowWidth - scale(20),
    marginRight: scale(20),
    backgroundColor: "white",
    alignContent: "center"
  },
  input: {
    height: "100%",
    borderBottomColor: MYSTIC,
    borderBottomWidth: 1
  }
});

export default withRightTopSearchBar;
