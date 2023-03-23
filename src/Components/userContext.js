import React from "react";

const UserContext = React.createContext("React Developer...(this is the default value)");   // default value, as parameter

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext