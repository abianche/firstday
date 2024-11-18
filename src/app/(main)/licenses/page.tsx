import LinkIcon from "@mui/icons-material/Link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import fs from "fs";
import path from "path";
import * as R from "ramda";

interface IPackageLicenseMeta {
  author: string;
  license: string;
  licenseText: string;
  name: string;
  noticeText?: string;
  repository: string;
  source: string;
  version: string;
}

export default async function LicensesPage() {
  // Read the oss-licenses.json file from the .next folder
  const filePath = path.join(process.cwd(), ".next", "oss-licenses.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const licenses: IPackageLicenseMeta[] = JSON.parse(fileContents);
  const filteredLicenses = R.reject(
    (license) => R.isNil(license.licenseText),
    licenses
  );

  console.info(`Retrieved a total of ${R.length(filteredLicenses)} licenses.`);

  function isValidUrl(input: string, name: string): boolean {
    try {
      new URL(input); // Built-in URL class
      return true;
    } catch {
      console.info(`Cannot parse "${input}" into URL for package "${name}".`);
      return false;
    }
  }

  return (
    <Box width="100%">
      <h1>3rd party open source licenses</h1>

      <Stack spacing={2} direction="column">
        {R.map(
          (license) => (
            <Card key={`${license.name}-${license.version}`}>
              <CardHeader
                action={
                  isValidUrl(license.repository, license.name) ? (
                    <Button
                      startIcon={<LinkIcon />}
                      size="small"
                      href={license.repository}
                      target="_blank"
                      rel="noopener"
                      aria-label="Navigate to repository"
                    >
                      Repository
                    </Button>
                  ) : null
                }
                title={license.name}
                subheader={`${license.version}${
                  license.author ? ` - ${license.author}` : ""
                }`}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  component="pre"
                  sx={{
                    overflowX: "auto",
                  }}
                >
                  {license.licenseText}
                </Typography>
              </CardContent>
            </Card>
          ),
          filteredLicenses
        )}
      </Stack>
    </Box>
  );
}
