import React from "react";
import {
  StyleProp, Text, TextStyle, View
} from "react-native";
import regexifyString from "regexify-string";
import { requestAPI } from "../../config/requestAPI";
import { FormErrors } from "../../hoc/withFormErrorsHandler";
import { RED } from "../../utils/colors";
import MentionInput from "../CompleteMentions/components/mentions-input";
import Tag from "../CompleteMentions/components/tag";
import { Mention } from "../CompleteMentions/utils/createMentionsHandler";
import UserSuggestion from "../UserSuggestion/UserSuggestion";
import styles from "./styles";

interface Props {
  onChangeText?: (text: string) => void;
  onChangeRawText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  errors?: FormErrors[];
  name?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
}

export default function MentionTextInput(props: Props): JSX.Element {
  const extractString = (mention) => {
    let [id, entity] = mention.id.split(":");
    id = id.split(";entity").join("");
    return `@[${mention.name.replace("@", "")}];id:${id};entity:${entity}`;
  };

  const renderTagText = (mention: Mention) => (
    <Text
      key={`tag_${mention.uniqueId}`}
      style={{ fontWeight: "bold", color: "#0095DF" }}
    >
      {mention.name}
    </Text>
  );

  let [suggestedMentions, setSuggestedMentions] = React.useState([]);
  const renderUserSuggestions = ({ keyword, tracking, commit }) => {
    if (!tracking || keyword === "" || !suggestedMentions) return null;

    return suggestedMentions.map((mention: any) => (
      <UserSuggestion
        key={`mention_suggestion_${mention.id}`}
        name={mention.name}
        avatar={mention.avatar}
        onPress={() => {
          commit({ name: mention.name, id: `${mention.id}:${mention.entity}` });
        }}
      />
    ));
  };

  const onKeywordChange = (keyword: string) => {
    setSuggestedMentions([]);
    requestAPI({
      params: `/mentions/nickname/${encodeURIComponent(keyword)}`,
      method: "GET"
    }).then(({ success, suggestions }) => {
      if (success) {
        setSuggestedMentions(suggestions);
      } else { throw "error"; }
    }).catch((error) => {
      console.log("getUsersByUserName error:", error);
    });
  };

  const processRawText = (rawText: string) => {
    const result = regexifyString({
      pattern: /(@\[(?<name>([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){1,28}(?:[A-Za-z0-9_]))?)*)\];id:([A-Za-z0-9;:]*))/gim,
      decorator: (match) => {
        let processedMatch = match.replace("@[", "@");
        return processedMatch.split("]")[0];
      },
      input: rawText
    });

    return result.join("");
  };

  const field =
    props.errors !== undefined && props.errors.length > 0
      ? props.errors.filter((e: FormErrors) => e.path === props.name)
      : null;
  return (
    <View style={props.containerStyle}>
      <MentionInput
        value={props.value || ""}
        onExtractedStringChange={(rawText: string) => {
          props.onChangeRawText(rawText);
          setTimeout(() => props.onChangeText(processRawText(rawText)), 10);
        }}
        style={props.style ? props.style : styles.mentionInput}
        placeholder={props.placeholder}
      >
        <Tag
          tag="@"
          onKeywordChange={onKeywordChange}
          renderSuggestions={renderUserSuggestions}
          renderText={renderTagText}
          formatText={(text) => `@${text}`}
          extractString={extractString}
          detectMentionsRegexp={/(?<data>@\[(?<name>([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){1,28}(?:[A-Za-z0-9_]))?)*)\];id:(?<id>[A-Za-z0-9;:]*))/}
        />
      </MentionInput>
      {field && field[0] ? <Text style={{ color: RED }}>{field[0].errors}</Text> : <></>}

    </View>
  );
}
