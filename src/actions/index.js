export function setApplication(name) {
  console.log("action", name);

  return {
    type: "SET_APPLICATION",
    name: name,
  }
}