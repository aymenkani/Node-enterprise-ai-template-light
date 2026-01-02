import { z } from 'zod';

const envVarsSchema = z
  .object({
    NODE_ENV: z.enum(['production', 'development', 'test']),
    PORT: z.coerce.number().default(5002),
    DATABASE_URL: z.string().min(1, 'Postgres database URL is required'),
    REDIS_URL: z.string().optional(),
    REDIS_HOST: z.string().min(1, 'Redis host is required'),
    REDIS_PORT: z.coerce.number().min(1, 'Redis port is required'),
    REDIS_PASSWORD: z.string().optional(),
    JWT_SECRET: z.string().min(1, 'JWT secret is required'),
    JWT_ACCESS_EXPIRATION_MINUTES: z.coerce.number().default(30),
    JWT_REFRESH_EXPIRATION_DAYS: z.coerce.number().default(30),
    JWT_RESET_PASSWORD_SECRET: z.string().min(1, 'JWT reset password secret is required'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: z.coerce.number().default(10),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: z.coerce.number().default(10),
    GOOGLE_CLIENT_ID: z.string().default(''),
    GOOGLE_CLIENT_SECRET: z.string().default(''),
  })
  .loose();

export type Config = {
  env: 'production' | 'development' | 'test';
  port: number;
  databaseUrl: string;
  redis: {
    url?: string;
    host: string;
    port: number;
    password?: string;
  };
  jwt: {
    secret: string;
    accessExpirationMinutes: number;
    refreshExpirationDays: number;
    resetPasswordSecret: string;
    resetPasswordExpirationMinutes: number;
    verifyEmailExpirationMinutes: number;
  };
  google: {
    clientId: string;
    clientSecret: string;
  };
};

export function getConfig(processEnv: NodeJS.ProcessEnv): Config {
  let envVars;
  try {
    envVars = envVarsSchema.parse(processEnv);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    throw new Error(`Config validation error: ${error}`);
  }

  return {
    env: envVars.NODE_ENV,
    port: envVars.NODE_ENV === 'test' ? 5002 : envVars.PORT,
    databaseUrl: envVars.DATABASE_URL,
    redis: {
      url: envVars.REDIS_URL,
      host: envVars.REDIS_HOST,
      port: envVars.REDIS_PORT,
      password: envVars.REDIS_PASSWORD,
    },
    jwt: {
      secret: envVars.JWT_SECRET,
      accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
      refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
      resetPasswordSecret: envVars.JWT_RESET_PASSWORD_SECRET,
      resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
      verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
    },
    google: {
      clientId: envVars.GOOGLE_CLIENT_ID,
      clientSecret: envVars.GOOGLE_CLIENT_SECRET,
    },
  };
}

