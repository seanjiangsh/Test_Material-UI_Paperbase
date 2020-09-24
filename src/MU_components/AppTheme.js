import React from "react";
import PropTypes from "prop-types";

export default function AppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <meta name="robots" content="noindex,nofollow" />
      {children}
    </React.Fragment>
  );
}

AppTheme.propTypes = {
  children: PropTypes.element.isRequired,
};
