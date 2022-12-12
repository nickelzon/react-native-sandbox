import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  heading: {
    marginTop: 50,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
  },
  input: {
    marginHorizontal: 10,
    borderRadius: 100 / 2,
    backgroundColor: "#e8e8e8",
    width: 200,
    height: 30,
    padding: 5,
    textAlign: "center",
  },
  featuredImage: {
    backgroundColor: "#f5f5f5",
    borderRadius: 18,
    display: "flex",
    width: 320,
  },
  image: {
    margin: "auto",
    width: 150,
    height: 150,
  },
});
