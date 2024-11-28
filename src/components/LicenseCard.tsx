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
  const getSubheaderText = (): string => {
    let subheader = R.join(" - ", [license, version]);
    if (author) {
      subheader += ` - ${author}`;
    }
    return subheader;
  };

  const repositoryButton = isValidUrl(repository, name) ? (
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
  ) : null;

  return (
    <Card>
      <CardHeader
        action={repositoryButton}
        title={name}
        subheader={getSubheaderText()}
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
