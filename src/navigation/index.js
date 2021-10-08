import React from "react";

import { AuthenticatedUserProvider } from "./AuthenticatedUserProvider";
import RootNavigator from "./RootNavigator";
import { Provider } from "react-redux";
/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
