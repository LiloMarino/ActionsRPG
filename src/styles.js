import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
    margin: 20,
    alignSelf: "center",
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    color: "white",
    fontSize: 20,
    fontWeight: "250",
    margin: 5,
    alignSelf: "flex-start",
  },
  button: {
    height: 50,
    backgroundColor: "#c62b29",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  subContainer: {
    marginBottom: 20,
  },
  container: {
    margin: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  componentSelection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 15,
  },
  itemComponent: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberSelection: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 5,
    flexWrap: "wrap",
  },
  itemSelection: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#c62b29",
  },
  background: {
    backgroundColor: "#212529",
  },
  input: {
    margin: 5,
    backgroundColor: "white",
    paddingHorizontal: 8,
    height: 50,
  },
  inputDesc: {
    margin: 5,
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
  message: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
  listItem: {
    backgroundColor: "#343a40",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  listItemText: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
