import dotenv from "dotenv";
import type { InitialOptionsTsJest } from "ts-jest/dist/types";

dotenv.config();

const options: InitialOptionsTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};

export default options;
