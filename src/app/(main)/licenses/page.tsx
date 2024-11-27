import LicenseCard from "@/components/LicenseCard";
import logger from "@/logger";
import { Stack } from "@mui/material";
import fs from "fs";
import path from "path";
import * as R from "ramda";
import { Fragment } from "react";

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

  logger.info(`Retrieved a total of ${R.length(filteredLicenses)} licenses.`);

  return (
    <Fragment>
      <h1>3rd party open source licenses</h1>

      <Stack spacing={2} direction="column">
        {R.map(
          (license) => (
            <LicenseCard
              key={`${license.name}-${license.version}`}
              name={license.name}
              version={license.version}
              repository={license.repository}
              author={license.author}
              license={license.license}
              licenseText={license.licenseText}
            />
          ),
          filteredLicenses
        )}
      </Stack>
    </Fragment>
  );
}
