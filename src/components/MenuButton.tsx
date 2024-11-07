import * as React from "react";
import { badgeClasses } from "@mui/material/Badge";
import { IconButtonProps } from "@mui/material/IconButton";

import { Badge, IconButton } from "@mui/material";

export interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}

export default function MenuButton({
  showBadge = false,
  ...props
}: Readonly<MenuButtonProps>) {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!showBadge}
      sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size="small" {...props} />
    </Badge>
  );
}
