import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 30,
    fontFamily: "Segoe UI",
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "center",
  },
  label: {
    color: "white",
    fontSize: 16,
    fontFamily: "Segoe UI",
    fontWeight: "bold",
  },
  section: {
    color: "white",
    fontSize: 20,
    fontFamily: "Segoe UI",
    fontWeight: "250",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  button: {
    height: 50,
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  subContainer: {
    marginBottom: 10,
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
    backgroundColor: "#212529",
  },
  background: {
    backgroundColor: "#c62b29",
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
});

export default styles;
