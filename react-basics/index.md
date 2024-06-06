constructor() {
super();
this.state = {
name: { firstName: "subham", lastName: "dey" },
company: "byldd",
};
}
render() {
return (
<>
<h1>Hi {this.state.name.firstName}</h1>
<button
onClick={() => {
this.setState(
() => {
return {
name: { firstName: "say", lastName: "b" },
};
},
() => {
console.log("in the callback", this.state);
// this function gonna run once the updating is complete
}
);
// here this is an async task
console.log("outside", this.state);
// here you will get the previous state
}} >
Change Name
</button>
