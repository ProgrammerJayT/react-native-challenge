import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },

  nameText: {
    fontSize: 30,
    alignSelf: "center",
  },

  additionalInfo: {
    fontSize: 15,
    alignSelf: "center",
  },

  seePostsButtonContainer: {
    backgroundColor: "orange",
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },

  seePostsButton: {
    textAlign: "center",
  },

  seePostsButtonText: {
    color: "white",
    textAlign: "center",
    margin: 5,
    fontSize: 20,
  },
});
