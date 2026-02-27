import React from "react";

import { Typography } from "neetoui";

const PageNotFound = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="text-center">
      <Typography className="mb-2" style="h1">
        404: Page Not Found
      </Typography>
      <Typography className="text-gray-600" style="body1">
        The page you are looking for does not exist.
      </Typography>
    </div>
  </div>
);

export default PageNotFound;
