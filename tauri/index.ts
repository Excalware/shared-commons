import { exists, FsOptions, writeFile, readTextFile } from '@tauri-apps/api/fs';
export function readJsonFile<T>(filePath: string, options?: FsOptions): Promise<T> {
    return readTextFile(filePath, options).then(JSON.parse);
};

export function writeJsonFile(filePath: string, contents: any, options?: FsOptions): Promise<void> {
    return writeFile(filePath, JSON.stringify(contents), options);
};

// the fs exists method type definition returns void, which is why this is needed!
export function fileExists(filePath: string, options?: FsOptions): Promise<boolean> {
    return exists(filePath, options) as any;
};