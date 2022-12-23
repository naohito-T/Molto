export abstract class BaseConfig {
  protected static readonly RUN_ENV = process.env.NODE_ENV ?? 'development';
}
