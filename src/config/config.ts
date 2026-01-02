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
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL,
    redis: {
      url: envVars.REDIS_URL,
      host: envVars.REDIS_HOST,
      port: envVars.REDIS_PORT,
      password: envVars.REDIS_PASSWORD,
    },
  };
}

