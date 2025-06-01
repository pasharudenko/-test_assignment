import * as path from "path";
import * as fs from "fs";

const findRootEnv = (searchPath: string) => {
  if (searchPath === "/") {
    throw new Error(".env file does not exist");
  }

  if (fs.readdirSync(searchPath).find((file) => file === ".env")) {
    return searchPath;
  }

  return findRootEnv(path.join(searchPath, "../"));
};

export const projectRootPath = findRootEnv(__dirname);

export const projectEnvPath = path.join(projectRootPath, ".env");

export const lambdasDirPath = path.join(projectRootPath, "packages/lambdas");
export const lambdaLayersDirPath = path.join(
  projectRootPath,
  "packages/lambda-layers"
);
