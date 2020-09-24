import React from "react";
import AppTheme from "./MU_components/AppTheme";
import Paperbase from "./paperbase/Paperbase";

export default function Page() {
  return (
    <AppTheme
      title="Paperbase theme - Material-UI"
      description={`A page that mimics Firebase.
        This item includes theming using the theme provider component.`}
    >
      <Paperbase />
    </AppTheme>
  );
}
