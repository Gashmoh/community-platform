import * as path from 'path'

export const FUNCTIONS_DIR = path.resolve(__dirname, '../')

// When passing to CLI only relative folder names used
export const EMULATOR_SEED_FOLDER = 'data/seed'
export const EMULATOR_IMPORT_FOLDER = 'data/emulated'
export const EMULATOR_EXPORT_FOLDER = 'data/exported'

// For custom scripts full paths user
export const EMULATOR_SEED_PATH = path.resolve(FUNCTIONS_DIR, EMULATOR_SEED_FOLDER)
export const EMULATOR_IMPORT_PATH = path.resolve(FUNCTIONS_DIR, EMULATOR_IMPORT_FOLDER)
export const EMULATOR_EXPORT_PATH = path.resolve(FUNCTIONS_DIR, EMULATOR_EXPORT_FOLDER)

