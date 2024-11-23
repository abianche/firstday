import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { Breadcrumbs, Link, styled, Typography } from "@mui/material";
import { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function NavbarBreadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Link component={NextLink} href="/" underline="none">
        <Typography color="white">First Day</Typography>
      </Link>
      {pathnames.map((value, index) => {
        const href = "/" + pathnames.slice(0, index + 1).join("/");

        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={href} sx={{ fontWeight: 600 }} color="white">
            {capitalize(value)}
          </Typography>
        ) : (
          <Link key={href} component={NextLink} href={href} underline="none">
            <Typography sx={{ fontWeight: 600 }} color="white">
              {capitalize(value)}
            </Typography>
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
}
