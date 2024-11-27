import LinkIcon from "@mui/icons-material/Link";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import * as R from "ramda";

interface LicenseProps {
  name: string;
  version: string;
  repository: string;
  author: string;
  license: string;
  licenseText: string;
}

function isValidUrl(input: string, name: string): boolean {
  try {
    new URL(input); // Built-in URL class
    return true;
  } catch {
    console.info(`Cannot parse "${input}" into URL for package "${name}".`);
    return false;
  }
}

export default function LicenseCard({
  name,
  version,
  repository,
  author,
  license,
  licenseText,
}: Readonly<LicenseProps>) {
  const getSubheader = (): string => {
    let subheader = R.join(" - ", [license, version]);
    if (author) {
      subheader += ` - ${author}`;
    }
    return subheader;
  };

  return (
    <Card>
      <CardHeader
        action={
          isValidUrl(repository, name) ? (
            <Button
              startIcon={<LinkIcon />}
              size="small"
              href={repository}
              target="_blank"
              rel="noopener"
              aria-label="Navigate to repository"
            >
              Repository
            </Button>
          ) : null
        }
        title={name}
        subheader={getSubheader()}
      />
      <CardContent>
        <Typography
          variant="body1"
          component="pre"
          sx={{
            overflowX: "auto",
          }}
        >
          {licenseText}
        </Typography>
      </CardContent>
    </Card>
  );
}
