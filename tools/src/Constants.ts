import path from 'path';

import * as Directories from './Directories';

export const LOCAL_API_HOST = 'localhost:3000';

export const EXPO_DIR = Directories.getExpoRepositoryRootDir();
export const EXPOTOOLS_DIR = Directories.getExpotoolsDir();
export const EXPO_GO_DIR = Directories.getExpoGoDir();
export const EXPO_GO_IOS_DIR = Directories.getExpoGoIosDir();
export const EXPO_GO_ANDROID_DIR = Directories.getExpoGoAndroidDir();
export const EXPO_GO_LOCAL_MODULES_DIR = path.join(EXPO_GO_DIR, 'modules');
export const EXPO_GO_DEV_SERVER_PORT = 80;
export const TEMPLATES_DIR = Directories.getTemplatesDir();
export const PACKAGES_DIR = Directories.getPackagesDir();
export const VERSIONED_RN_IOS_DIR = Directories.getVersionedReactNativeIosDir();
export const REACT_NATIVE_SUBMODULE_MONOREPO_ROOT = Directories.getReactNativeSubmoduleDir();
export const REACT_NATIVE_SUBMODULE_DIR = path.join(
  REACT_NATIVE_SUBMODULE_MONOREPO_ROOT,
  'packages',
  'react-native'
);

// Vendored dirs
export const ANDROID_VENDORED_DIR = path.join(EXPO_GO_ANDROID_DIR, 'vendored');
export const IOS_VENDORED_DIR = path.join(EXPO_GO_IOS_DIR, 'vendored');
