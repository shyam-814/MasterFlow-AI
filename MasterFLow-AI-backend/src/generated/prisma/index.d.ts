
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Tools
 * 
 */
export type Tools = $Result.DefaultSelection<Prisma.$ToolsPayload>
/**
 * Model UserTools
 * 
 */
export type UserTools = $Result.DefaultSelection<Prisma.$UserToolsPayload>
/**
 * Model WorkflowRuns
 * 
 */
export type WorkflowRuns = $Result.DefaultSelection<Prisma.$WorkflowRunsPayload>
/**
 * Model StepRuns
 * 
 */
export type StepRuns = $Result.DefaultSelection<Prisma.$StepRunsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  COMPLETE: 'COMPLETE',
  RUNNING: 'RUNNING',
  IDLE: 'IDLE',
  ERROR: 'ERROR'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tools`: Exposes CRUD operations for the **Tools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tools.findMany()
    * ```
    */
  get tools(): Prisma.ToolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTools`: Exposes CRUD operations for the **UserTools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTools
    * const userTools = await prisma.userTools.findMany()
    * ```
    */
  get userTools(): Prisma.UserToolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowRuns`: Exposes CRUD operations for the **WorkflowRuns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowRuns
    * const workflowRuns = await prisma.workflowRuns.findMany()
    * ```
    */
  get workflowRuns(): Prisma.WorkflowRunsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepRuns`: Exposes CRUD operations for the **StepRuns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepRuns
    * const stepRuns = await prisma.stepRuns.findMany()
    * ```
    */
  get stepRuns(): Prisma.StepRunsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Workflow: 'Workflow',
    Step: 'Step',
    Tools: 'Tools',
    UserTools: 'UserTools',
    WorkflowRuns: 'WorkflowRuns',
    StepRuns: 'StepRuns'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workflow" | "step" | "tools" | "userTools" | "workflowRuns" | "stepRuns"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Tools: {
        payload: Prisma.$ToolsPayload<ExtArgs>
        fields: Prisma.ToolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          findFirst: {
            args: Prisma.ToolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          findMany: {
            args: Prisma.ToolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>[]
          }
          create: {
            args: Prisma.ToolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          createMany: {
            args: Prisma.ToolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>[]
          }
          delete: {
            args: Prisma.ToolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          update: {
            args: Prisma.ToolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          deleteMany: {
            args: Prisma.ToolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>[]
          }
          upsert: {
            args: Prisma.ToolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          aggregate: {
            args: Prisma.ToolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTools>
          }
          groupBy: {
            args: Prisma.ToolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolsCountArgs<ExtArgs>
            result: $Utils.Optional<ToolsCountAggregateOutputType> | number
          }
        }
      }
      UserTools: {
        payload: Prisma.$UserToolsPayload<ExtArgs>
        fields: Prisma.UserToolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserToolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserToolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>
          }
          findFirst: {
            args: Prisma.UserToolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserToolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>
          }
          findMany: {
            args: Prisma.UserToolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>[]
          }
          create: {
            args: Prisma.UserToolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>
          }
          createMany: {
            args: Prisma.UserToolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserToolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>[]
          }
          delete: {
            args: Prisma.UserToolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>
          }
          update: {
            args: Prisma.UserToolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>
          }
          deleteMany: {
            args: Prisma.UserToolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserToolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserToolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>[]
          }
          upsert: {
            args: Prisma.UserToolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToolsPayload>
          }
          aggregate: {
            args: Prisma.UserToolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTools>
          }
          groupBy: {
            args: Prisma.UserToolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserToolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserToolsCountArgs<ExtArgs>
            result: $Utils.Optional<UserToolsCountAggregateOutputType> | number
          }
        }
      }
      WorkflowRuns: {
        payload: Prisma.$WorkflowRunsPayload<ExtArgs>
        fields: Prisma.WorkflowRunsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowRunsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowRunsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>
          }
          findFirst: {
            args: Prisma.WorkflowRunsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowRunsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>
          }
          findMany: {
            args: Prisma.WorkflowRunsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>[]
          }
          create: {
            args: Prisma.WorkflowRunsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>
          }
          createMany: {
            args: Prisma.WorkflowRunsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowRunsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>[]
          }
          delete: {
            args: Prisma.WorkflowRunsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>
          }
          update: {
            args: Prisma.WorkflowRunsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowRunsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowRunsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowRunsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowRunsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunsPayload>
          }
          aggregate: {
            args: Prisma.WorkflowRunsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowRuns>
          }
          groupBy: {
            args: Prisma.WorkflowRunsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowRunsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunsCountAggregateOutputType> | number
          }
        }
      }
      StepRuns: {
        payload: Prisma.$StepRunsPayload<ExtArgs>
        fields: Prisma.StepRunsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepRunsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepRunsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>
          }
          findFirst: {
            args: Prisma.StepRunsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepRunsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>
          }
          findMany: {
            args: Prisma.StepRunsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>[]
          }
          create: {
            args: Prisma.StepRunsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>
          }
          createMany: {
            args: Prisma.StepRunsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepRunsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>[]
          }
          delete: {
            args: Prisma.StepRunsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>
          }
          update: {
            args: Prisma.StepRunsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>
          }
          deleteMany: {
            args: Prisma.StepRunsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepRunsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepRunsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>[]
          }
          upsert: {
            args: Prisma.StepRunsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRunsPayload>
          }
          aggregate: {
            args: Prisma.StepRunsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepRuns>
          }
          groupBy: {
            args: Prisma.StepRunsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepRunsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepRunsCountArgs<ExtArgs>
            result: $Utils.Optional<StepRunsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workflow?: WorkflowOmit
    step?: StepOmit
    tools?: ToolsOmit
    userTools?: UserToolsOmit
    workflowRuns?: WorkflowRunsOmit
    stepRuns?: StepRunsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userTools: number
    workflows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTools?: boolean | UserCountOutputTypeCountUserToolsArgs
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToolsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    Steps: number
    workflowRuns: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Steps?: boolean | WorkflowCountOutputTypeCountStepsArgs
    workflowRuns?: boolean | WorkflowCountOutputTypeCountWorkflowRunsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountWorkflowRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunsWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    children: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | StepCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }


  /**
   * Count Type ToolsCountOutputType
   */

  export type ToolsCountOutputType = {
    steps: number
    users: number
  }

  export type ToolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | ToolsCountOutputTypeCountStepsArgs
    users?: boolean | ToolsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolsCountOutputType
     */
    select?: ToolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToolsWhereInput
  }


  /**
   * Count Type UserToolsCountOutputType
   */

  export type UserToolsCountOutputType = {
    tools: number
  }

  export type UserToolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | UserToolsCountOutputTypeCountToolsArgs
  }

  // Custom InputTypes
  /**
   * UserToolsCountOutputType without action
   */
  export type UserToolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToolsCountOutputType
     */
    select?: UserToolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserToolsCountOutputType without action
   */
  export type UserToolsCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolsWhereInput
  }


  /**
   * Count Type WorkflowRunsCountOutputType
   */

  export type WorkflowRunsCountOutputType = {
    runningSteps: number
  }

  export type WorkflowRunsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runningSteps?: boolean | WorkflowRunsCountOutputTypeCountRunningStepsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowRunsCountOutputType without action
   */
  export type WorkflowRunsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunsCountOutputType
     */
    select?: WorkflowRunsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowRunsCountOutputType without action
   */
  export type WorkflowRunsCountOutputTypeCountRunningStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepRunsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userTools?: boolean | User$userToolsArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTools?: boolean | User$userToolsArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userTools: Prisma.$UserToolsPayload<ExtArgs>[]
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTools<T extends User$userToolsArgs<ExtArgs> = {}>(args?: Subset<T, User$userToolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userTools
   */
  export type User$userToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    where?: UserToolsWhereInput
    orderBy?: UserToolsOrderByWithRelationInput | UserToolsOrderByWithRelationInput[]
    cursor?: UserToolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToolsScalarFieldEnum | UserToolsScalarFieldEnum[]
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    settings: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    settings?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    settings: JsonValue
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    settings?: boolean
    Steps?: boolean | Workflow$StepsArgs<ExtArgs>
    workflowRuns?: boolean | Workflow$workflowRunsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    settings?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    settings?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    settings?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "userId" | "settings", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Steps?: boolean | Workflow$StepsArgs<ExtArgs>
    workflowRuns?: boolean | Workflow$workflowRunsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      Steps: Prisma.$StepPayload<ExtArgs>[]
      workflowRuns: Prisma.$WorkflowRunsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      settings: Prisma.JsonValue
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Steps<T extends Workflow$StepsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$StepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflowRuns<T extends Workflow$workflowRunsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$workflowRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly settings: FieldRef<"Workflow", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.Steps
   */
  export type Workflow$StepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Workflow.workflowRuns
   */
  export type Workflow$workflowRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    where?: WorkflowRunsWhereInput
    orderBy?: WorkflowRunsOrderByWithRelationInput | WorkflowRunsOrderByWithRelationInput[]
    cursor?: WorkflowRunsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowRunsScalarFieldEnum | WorkflowRunsScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepMinAggregateOutputType = {
    id: string | null
    name: string | null
    toolId: string | null
    workflowId: string | null
    createdAt: Date | null
    parentId: string | null
    firstStep: boolean | null
    updatedAt: Date | null
  }

  export type StepMaxAggregateOutputType = {
    id: string | null
    name: string | null
    toolId: string | null
    workflowId: string | null
    createdAt: Date | null
    parentId: string | null
    firstStep: boolean | null
    updatedAt: Date | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    name: number
    toolId: number
    workflowId: number
    createdAt: number
    parentId: number
    settings: number
    firstStep: number
    updatedAt: number
    _all: number
  }


  export type StepMinAggregateInputType = {
    id?: true
    name?: true
    toolId?: true
    workflowId?: true
    createdAt?: true
    parentId?: true
    firstStep?: true
    updatedAt?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    name?: true
    toolId?: true
    workflowId?: true
    createdAt?: true
    parentId?: true
    firstStep?: true
    updatedAt?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    name?: true
    toolId?: true
    workflowId?: true
    createdAt?: true
    parentId?: true
    settings?: true
    firstStep?: true
    updatedAt?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: string
    name: string
    toolId: string
    workflowId: string
    createdAt: Date
    parentId: string | null
    settings: JsonValue
    firstStep: boolean
    updatedAt: Date
    _count: StepCountAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    toolId?: boolean
    workflowId?: boolean
    createdAt?: boolean
    parentId?: boolean
    settings?: boolean
    firstStep?: boolean
    updatedAt?: boolean
    tool?: boolean | ToolsDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    parent?: boolean | Step$parentArgs<ExtArgs>
    children?: boolean | Step$childrenArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    toolId?: boolean
    workflowId?: boolean
    createdAt?: boolean
    parentId?: boolean
    settings?: boolean
    firstStep?: boolean
    updatedAt?: boolean
    tool?: boolean | ToolsDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    parent?: boolean | Step$parentArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    toolId?: boolean
    workflowId?: boolean
    createdAt?: boolean
    parentId?: boolean
    settings?: boolean
    firstStep?: boolean
    updatedAt?: boolean
    tool?: boolean | ToolsDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    parent?: boolean | Step$parentArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    name?: boolean
    toolId?: boolean
    workflowId?: boolean
    createdAt?: boolean
    parentId?: boolean
    settings?: boolean
    firstStep?: boolean
    updatedAt?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "toolId" | "workflowId" | "createdAt" | "parentId" | "settings" | "firstStep" | "updatedAt", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolsDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    parent?: boolean | Step$parentArgs<ExtArgs>
    children?: boolean | Step$childrenArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolsDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    parent?: boolean | Step$parentArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolsDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    parent?: boolean | Step$parentArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      tool: Prisma.$ToolsPayload<ExtArgs>
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      parent: Prisma.$StepPayload<ExtArgs> | null
      children: Prisma.$StepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      toolId: string
      workflowId: string
      createdAt: Date
      parentId: string | null
      settings: Prisma.JsonValue
      firstStep: boolean
      updatedAt: Date
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolsDefaultArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Step$parentArgs<ExtArgs> = {}>(args?: Subset<T, Step$parentArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Step$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Step$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'String'>
    readonly name: FieldRef<"Step", 'String'>
    readonly toolId: FieldRef<"Step", 'String'>
    readonly workflowId: FieldRef<"Step", 'String'>
    readonly createdAt: FieldRef<"Step", 'DateTime'>
    readonly parentId: FieldRef<"Step", 'String'>
    readonly settings: FieldRef<"Step", 'Json'>
    readonly firstStep: FieldRef<"Step", 'Boolean'>
    readonly updatedAt: FieldRef<"Step", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step.parent
   */
  export type Step$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
  }

  /**
   * Step.children
   */
  export type Step$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model Tools
   */

  export type AggregateTools = {
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  export type ToolsAvgAggregateOutputType = {
    price: number | null
  }

  export type ToolsSumAggregateOutputType = {
    price: number | null
  }

  export type ToolsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    toolLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
    inputType: string | null
    outputType: string | null
    price: number | null
  }

  export type ToolsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    toolLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
    inputType: string | null
    outputType: string | null
    price: number | null
  }

  export type ToolsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    toolLink: number
    createdAt: number
    updatedAt: number
    inputType: number
    outputType: number
    price: number
    settingsSchema: number
    _all: number
  }


  export type ToolsAvgAggregateInputType = {
    price?: true
  }

  export type ToolsSumAggregateInputType = {
    price?: true
  }

  export type ToolsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    toolLink?: true
    createdAt?: true
    updatedAt?: true
    inputType?: true
    outputType?: true
    price?: true
  }

  export type ToolsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    toolLink?: true
    createdAt?: true
    updatedAt?: true
    inputType?: true
    outputType?: true
    price?: true
  }

  export type ToolsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    toolLink?: true
    createdAt?: true
    updatedAt?: true
    inputType?: true
    outputType?: true
    price?: true
    settingsSchema?: true
    _all?: true
  }

  export type ToolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to aggregate.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tools
    **/
    _count?: true | ToolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolsMaxAggregateInputType
  }

  export type GetToolsAggregateType<T extends ToolsAggregateArgs> = {
        [P in keyof T & keyof AggregateTools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTools[P]>
      : GetScalarType<T[P], AggregateTools[P]>
  }




  export type ToolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolsWhereInput
    orderBy?: ToolsOrderByWithAggregationInput | ToolsOrderByWithAggregationInput[]
    by: ToolsScalarFieldEnum[] | ToolsScalarFieldEnum
    having?: ToolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolsCountAggregateInputType | true
    _avg?: ToolsAvgAggregateInputType
    _sum?: ToolsSumAggregateInputType
    _min?: ToolsMinAggregateInputType
    _max?: ToolsMaxAggregateInputType
  }

  export type ToolsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    toolLink: string
    createdAt: Date
    updatedAt: Date
    inputType: string
    outputType: string
    price: number
    settingsSchema: JsonValue
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  type GetToolsGroupByPayload<T extends ToolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolsGroupByOutputType[P]>
            : GetScalarType<T[P], ToolsGroupByOutputType[P]>
        }
      >
    >


  export type ToolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    toolLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputType?: boolean
    outputType?: boolean
    price?: boolean
    settingsSchema?: boolean
    steps?: boolean | Tools$stepsArgs<ExtArgs>
    users?: boolean | Tools$usersArgs<ExtArgs>
    _count?: boolean | ToolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tools"]>

  export type ToolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    toolLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputType?: boolean
    outputType?: boolean
    price?: boolean
    settingsSchema?: boolean
  }, ExtArgs["result"]["tools"]>

  export type ToolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    toolLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputType?: boolean
    outputType?: boolean
    price?: boolean
    settingsSchema?: boolean
  }, ExtArgs["result"]["tools"]>

  export type ToolsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    toolLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputType?: boolean
    outputType?: boolean
    price?: boolean
    settingsSchema?: boolean
  }

  export type ToolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "toolLink" | "createdAt" | "updatedAt" | "inputType" | "outputType" | "price" | "settingsSchema", ExtArgs["result"]["tools"]>
  export type ToolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | Tools$stepsArgs<ExtArgs>
    users?: boolean | Tools$usersArgs<ExtArgs>
    _count?: boolean | ToolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ToolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ToolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tools"
    objects: {
      steps: Prisma.$StepPayload<ExtArgs>[]
      users: Prisma.$UserToolsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      toolLink: string
      createdAt: Date
      updatedAt: Date
      inputType: string
      outputType: string
      price: number
      settingsSchema: Prisma.JsonValue
    }, ExtArgs["result"]["tools"]>
    composites: {}
  }

  type ToolsGetPayload<S extends boolean | null | undefined | ToolsDefaultArgs> = $Result.GetResult<Prisma.$ToolsPayload, S>

  type ToolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolsCountAggregateInputType | true
    }

  export interface ToolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tools'], meta: { name: 'Tools' } }
    /**
     * Find zero or one Tools that matches the filter.
     * @param {ToolsFindUniqueArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolsFindUniqueArgs>(args: SelectSubset<T, ToolsFindUniqueArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolsFindUniqueOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolsFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindFirstArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolsFindFirstArgs>(args?: SelectSubset<T, ToolsFindFirstArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindFirstOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolsFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tools.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolsWithIdOnly = await prisma.tools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolsFindManyArgs>(args?: SelectSubset<T, ToolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tools.
     * @param {ToolsCreateArgs} args - Arguments to create a Tools.
     * @example
     * // Create one Tools
     * const Tools = await prisma.tools.create({
     *   data: {
     *     // ... data to create a Tools
     *   }
     * })
     * 
     */
    create<T extends ToolsCreateArgs>(args: SelectSubset<T, ToolsCreateArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {ToolsCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolsCreateManyArgs>(args?: SelectSubset<T, ToolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {ToolsCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolsCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tools.
     * @param {ToolsDeleteArgs} args - Arguments to delete one Tools.
     * @example
     * // Delete one Tools
     * const Tools = await prisma.tools.delete({
     *   where: {
     *     // ... filter to delete one Tools
     *   }
     * })
     * 
     */
    delete<T extends ToolsDeleteArgs>(args: SelectSubset<T, ToolsDeleteArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tools.
     * @param {ToolsUpdateArgs} args - Arguments to update one Tools.
     * @example
     * // Update one Tools
     * const tools = await prisma.tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolsUpdateArgs>(args: SelectSubset<T, ToolsUpdateArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {ToolsDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolsDeleteManyArgs>(args?: SelectSubset<T, ToolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolsUpdateManyArgs>(args: SelectSubset<T, ToolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {ToolsUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolsUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tools.
     * @param {ToolsUpsertArgs} args - Arguments to update or create a Tools.
     * @example
     * // Update or create a Tools
     * const tools = await prisma.tools.upsert({
     *   create: {
     *     // ... data to create a Tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tools we want to update
     *   }
     * })
     */
    upsert<T extends ToolsUpsertArgs>(args: SelectSubset<T, ToolsUpsertArgs<ExtArgs>>): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tools.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolsCountArgs>(
      args?: Subset<T, ToolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToolsAggregateArgs>(args: Subset<T, ToolsAggregateArgs>): Prisma.PrismaPromise<GetToolsAggregateType<T>>

    /**
     * Group by Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolsGroupByArgs['orderBy'] }
        : { orderBy?: ToolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tools model
   */
  readonly fields: ToolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steps<T extends Tools$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Tools$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Tools$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tools$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tools model
   */
  interface ToolsFieldRefs {
    readonly id: FieldRef<"Tools", 'String'>
    readonly name: FieldRef<"Tools", 'String'>
    readonly description: FieldRef<"Tools", 'String'>
    readonly toolLink: FieldRef<"Tools", 'String'>
    readonly createdAt: FieldRef<"Tools", 'DateTime'>
    readonly updatedAt: FieldRef<"Tools", 'DateTime'>
    readonly inputType: FieldRef<"Tools", 'String'>
    readonly outputType: FieldRef<"Tools", 'String'>
    readonly price: FieldRef<"Tools", 'Float'>
    readonly settingsSchema: FieldRef<"Tools", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Tools findUnique
   */
  export type ToolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where: ToolsWhereUniqueInput
  }

  /**
   * Tools findUniqueOrThrow
   */
  export type ToolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where: ToolsWhereUniqueInput
  }

  /**
   * Tools findFirst
   */
  export type ToolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * Tools findFirstOrThrow
   */
  export type ToolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * Tools findMany
   */
  export type ToolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tools.
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * Tools create
   */
  export type ToolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tools.
     */
    data: XOR<ToolsCreateInput, ToolsUncheckedCreateInput>
  }

  /**
   * Tools createMany
   */
  export type ToolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: ToolsCreateManyInput | ToolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tools createManyAndReturn
   */
  export type ToolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * The data used to create many Tools.
     */
    data: ToolsCreateManyInput | ToolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tools update
   */
  export type ToolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tools.
     */
    data: XOR<ToolsUpdateInput, ToolsUncheckedUpdateInput>
    /**
     * Choose, which Tools to update.
     */
    where: ToolsWhereUniqueInput
  }

  /**
   * Tools updateMany
   */
  export type ToolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolsUpdateManyMutationInput, ToolsUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolsWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tools updateManyAndReturn
   */
  export type ToolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolsUpdateManyMutationInput, ToolsUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolsWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tools upsert
   */
  export type ToolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tools to update in case it exists.
     */
    where: ToolsWhereUniqueInput
    /**
     * In case the Tools found by the `where` argument doesn't exist, create a new Tools with this data.
     */
    create: XOR<ToolsCreateInput, ToolsUncheckedCreateInput>
    /**
     * In case the Tools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolsUpdateInput, ToolsUncheckedUpdateInput>
  }

  /**
   * Tools delete
   */
  export type ToolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    /**
     * Filter which Tools to delete.
     */
    where: ToolsWhereUniqueInput
  }

  /**
   * Tools deleteMany
   */
  export type ToolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: ToolsWhereInput
    /**
     * Limit how many Tools to delete.
     */
    limit?: number
  }

  /**
   * Tools.steps
   */
  export type Tools$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Tools.users
   */
  export type Tools$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    where?: UserToolsWhereInput
    orderBy?: UserToolsOrderByWithRelationInput | UserToolsOrderByWithRelationInput[]
    cursor?: UserToolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToolsScalarFieldEnum | UserToolsScalarFieldEnum[]
  }

  /**
   * Tools without action
   */
  export type ToolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
  }


  /**
   * Model UserTools
   */

  export type AggregateUserTools = {
    _count: UserToolsCountAggregateOutputType | null
    _min: UserToolsMinAggregateOutputType | null
    _max: UserToolsMaxAggregateOutputType | null
  }

  export type UserToolsMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type UserToolsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type UserToolsCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type UserToolsMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserToolsMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserToolsCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type UserToolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTools to aggregate.
     */
    where?: UserToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTools to fetch.
     */
    orderBy?: UserToolsOrderByWithRelationInput | UserToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTools
    **/
    _count?: true | UserToolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserToolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserToolsMaxAggregateInputType
  }

  export type GetUserToolsAggregateType<T extends UserToolsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTools[P]>
      : GetScalarType<T[P], AggregateUserTools[P]>
  }




  export type UserToolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToolsWhereInput
    orderBy?: UserToolsOrderByWithAggregationInput | UserToolsOrderByWithAggregationInput[]
    by: UserToolsScalarFieldEnum[] | UserToolsScalarFieldEnum
    having?: UserToolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserToolsCountAggregateInputType | true
    _min?: UserToolsMinAggregateInputType
    _max?: UserToolsMaxAggregateInputType
  }

  export type UserToolsGroupByOutputType = {
    id: string
    userId: string
    _count: UserToolsCountAggregateOutputType | null
    _min: UserToolsMinAggregateOutputType | null
    _max: UserToolsMaxAggregateOutputType | null
  }

  type GetUserToolsGroupByPayload<T extends UserToolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserToolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserToolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserToolsGroupByOutputType[P]>
            : GetScalarType<T[P], UserToolsGroupByOutputType[P]>
        }
      >
    >


  export type UserToolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tools?: boolean | UserTools$toolsArgs<ExtArgs>
    _count?: boolean | UserToolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTools"]>

  export type UserToolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTools"]>

  export type UserToolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTools"]>

  export type UserToolsSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type UserToolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["userTools"]>
  export type UserToolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tools?: boolean | UserTools$toolsArgs<ExtArgs>
    _count?: boolean | UserToolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserToolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserToolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserToolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTools"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tools: Prisma.$ToolsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["userTools"]>
    composites: {}
  }

  type UserToolsGetPayload<S extends boolean | null | undefined | UserToolsDefaultArgs> = $Result.GetResult<Prisma.$UserToolsPayload, S>

  type UserToolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserToolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserToolsCountAggregateInputType | true
    }

  export interface UserToolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTools'], meta: { name: 'UserTools' } }
    /**
     * Find zero or one UserTools that matches the filter.
     * @param {UserToolsFindUniqueArgs} args - Arguments to find a UserTools
     * @example
     * // Get one UserTools
     * const userTools = await prisma.userTools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserToolsFindUniqueArgs>(args: SelectSubset<T, UserToolsFindUniqueArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserToolsFindUniqueOrThrowArgs} args - Arguments to find a UserTools
     * @example
     * // Get one UserTools
     * const userTools = await prisma.userTools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserToolsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserToolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsFindFirstArgs} args - Arguments to find a UserTools
     * @example
     * // Get one UserTools
     * const userTools = await prisma.userTools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserToolsFindFirstArgs>(args?: SelectSubset<T, UserToolsFindFirstArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsFindFirstOrThrowArgs} args - Arguments to find a UserTools
     * @example
     * // Get one UserTools
     * const userTools = await prisma.userTools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserToolsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserToolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTools
     * const userTools = await prisma.userTools.findMany()
     * 
     * // Get first 10 UserTools
     * const userTools = await prisma.userTools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userToolsWithIdOnly = await prisma.userTools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserToolsFindManyArgs>(args?: SelectSubset<T, UserToolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTools.
     * @param {UserToolsCreateArgs} args - Arguments to create a UserTools.
     * @example
     * // Create one UserTools
     * const UserTools = await prisma.userTools.create({
     *   data: {
     *     // ... data to create a UserTools
     *   }
     * })
     * 
     */
    create<T extends UserToolsCreateArgs>(args: SelectSubset<T, UserToolsCreateArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTools.
     * @param {UserToolsCreateManyArgs} args - Arguments to create many UserTools.
     * @example
     * // Create many UserTools
     * const userTools = await prisma.userTools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserToolsCreateManyArgs>(args?: SelectSubset<T, UserToolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTools and returns the data saved in the database.
     * @param {UserToolsCreateManyAndReturnArgs} args - Arguments to create many UserTools.
     * @example
     * // Create many UserTools
     * const userTools = await prisma.userTools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTools and only return the `id`
     * const userToolsWithIdOnly = await prisma.userTools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserToolsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserToolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTools.
     * @param {UserToolsDeleteArgs} args - Arguments to delete one UserTools.
     * @example
     * // Delete one UserTools
     * const UserTools = await prisma.userTools.delete({
     *   where: {
     *     // ... filter to delete one UserTools
     *   }
     * })
     * 
     */
    delete<T extends UserToolsDeleteArgs>(args: SelectSubset<T, UserToolsDeleteArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTools.
     * @param {UserToolsUpdateArgs} args - Arguments to update one UserTools.
     * @example
     * // Update one UserTools
     * const userTools = await prisma.userTools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserToolsUpdateArgs>(args: SelectSubset<T, UserToolsUpdateArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTools.
     * @param {UserToolsDeleteManyArgs} args - Arguments to filter UserTools to delete.
     * @example
     * // Delete a few UserTools
     * const { count } = await prisma.userTools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserToolsDeleteManyArgs>(args?: SelectSubset<T, UserToolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTools
     * const userTools = await prisma.userTools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserToolsUpdateManyArgs>(args: SelectSubset<T, UserToolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTools and returns the data updated in the database.
     * @param {UserToolsUpdateManyAndReturnArgs} args - Arguments to update many UserTools.
     * @example
     * // Update many UserTools
     * const userTools = await prisma.userTools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTools and only return the `id`
     * const userToolsWithIdOnly = await prisma.userTools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserToolsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserToolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTools.
     * @param {UserToolsUpsertArgs} args - Arguments to update or create a UserTools.
     * @example
     * // Update or create a UserTools
     * const userTools = await prisma.userTools.upsert({
     *   create: {
     *     // ... data to create a UserTools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTools we want to update
     *   }
     * })
     */
    upsert<T extends UserToolsUpsertArgs>(args: SelectSubset<T, UserToolsUpsertArgs<ExtArgs>>): Prisma__UserToolsClient<$Result.GetResult<Prisma.$UserToolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsCountArgs} args - Arguments to filter UserTools to count.
     * @example
     * // Count the number of UserTools
     * const count = await prisma.userTools.count({
     *   where: {
     *     // ... the filter for the UserTools we want to count
     *   }
     * })
    **/
    count<T extends UserToolsCountArgs>(
      args?: Subset<T, UserToolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserToolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserToolsAggregateArgs>(args: Subset<T, UserToolsAggregateArgs>): Prisma.PrismaPromise<GetUserToolsAggregateType<T>>

    /**
     * Group by UserTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToolsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserToolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserToolsGroupByArgs['orderBy'] }
        : { orderBy?: UserToolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserToolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserToolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTools model
   */
  readonly fields: UserToolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserToolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tools<T extends UserTools$toolsArgs<ExtArgs> = {}>(args?: Subset<T, UserTools$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTools model
   */
  interface UserToolsFieldRefs {
    readonly id: FieldRef<"UserTools", 'String'>
    readonly userId: FieldRef<"UserTools", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserTools findUnique
   */
  export type UserToolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * Filter, which UserTools to fetch.
     */
    where: UserToolsWhereUniqueInput
  }

  /**
   * UserTools findUniqueOrThrow
   */
  export type UserToolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * Filter, which UserTools to fetch.
     */
    where: UserToolsWhereUniqueInput
  }

  /**
   * UserTools findFirst
   */
  export type UserToolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * Filter, which UserTools to fetch.
     */
    where?: UserToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTools to fetch.
     */
    orderBy?: UserToolsOrderByWithRelationInput | UserToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTools.
     */
    cursor?: UserToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTools.
     */
    distinct?: UserToolsScalarFieldEnum | UserToolsScalarFieldEnum[]
  }

  /**
   * UserTools findFirstOrThrow
   */
  export type UserToolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * Filter, which UserTools to fetch.
     */
    where?: UserToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTools to fetch.
     */
    orderBy?: UserToolsOrderByWithRelationInput | UserToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTools.
     */
    cursor?: UserToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTools.
     */
    distinct?: UserToolsScalarFieldEnum | UserToolsScalarFieldEnum[]
  }

  /**
   * UserTools findMany
   */
  export type UserToolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * Filter, which UserTools to fetch.
     */
    where?: UserToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTools to fetch.
     */
    orderBy?: UserToolsOrderByWithRelationInput | UserToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTools.
     */
    cursor?: UserToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTools.
     */
    skip?: number
    distinct?: UserToolsScalarFieldEnum | UserToolsScalarFieldEnum[]
  }

  /**
   * UserTools create
   */
  export type UserToolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTools.
     */
    data: XOR<UserToolsCreateInput, UserToolsUncheckedCreateInput>
  }

  /**
   * UserTools createMany
   */
  export type UserToolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTools.
     */
    data: UserToolsCreateManyInput | UserToolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTools createManyAndReturn
   */
  export type UserToolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * The data used to create many UserTools.
     */
    data: UserToolsCreateManyInput | UserToolsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTools update
   */
  export type UserToolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTools.
     */
    data: XOR<UserToolsUpdateInput, UserToolsUncheckedUpdateInput>
    /**
     * Choose, which UserTools to update.
     */
    where: UserToolsWhereUniqueInput
  }

  /**
   * UserTools updateMany
   */
  export type UserToolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTools.
     */
    data: XOR<UserToolsUpdateManyMutationInput, UserToolsUncheckedUpdateManyInput>
    /**
     * Filter which UserTools to update
     */
    where?: UserToolsWhereInput
    /**
     * Limit how many UserTools to update.
     */
    limit?: number
  }

  /**
   * UserTools updateManyAndReturn
   */
  export type UserToolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * The data used to update UserTools.
     */
    data: XOR<UserToolsUpdateManyMutationInput, UserToolsUncheckedUpdateManyInput>
    /**
     * Filter which UserTools to update
     */
    where?: UserToolsWhereInput
    /**
     * Limit how many UserTools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTools upsert
   */
  export type UserToolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTools to update in case it exists.
     */
    where: UserToolsWhereUniqueInput
    /**
     * In case the UserTools found by the `where` argument doesn't exist, create a new UserTools with this data.
     */
    create: XOR<UserToolsCreateInput, UserToolsUncheckedCreateInput>
    /**
     * In case the UserTools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserToolsUpdateInput, UserToolsUncheckedUpdateInput>
  }

  /**
   * UserTools delete
   */
  export type UserToolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
    /**
     * Filter which UserTools to delete.
     */
    where: UserToolsWhereUniqueInput
  }

  /**
   * UserTools deleteMany
   */
  export type UserToolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTools to delete
     */
    where?: UserToolsWhereInput
    /**
     * Limit how many UserTools to delete.
     */
    limit?: number
  }

  /**
   * UserTools.tools
   */
  export type UserTools$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tools
     */
    omit?: ToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolsInclude<ExtArgs> | null
    where?: ToolsWhereInput
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    cursor?: ToolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * UserTools without action
   */
  export type UserToolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTools
     */
    select?: UserToolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTools
     */
    omit?: UserToolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToolsInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowRuns
   */

  export type AggregateWorkflowRuns = {
    _count: WorkflowRunsCountAggregateOutputType | null
    _min: WorkflowRunsMinAggregateOutputType | null
    _max: WorkflowRunsMaxAggregateOutputType | null
  }

  export type WorkflowRunsMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    status: $Enums.Status | null
  }

  export type WorkflowRunsMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    status: $Enums.Status | null
  }

  export type WorkflowRunsCountAggregateOutputType = {
    id: number
    workflowId: number
    status: number
    _all: number
  }


  export type WorkflowRunsMinAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
  }

  export type WorkflowRunsMaxAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
  }

  export type WorkflowRunsCountAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    _all?: true
  }

  export type WorkflowRunsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRuns to aggregate.
     */
    where?: WorkflowRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunsOrderByWithRelationInput | WorkflowRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowRuns
    **/
    _count?: true | WorkflowRunsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowRunsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowRunsMaxAggregateInputType
  }

  export type GetWorkflowRunsAggregateType<T extends WorkflowRunsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowRuns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowRuns[P]>
      : GetScalarType<T[P], AggregateWorkflowRuns[P]>
  }




  export type WorkflowRunsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunsWhereInput
    orderBy?: WorkflowRunsOrderByWithAggregationInput | WorkflowRunsOrderByWithAggregationInput[]
    by: WorkflowRunsScalarFieldEnum[] | WorkflowRunsScalarFieldEnum
    having?: WorkflowRunsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowRunsCountAggregateInputType | true
    _min?: WorkflowRunsMinAggregateInputType
    _max?: WorkflowRunsMaxAggregateInputType
  }

  export type WorkflowRunsGroupByOutputType = {
    id: string
    workflowId: string
    status: $Enums.Status
    _count: WorkflowRunsCountAggregateOutputType | null
    _min: WorkflowRunsMinAggregateOutputType | null
    _max: WorkflowRunsMaxAggregateOutputType | null
  }

  type GetWorkflowRunsGroupByPayload<T extends WorkflowRunsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowRunsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowRunsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowRunsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowRunsGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowRunsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    runningSteps?: boolean | WorkflowRuns$runningStepsArgs<ExtArgs>
    _count?: boolean | WorkflowRunsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowRuns"]>

  export type WorkflowRunsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowRuns"]>

  export type WorkflowRunsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowRuns"]>

  export type WorkflowRunsSelectScalar = {
    id?: boolean
    workflowId?: boolean
    status?: boolean
  }

  export type WorkflowRunsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "status", ExtArgs["result"]["workflowRuns"]>
  export type WorkflowRunsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    runningSteps?: boolean | WorkflowRuns$runningStepsArgs<ExtArgs>
    _count?: boolean | WorkflowRunsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowRunsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowRunsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowRunsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowRuns"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      runningSteps: Prisma.$StepRunsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      status: $Enums.Status
    }, ExtArgs["result"]["workflowRuns"]>
    composites: {}
  }

  type WorkflowRunsGetPayload<S extends boolean | null | undefined | WorkflowRunsDefaultArgs> = $Result.GetResult<Prisma.$WorkflowRunsPayload, S>

  type WorkflowRunsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowRunsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowRunsCountAggregateInputType | true
    }

  export interface WorkflowRunsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowRuns'], meta: { name: 'WorkflowRuns' } }
    /**
     * Find zero or one WorkflowRuns that matches the filter.
     * @param {WorkflowRunsFindUniqueArgs} args - Arguments to find a WorkflowRuns
     * @example
     * // Get one WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowRunsFindUniqueArgs>(args: SelectSubset<T, WorkflowRunsFindUniqueArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowRuns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowRunsFindUniqueOrThrowArgs} args - Arguments to find a WorkflowRuns
     * @example
     * // Get one WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowRunsFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowRunsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsFindFirstArgs} args - Arguments to find a WorkflowRuns
     * @example
     * // Get one WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowRunsFindFirstArgs>(args?: SelectSubset<T, WorkflowRunsFindFirstArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRuns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsFindFirstOrThrowArgs} args - Arguments to find a WorkflowRuns
     * @example
     * // Get one WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowRunsFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowRunsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.findMany()
     * 
     * // Get first 10 WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowRunsWithIdOnly = await prisma.workflowRuns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowRunsFindManyArgs>(args?: SelectSubset<T, WorkflowRunsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowRuns.
     * @param {WorkflowRunsCreateArgs} args - Arguments to create a WorkflowRuns.
     * @example
     * // Create one WorkflowRuns
     * const WorkflowRuns = await prisma.workflowRuns.create({
     *   data: {
     *     // ... data to create a WorkflowRuns
     *   }
     * })
     * 
     */
    create<T extends WorkflowRunsCreateArgs>(args: SelectSubset<T, WorkflowRunsCreateArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowRuns.
     * @param {WorkflowRunsCreateManyArgs} args - Arguments to create many WorkflowRuns.
     * @example
     * // Create many WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowRunsCreateManyArgs>(args?: SelectSubset<T, WorkflowRunsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowRuns and returns the data saved in the database.
     * @param {WorkflowRunsCreateManyAndReturnArgs} args - Arguments to create many WorkflowRuns.
     * @example
     * // Create many WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowRuns and only return the `id`
     * const workflowRunsWithIdOnly = await prisma.workflowRuns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowRunsCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowRunsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowRuns.
     * @param {WorkflowRunsDeleteArgs} args - Arguments to delete one WorkflowRuns.
     * @example
     * // Delete one WorkflowRuns
     * const WorkflowRuns = await prisma.workflowRuns.delete({
     *   where: {
     *     // ... filter to delete one WorkflowRuns
     *   }
     * })
     * 
     */
    delete<T extends WorkflowRunsDeleteArgs>(args: SelectSubset<T, WorkflowRunsDeleteArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowRuns.
     * @param {WorkflowRunsUpdateArgs} args - Arguments to update one WorkflowRuns.
     * @example
     * // Update one WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowRunsUpdateArgs>(args: SelectSubset<T, WorkflowRunsUpdateArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowRuns.
     * @param {WorkflowRunsDeleteManyArgs} args - Arguments to filter WorkflowRuns to delete.
     * @example
     * // Delete a few WorkflowRuns
     * const { count } = await prisma.workflowRuns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowRunsDeleteManyArgs>(args?: SelectSubset<T, WorkflowRunsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowRunsUpdateManyArgs>(args: SelectSubset<T, WorkflowRunsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowRuns and returns the data updated in the database.
     * @param {WorkflowRunsUpdateManyAndReturnArgs} args - Arguments to update many WorkflowRuns.
     * @example
     * // Update many WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowRuns and only return the `id`
     * const workflowRunsWithIdOnly = await prisma.workflowRuns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowRunsUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowRunsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowRuns.
     * @param {WorkflowRunsUpsertArgs} args - Arguments to update or create a WorkflowRuns.
     * @example
     * // Update or create a WorkflowRuns
     * const workflowRuns = await prisma.workflowRuns.upsert({
     *   create: {
     *     // ... data to create a WorkflowRuns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowRuns we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowRunsUpsertArgs>(args: SelectSubset<T, WorkflowRunsUpsertArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsCountArgs} args - Arguments to filter WorkflowRuns to count.
     * @example
     * // Count the number of WorkflowRuns
     * const count = await prisma.workflowRuns.count({
     *   where: {
     *     // ... the filter for the WorkflowRuns we want to count
     *   }
     * })
    **/
    count<T extends WorkflowRunsCountArgs>(
      args?: Subset<T, WorkflowRunsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowRunsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowRunsAggregateArgs>(args: Subset<T, WorkflowRunsAggregateArgs>): Prisma.PrismaPromise<GetWorkflowRunsAggregateType<T>>

    /**
     * Group by WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowRunsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowRunsGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowRunsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowRunsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowRunsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowRuns model
   */
  readonly fields: WorkflowRunsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowRuns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowRunsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    runningSteps<T extends WorkflowRuns$runningStepsArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowRuns$runningStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowRuns model
   */
  interface WorkflowRunsFieldRefs {
    readonly id: FieldRef<"WorkflowRuns", 'String'>
    readonly workflowId: FieldRef<"WorkflowRuns", 'String'>
    readonly status: FieldRef<"WorkflowRuns", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowRuns findUnique
   */
  export type WorkflowRunsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where: WorkflowRunsWhereUniqueInput
  }

  /**
   * WorkflowRuns findUniqueOrThrow
   */
  export type WorkflowRunsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where: WorkflowRunsWhereUniqueInput
  }

  /**
   * WorkflowRuns findFirst
   */
  export type WorkflowRunsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where?: WorkflowRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunsOrderByWithRelationInput | WorkflowRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: WorkflowRunsScalarFieldEnum | WorkflowRunsScalarFieldEnum[]
  }

  /**
   * WorkflowRuns findFirstOrThrow
   */
  export type WorkflowRunsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where?: WorkflowRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunsOrderByWithRelationInput | WorkflowRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: WorkflowRunsScalarFieldEnum | WorkflowRunsScalarFieldEnum[]
  }

  /**
   * WorkflowRuns findMany
   */
  export type WorkflowRunsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where?: WorkflowRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunsOrderByWithRelationInput | WorkflowRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowRuns.
     */
    cursor?: WorkflowRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    distinct?: WorkflowRunsScalarFieldEnum | WorkflowRunsScalarFieldEnum[]
  }

  /**
   * WorkflowRuns create
   */
  export type WorkflowRunsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowRuns.
     */
    data: XOR<WorkflowRunsCreateInput, WorkflowRunsUncheckedCreateInput>
  }

  /**
   * WorkflowRuns createMany
   */
  export type WorkflowRunsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowRuns.
     */
    data: WorkflowRunsCreateManyInput | WorkflowRunsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowRuns createManyAndReturn
   */
  export type WorkflowRunsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowRuns.
     */
    data: WorkflowRunsCreateManyInput | WorkflowRunsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowRuns update
   */
  export type WorkflowRunsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowRuns.
     */
    data: XOR<WorkflowRunsUpdateInput, WorkflowRunsUncheckedUpdateInput>
    /**
     * Choose, which WorkflowRuns to update.
     */
    where: WorkflowRunsWhereUniqueInput
  }

  /**
   * WorkflowRuns updateMany
   */
  export type WorkflowRunsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowRuns.
     */
    data: XOR<WorkflowRunsUpdateManyMutationInput, WorkflowRunsUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowRuns to update
     */
    where?: WorkflowRunsWhereInput
    /**
     * Limit how many WorkflowRuns to update.
     */
    limit?: number
  }

  /**
   * WorkflowRuns updateManyAndReturn
   */
  export type WorkflowRunsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowRuns.
     */
    data: XOR<WorkflowRunsUpdateManyMutationInput, WorkflowRunsUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowRuns to update
     */
    where?: WorkflowRunsWhereInput
    /**
     * Limit how many WorkflowRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowRuns upsert
   */
  export type WorkflowRunsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowRuns to update in case it exists.
     */
    where: WorkflowRunsWhereUniqueInput
    /**
     * In case the WorkflowRuns found by the `where` argument doesn't exist, create a new WorkflowRuns with this data.
     */
    create: XOR<WorkflowRunsCreateInput, WorkflowRunsUncheckedCreateInput>
    /**
     * In case the WorkflowRuns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowRunsUpdateInput, WorkflowRunsUncheckedUpdateInput>
  }

  /**
   * WorkflowRuns delete
   */
  export type WorkflowRunsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
    /**
     * Filter which WorkflowRuns to delete.
     */
    where: WorkflowRunsWhereUniqueInput
  }

  /**
   * WorkflowRuns deleteMany
   */
  export type WorkflowRunsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRuns to delete
     */
    where?: WorkflowRunsWhereInput
    /**
     * Limit how many WorkflowRuns to delete.
     */
    limit?: number
  }

  /**
   * WorkflowRuns.runningSteps
   */
  export type WorkflowRuns$runningStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    where?: StepRunsWhereInput
    orderBy?: StepRunsOrderByWithRelationInput | StepRunsOrderByWithRelationInput[]
    cursor?: StepRunsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepRunsScalarFieldEnum | StepRunsScalarFieldEnum[]
  }

  /**
   * WorkflowRuns without action
   */
  export type WorkflowRunsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRuns
     */
    select?: WorkflowRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRuns
     */
    omit?: WorkflowRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunsInclude<ExtArgs> | null
  }


  /**
   * Model StepRuns
   */

  export type AggregateStepRuns = {
    _count: StepRunsCountAggregateOutputType | null
    _min: StepRunsMinAggregateOutputType | null
    _max: StepRunsMaxAggregateOutputType | null
  }

  export type StepRunsMinAggregateOutputType = {
    id: string | null
    workflowRunId: string | null
    status: $Enums.Status | null
    parentStepId: string | null
  }

  export type StepRunsMaxAggregateOutputType = {
    id: string | null
    workflowRunId: string | null
    status: $Enums.Status | null
    parentStepId: string | null
  }

  export type StepRunsCountAggregateOutputType = {
    id: number
    workflowRunId: number
    status: number
    output: number
    parentStepId: number
    _all: number
  }


  export type StepRunsMinAggregateInputType = {
    id?: true
    workflowRunId?: true
    status?: true
    parentStepId?: true
  }

  export type StepRunsMaxAggregateInputType = {
    id?: true
    workflowRunId?: true
    status?: true
    parentStepId?: true
  }

  export type StepRunsCountAggregateInputType = {
    id?: true
    workflowRunId?: true
    status?: true
    output?: true
    parentStepId?: true
    _all?: true
  }

  export type StepRunsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepRuns to aggregate.
     */
    where?: StepRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRuns to fetch.
     */
    orderBy?: StepRunsOrderByWithRelationInput | StepRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepRuns
    **/
    _count?: true | StepRunsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepRunsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepRunsMaxAggregateInputType
  }

  export type GetStepRunsAggregateType<T extends StepRunsAggregateArgs> = {
        [P in keyof T & keyof AggregateStepRuns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepRuns[P]>
      : GetScalarType<T[P], AggregateStepRuns[P]>
  }




  export type StepRunsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepRunsWhereInput
    orderBy?: StepRunsOrderByWithAggregationInput | StepRunsOrderByWithAggregationInput[]
    by: StepRunsScalarFieldEnum[] | StepRunsScalarFieldEnum
    having?: StepRunsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepRunsCountAggregateInputType | true
    _min?: StepRunsMinAggregateInputType
    _max?: StepRunsMaxAggregateInputType
  }

  export type StepRunsGroupByOutputType = {
    id: string
    workflowRunId: string
    status: $Enums.Status
    output: JsonValue
    parentStepId: string | null
    _count: StepRunsCountAggregateOutputType | null
    _min: StepRunsMinAggregateOutputType | null
    _max: StepRunsMaxAggregateOutputType | null
  }

  type GetStepRunsGroupByPayload<T extends StepRunsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepRunsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepRunsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepRunsGroupByOutputType[P]>
            : GetScalarType<T[P], StepRunsGroupByOutputType[P]>
        }
      >
    >


  export type StepRunsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowRunId?: boolean
    status?: boolean
    output?: boolean
    parentStepId?: boolean
    workflowRun?: boolean | WorkflowRunsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepRuns"]>

  export type StepRunsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowRunId?: boolean
    status?: boolean
    output?: boolean
    parentStepId?: boolean
    workflowRun?: boolean | WorkflowRunsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepRuns"]>

  export type StepRunsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowRunId?: boolean
    status?: boolean
    output?: boolean
    parentStepId?: boolean
    workflowRun?: boolean | WorkflowRunsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepRuns"]>

  export type StepRunsSelectScalar = {
    id?: boolean
    workflowRunId?: boolean
    status?: boolean
    output?: boolean
    parentStepId?: boolean
  }

  export type StepRunsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowRunId" | "status" | "output" | "parentStepId", ExtArgs["result"]["stepRuns"]>
  export type StepRunsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflowRun?: boolean | WorkflowRunsDefaultArgs<ExtArgs>
  }
  export type StepRunsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflowRun?: boolean | WorkflowRunsDefaultArgs<ExtArgs>
  }
  export type StepRunsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflowRun?: boolean | WorkflowRunsDefaultArgs<ExtArgs>
  }

  export type $StepRunsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepRuns"
    objects: {
      workflowRun: Prisma.$WorkflowRunsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowRunId: string
      status: $Enums.Status
      output: Prisma.JsonValue
      parentStepId: string | null
    }, ExtArgs["result"]["stepRuns"]>
    composites: {}
  }

  type StepRunsGetPayload<S extends boolean | null | undefined | StepRunsDefaultArgs> = $Result.GetResult<Prisma.$StepRunsPayload, S>

  type StepRunsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepRunsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepRunsCountAggregateInputType | true
    }

  export interface StepRunsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepRuns'], meta: { name: 'StepRuns' } }
    /**
     * Find zero or one StepRuns that matches the filter.
     * @param {StepRunsFindUniqueArgs} args - Arguments to find a StepRuns
     * @example
     * // Get one StepRuns
     * const stepRuns = await prisma.stepRuns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepRunsFindUniqueArgs>(args: SelectSubset<T, StepRunsFindUniqueArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StepRuns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepRunsFindUniqueOrThrowArgs} args - Arguments to find a StepRuns
     * @example
     * // Get one StepRuns
     * const stepRuns = await prisma.stepRuns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepRunsFindUniqueOrThrowArgs>(args: SelectSubset<T, StepRunsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsFindFirstArgs} args - Arguments to find a StepRuns
     * @example
     * // Get one StepRuns
     * const stepRuns = await prisma.stepRuns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepRunsFindFirstArgs>(args?: SelectSubset<T, StepRunsFindFirstArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepRuns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsFindFirstOrThrowArgs} args - Arguments to find a StepRuns
     * @example
     * // Get one StepRuns
     * const stepRuns = await prisma.stepRuns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepRunsFindFirstOrThrowArgs>(args?: SelectSubset<T, StepRunsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepRuns
     * const stepRuns = await prisma.stepRuns.findMany()
     * 
     * // Get first 10 StepRuns
     * const stepRuns = await prisma.stepRuns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepRunsWithIdOnly = await prisma.stepRuns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepRunsFindManyArgs>(args?: SelectSubset<T, StepRunsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StepRuns.
     * @param {StepRunsCreateArgs} args - Arguments to create a StepRuns.
     * @example
     * // Create one StepRuns
     * const StepRuns = await prisma.stepRuns.create({
     *   data: {
     *     // ... data to create a StepRuns
     *   }
     * })
     * 
     */
    create<T extends StepRunsCreateArgs>(args: SelectSubset<T, StepRunsCreateArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StepRuns.
     * @param {StepRunsCreateManyArgs} args - Arguments to create many StepRuns.
     * @example
     * // Create many StepRuns
     * const stepRuns = await prisma.stepRuns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepRunsCreateManyArgs>(args?: SelectSubset<T, StepRunsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StepRuns and returns the data saved in the database.
     * @param {StepRunsCreateManyAndReturnArgs} args - Arguments to create many StepRuns.
     * @example
     * // Create many StepRuns
     * const stepRuns = await prisma.stepRuns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StepRuns and only return the `id`
     * const stepRunsWithIdOnly = await prisma.stepRuns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepRunsCreateManyAndReturnArgs>(args?: SelectSubset<T, StepRunsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StepRuns.
     * @param {StepRunsDeleteArgs} args - Arguments to delete one StepRuns.
     * @example
     * // Delete one StepRuns
     * const StepRuns = await prisma.stepRuns.delete({
     *   where: {
     *     // ... filter to delete one StepRuns
     *   }
     * })
     * 
     */
    delete<T extends StepRunsDeleteArgs>(args: SelectSubset<T, StepRunsDeleteArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StepRuns.
     * @param {StepRunsUpdateArgs} args - Arguments to update one StepRuns.
     * @example
     * // Update one StepRuns
     * const stepRuns = await prisma.stepRuns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepRunsUpdateArgs>(args: SelectSubset<T, StepRunsUpdateArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StepRuns.
     * @param {StepRunsDeleteManyArgs} args - Arguments to filter StepRuns to delete.
     * @example
     * // Delete a few StepRuns
     * const { count } = await prisma.stepRuns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepRunsDeleteManyArgs>(args?: SelectSubset<T, StepRunsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepRuns
     * const stepRuns = await prisma.stepRuns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepRunsUpdateManyArgs>(args: SelectSubset<T, StepRunsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepRuns and returns the data updated in the database.
     * @param {StepRunsUpdateManyAndReturnArgs} args - Arguments to update many StepRuns.
     * @example
     * // Update many StepRuns
     * const stepRuns = await prisma.stepRuns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StepRuns and only return the `id`
     * const stepRunsWithIdOnly = await prisma.stepRuns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepRunsUpdateManyAndReturnArgs>(args: SelectSubset<T, StepRunsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StepRuns.
     * @param {StepRunsUpsertArgs} args - Arguments to update or create a StepRuns.
     * @example
     * // Update or create a StepRuns
     * const stepRuns = await prisma.stepRuns.upsert({
     *   create: {
     *     // ... data to create a StepRuns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepRuns we want to update
     *   }
     * })
     */
    upsert<T extends StepRunsUpsertArgs>(args: SelectSubset<T, StepRunsUpsertArgs<ExtArgs>>): Prisma__StepRunsClient<$Result.GetResult<Prisma.$StepRunsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StepRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsCountArgs} args - Arguments to filter StepRuns to count.
     * @example
     * // Count the number of StepRuns
     * const count = await prisma.stepRuns.count({
     *   where: {
     *     // ... the filter for the StepRuns we want to count
     *   }
     * })
    **/
    count<T extends StepRunsCountArgs>(
      args?: Subset<T, StepRunsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepRunsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepRunsAggregateArgs>(args: Subset<T, StepRunsAggregateArgs>): Prisma.PrismaPromise<GetStepRunsAggregateType<T>>

    /**
     * Group by StepRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRunsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepRunsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepRunsGroupByArgs['orderBy'] }
        : { orderBy?: StepRunsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepRunsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepRunsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepRuns model
   */
  readonly fields: StepRunsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepRuns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepRunsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflowRun<T extends WorkflowRunsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowRunsDefaultArgs<ExtArgs>>): Prisma__WorkflowRunsClient<$Result.GetResult<Prisma.$WorkflowRunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StepRuns model
   */
  interface StepRunsFieldRefs {
    readonly id: FieldRef<"StepRuns", 'String'>
    readonly workflowRunId: FieldRef<"StepRuns", 'String'>
    readonly status: FieldRef<"StepRuns", 'Status'>
    readonly output: FieldRef<"StepRuns", 'Json'>
    readonly parentStepId: FieldRef<"StepRuns", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StepRuns findUnique
   */
  export type StepRunsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * Filter, which StepRuns to fetch.
     */
    where: StepRunsWhereUniqueInput
  }

  /**
   * StepRuns findUniqueOrThrow
   */
  export type StepRunsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * Filter, which StepRuns to fetch.
     */
    where: StepRunsWhereUniqueInput
  }

  /**
   * StepRuns findFirst
   */
  export type StepRunsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * Filter, which StepRuns to fetch.
     */
    where?: StepRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRuns to fetch.
     */
    orderBy?: StepRunsOrderByWithRelationInput | StepRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepRuns.
     */
    cursor?: StepRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepRuns.
     */
    distinct?: StepRunsScalarFieldEnum | StepRunsScalarFieldEnum[]
  }

  /**
   * StepRuns findFirstOrThrow
   */
  export type StepRunsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * Filter, which StepRuns to fetch.
     */
    where?: StepRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRuns to fetch.
     */
    orderBy?: StepRunsOrderByWithRelationInput | StepRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepRuns.
     */
    cursor?: StepRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepRuns.
     */
    distinct?: StepRunsScalarFieldEnum | StepRunsScalarFieldEnum[]
  }

  /**
   * StepRuns findMany
   */
  export type StepRunsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * Filter, which StepRuns to fetch.
     */
    where?: StepRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRuns to fetch.
     */
    orderBy?: StepRunsOrderByWithRelationInput | StepRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepRuns.
     */
    cursor?: StepRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRuns.
     */
    skip?: number
    distinct?: StepRunsScalarFieldEnum | StepRunsScalarFieldEnum[]
  }

  /**
   * StepRuns create
   */
  export type StepRunsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * The data needed to create a StepRuns.
     */
    data: XOR<StepRunsCreateInput, StepRunsUncheckedCreateInput>
  }

  /**
   * StepRuns createMany
   */
  export type StepRunsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepRuns.
     */
    data: StepRunsCreateManyInput | StepRunsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StepRuns createManyAndReturn
   */
  export type StepRunsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * The data used to create many StepRuns.
     */
    data: StepRunsCreateManyInput | StepRunsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepRuns update
   */
  export type StepRunsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * The data needed to update a StepRuns.
     */
    data: XOR<StepRunsUpdateInput, StepRunsUncheckedUpdateInput>
    /**
     * Choose, which StepRuns to update.
     */
    where: StepRunsWhereUniqueInput
  }

  /**
   * StepRuns updateMany
   */
  export type StepRunsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepRuns.
     */
    data: XOR<StepRunsUpdateManyMutationInput, StepRunsUncheckedUpdateManyInput>
    /**
     * Filter which StepRuns to update
     */
    where?: StepRunsWhereInput
    /**
     * Limit how many StepRuns to update.
     */
    limit?: number
  }

  /**
   * StepRuns updateManyAndReturn
   */
  export type StepRunsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * The data used to update StepRuns.
     */
    data: XOR<StepRunsUpdateManyMutationInput, StepRunsUncheckedUpdateManyInput>
    /**
     * Filter which StepRuns to update
     */
    where?: StepRunsWhereInput
    /**
     * Limit how many StepRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepRuns upsert
   */
  export type StepRunsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * The filter to search for the StepRuns to update in case it exists.
     */
    where: StepRunsWhereUniqueInput
    /**
     * In case the StepRuns found by the `where` argument doesn't exist, create a new StepRuns with this data.
     */
    create: XOR<StepRunsCreateInput, StepRunsUncheckedCreateInput>
    /**
     * In case the StepRuns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepRunsUpdateInput, StepRunsUncheckedUpdateInput>
  }

  /**
   * StepRuns delete
   */
  export type StepRunsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
    /**
     * Filter which StepRuns to delete.
     */
    where: StepRunsWhereUniqueInput
  }

  /**
   * StepRuns deleteMany
   */
  export type StepRunsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepRuns to delete
     */
    where?: StepRunsWhereInput
    /**
     * Limit how many StepRuns to delete.
     */
    limit?: number
  }

  /**
   * StepRuns without action
   */
  export type StepRunsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRuns
     */
    select?: StepRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRuns
     */
    omit?: StepRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRunsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    settings: 'settings'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    name: 'name',
    toolId: 'toolId',
    workflowId: 'workflowId',
    createdAt: 'createdAt',
    parentId: 'parentId',
    settings: 'settings',
    firstStep: 'firstStep',
    updatedAt: 'updatedAt'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const ToolsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    toolLink: 'toolLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    inputType: 'inputType',
    outputType: 'outputType',
    price: 'price',
    settingsSchema: 'settingsSchema'
  };

  export type ToolsScalarFieldEnum = (typeof ToolsScalarFieldEnum)[keyof typeof ToolsScalarFieldEnum]


  export const UserToolsScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type UserToolsScalarFieldEnum = (typeof UserToolsScalarFieldEnum)[keyof typeof UserToolsScalarFieldEnum]


  export const WorkflowRunsScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    status: 'status'
  };

  export type WorkflowRunsScalarFieldEnum = (typeof WorkflowRunsScalarFieldEnum)[keyof typeof WorkflowRunsScalarFieldEnum]


  export const StepRunsScalarFieldEnum: {
    id: 'id',
    workflowRunId: 'workflowRunId',
    status: 'status',
    output: 'output',
    parentStepId: 'parentStepId'
  };

  export type StepRunsScalarFieldEnum = (typeof StepRunsScalarFieldEnum)[keyof typeof StepRunsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userTools?: UserToolsListRelationFilter
    workflows?: WorkflowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userTools?: UserToolsOrderByRelationAggregateInput
    workflows?: WorkflowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userTools?: UserToolsListRelationFilter
    workflows?: WorkflowListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    userId?: StringFilter<"Workflow"> | string
    settings?: JsonFilter<"Workflow">
    Steps?: StepListRelationFilter
    workflowRuns?: WorkflowRunsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    settings?: SortOrder
    Steps?: StepOrderByRelationAggregateInput
    workflowRuns?: WorkflowRunsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    userId?: StringFilter<"Workflow"> | string
    settings?: JsonFilter<"Workflow">
    Steps?: StepListRelationFilter
    workflowRuns?: WorkflowRunsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    settings?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    userId?: StringWithAggregatesFilter<"Workflow"> | string
    settings?: JsonWithAggregatesFilter<"Workflow">
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: StringFilter<"Step"> | string
    name?: StringFilter<"Step"> | string
    toolId?: StringFilter<"Step"> | string
    workflowId?: StringFilter<"Step"> | string
    createdAt?: DateTimeFilter<"Step"> | Date | string
    parentId?: StringNullableFilter<"Step"> | string | null
    settings?: JsonFilter<"Step">
    firstStep?: BoolFilter<"Step"> | boolean
    updatedAt?: DateTimeFilter<"Step"> | Date | string
    tool?: XOR<ToolsScalarRelationFilter, ToolsWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    parent?: XOR<StepNullableScalarRelationFilter, StepWhereInput> | null
    children?: StepListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    toolId?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    settings?: SortOrder
    firstStep?: SortOrder
    updatedAt?: SortOrder
    tool?: ToolsOrderByWithRelationInput
    workflow?: WorkflowOrderByWithRelationInput
    parent?: StepOrderByWithRelationInput
    children?: StepOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    name?: StringFilter<"Step"> | string
    toolId?: StringFilter<"Step"> | string
    workflowId?: StringFilter<"Step"> | string
    createdAt?: DateTimeFilter<"Step"> | Date | string
    parentId?: StringNullableFilter<"Step"> | string | null
    settings?: JsonFilter<"Step">
    firstStep?: BoolFilter<"Step"> | boolean
    updatedAt?: DateTimeFilter<"Step"> | Date | string
    tool?: XOR<ToolsScalarRelationFilter, ToolsWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    parent?: XOR<StepNullableScalarRelationFilter, StepWhereInput> | null
    children?: StepListRelationFilter
  }, "id">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    toolId?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    settings?: SortOrder
    firstStep?: SortOrder
    updatedAt?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Step"> | string
    name?: StringWithAggregatesFilter<"Step"> | string
    toolId?: StringWithAggregatesFilter<"Step"> | string
    workflowId?: StringWithAggregatesFilter<"Step"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Step"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"Step"> | string | null
    settings?: JsonWithAggregatesFilter<"Step">
    firstStep?: BoolWithAggregatesFilter<"Step"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Step"> | Date | string
  }

  export type ToolsWhereInput = {
    AND?: ToolsWhereInput | ToolsWhereInput[]
    OR?: ToolsWhereInput[]
    NOT?: ToolsWhereInput | ToolsWhereInput[]
    id?: StringFilter<"Tools"> | string
    name?: StringFilter<"Tools"> | string
    description?: StringNullableFilter<"Tools"> | string | null
    toolLink?: StringFilter<"Tools"> | string
    createdAt?: DateTimeFilter<"Tools"> | Date | string
    updatedAt?: DateTimeFilter<"Tools"> | Date | string
    inputType?: StringFilter<"Tools"> | string
    outputType?: StringFilter<"Tools"> | string
    price?: FloatFilter<"Tools"> | number
    settingsSchema?: JsonFilter<"Tools">
    steps?: StepListRelationFilter
    users?: UserToolsListRelationFilter
  }

  export type ToolsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    toolLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputType?: SortOrder
    outputType?: SortOrder
    price?: SortOrder
    settingsSchema?: SortOrder
    steps?: StepOrderByRelationAggregateInput
    users?: UserToolsOrderByRelationAggregateInput
  }

  export type ToolsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToolsWhereInput | ToolsWhereInput[]
    OR?: ToolsWhereInput[]
    NOT?: ToolsWhereInput | ToolsWhereInput[]
    name?: StringFilter<"Tools"> | string
    description?: StringNullableFilter<"Tools"> | string | null
    toolLink?: StringFilter<"Tools"> | string
    createdAt?: DateTimeFilter<"Tools"> | Date | string
    updatedAt?: DateTimeFilter<"Tools"> | Date | string
    inputType?: StringFilter<"Tools"> | string
    outputType?: StringFilter<"Tools"> | string
    price?: FloatFilter<"Tools"> | number
    settingsSchema?: JsonFilter<"Tools">
    steps?: StepListRelationFilter
    users?: UserToolsListRelationFilter
  }, "id">

  export type ToolsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    toolLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputType?: SortOrder
    outputType?: SortOrder
    price?: SortOrder
    settingsSchema?: SortOrder
    _count?: ToolsCountOrderByAggregateInput
    _avg?: ToolsAvgOrderByAggregateInput
    _max?: ToolsMaxOrderByAggregateInput
    _min?: ToolsMinOrderByAggregateInput
    _sum?: ToolsSumOrderByAggregateInput
  }

  export type ToolsScalarWhereWithAggregatesInput = {
    AND?: ToolsScalarWhereWithAggregatesInput | ToolsScalarWhereWithAggregatesInput[]
    OR?: ToolsScalarWhereWithAggregatesInput[]
    NOT?: ToolsScalarWhereWithAggregatesInput | ToolsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tools"> | string
    name?: StringWithAggregatesFilter<"Tools"> | string
    description?: StringNullableWithAggregatesFilter<"Tools"> | string | null
    toolLink?: StringWithAggregatesFilter<"Tools"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tools"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tools"> | Date | string
    inputType?: StringWithAggregatesFilter<"Tools"> | string
    outputType?: StringWithAggregatesFilter<"Tools"> | string
    price?: FloatWithAggregatesFilter<"Tools"> | number
    settingsSchema?: JsonWithAggregatesFilter<"Tools">
  }

  export type UserToolsWhereInput = {
    AND?: UserToolsWhereInput | UserToolsWhereInput[]
    OR?: UserToolsWhereInput[]
    NOT?: UserToolsWhereInput | UserToolsWhereInput[]
    id?: StringFilter<"UserTools"> | string
    userId?: StringFilter<"UserTools"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tools?: ToolsListRelationFilter
  }

  export type UserToolsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    tools?: ToolsOrderByRelationAggregateInput
  }

  export type UserToolsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserToolsWhereInput | UserToolsWhereInput[]
    OR?: UserToolsWhereInput[]
    NOT?: UserToolsWhereInput | UserToolsWhereInput[]
    userId?: StringFilter<"UserTools"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tools?: ToolsListRelationFilter
  }, "id">

  export type UserToolsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: UserToolsCountOrderByAggregateInput
    _max?: UserToolsMaxOrderByAggregateInput
    _min?: UserToolsMinOrderByAggregateInput
  }

  export type UserToolsScalarWhereWithAggregatesInput = {
    AND?: UserToolsScalarWhereWithAggregatesInput | UserToolsScalarWhereWithAggregatesInput[]
    OR?: UserToolsScalarWhereWithAggregatesInput[]
    NOT?: UserToolsScalarWhereWithAggregatesInput | UserToolsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTools"> | string
    userId?: StringWithAggregatesFilter<"UserTools"> | string
  }

  export type WorkflowRunsWhereInput = {
    AND?: WorkflowRunsWhereInput | WorkflowRunsWhereInput[]
    OR?: WorkflowRunsWhereInput[]
    NOT?: WorkflowRunsWhereInput | WorkflowRunsWhereInput[]
    id?: StringFilter<"WorkflowRuns"> | string
    workflowId?: StringFilter<"WorkflowRuns"> | string
    status?: EnumStatusFilter<"WorkflowRuns"> | $Enums.Status
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    runningSteps?: StepRunsListRelationFilter
  }

  export type WorkflowRunsOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    runningSteps?: StepRunsOrderByRelationAggregateInput
  }

  export type WorkflowRunsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowRunsWhereInput | WorkflowRunsWhereInput[]
    OR?: WorkflowRunsWhereInput[]
    NOT?: WorkflowRunsWhereInput | WorkflowRunsWhereInput[]
    workflowId?: StringFilter<"WorkflowRuns"> | string
    status?: EnumStatusFilter<"WorkflowRuns"> | $Enums.Status
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    runningSteps?: StepRunsListRelationFilter
  }, "id">

  export type WorkflowRunsOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    _count?: WorkflowRunsCountOrderByAggregateInput
    _max?: WorkflowRunsMaxOrderByAggregateInput
    _min?: WorkflowRunsMinOrderByAggregateInput
  }

  export type WorkflowRunsScalarWhereWithAggregatesInput = {
    AND?: WorkflowRunsScalarWhereWithAggregatesInput | WorkflowRunsScalarWhereWithAggregatesInput[]
    OR?: WorkflowRunsScalarWhereWithAggregatesInput[]
    NOT?: WorkflowRunsScalarWhereWithAggregatesInput | WorkflowRunsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowRuns"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowRuns"> | string
    status?: EnumStatusWithAggregatesFilter<"WorkflowRuns"> | $Enums.Status
  }

  export type StepRunsWhereInput = {
    AND?: StepRunsWhereInput | StepRunsWhereInput[]
    OR?: StepRunsWhereInput[]
    NOT?: StepRunsWhereInput | StepRunsWhereInput[]
    id?: StringFilter<"StepRuns"> | string
    workflowRunId?: StringFilter<"StepRuns"> | string
    status?: EnumStatusFilter<"StepRuns"> | $Enums.Status
    output?: JsonFilter<"StepRuns">
    parentStepId?: StringNullableFilter<"StepRuns"> | string | null
    workflowRun?: XOR<WorkflowRunsScalarRelationFilter, WorkflowRunsWhereInput>
  }

  export type StepRunsOrderByWithRelationInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    parentStepId?: SortOrderInput | SortOrder
    workflowRun?: WorkflowRunsOrderByWithRelationInput
  }

  export type StepRunsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StepRunsWhereInput | StepRunsWhereInput[]
    OR?: StepRunsWhereInput[]
    NOT?: StepRunsWhereInput | StepRunsWhereInput[]
    workflowRunId?: StringFilter<"StepRuns"> | string
    status?: EnumStatusFilter<"StepRuns"> | $Enums.Status
    output?: JsonFilter<"StepRuns">
    parentStepId?: StringNullableFilter<"StepRuns"> | string | null
    workflowRun?: XOR<WorkflowRunsScalarRelationFilter, WorkflowRunsWhereInput>
  }, "id">

  export type StepRunsOrderByWithAggregationInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    parentStepId?: SortOrderInput | SortOrder
    _count?: StepRunsCountOrderByAggregateInput
    _max?: StepRunsMaxOrderByAggregateInput
    _min?: StepRunsMinOrderByAggregateInput
  }

  export type StepRunsScalarWhereWithAggregatesInput = {
    AND?: StepRunsScalarWhereWithAggregatesInput | StepRunsScalarWhereWithAggregatesInput[]
    OR?: StepRunsScalarWhereWithAggregatesInput[]
    NOT?: StepRunsScalarWhereWithAggregatesInput | StepRunsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StepRuns"> | string
    workflowRunId?: StringWithAggregatesFilter<"StepRuns"> | string
    status?: EnumStatusWithAggregatesFilter<"StepRuns"> | $Enums.Status
    output?: JsonWithAggregatesFilter<"StepRuns">
    parentStepId?: StringNullableWithAggregatesFilter<"StepRuns"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userTools?: UserToolsCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userTools?: UserToolsUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTools?: UserToolsUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTools?: UserToolsUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    Steps?: StepCreateNestedManyWithoutWorkflowInput
    workflowRuns?: WorkflowRunsCreateNestedManyWithoutWorkflowInput
    user: UserCreateNestedOneWithoutWorkflowsInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    settings: JsonNullValueInput | InputJsonValue
    Steps?: StepUncheckedCreateNestedManyWithoutWorkflowInput
    workflowRuns?: WorkflowRunsUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    Steps?: StepUpdateManyWithoutWorkflowNestedInput
    workflowRuns?: WorkflowRunsUpdateManyWithoutWorkflowNestedInput
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    Steps?: StepUncheckedUpdateManyWithoutWorkflowNestedInput
    workflowRuns?: WorkflowRunsUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    settings: JsonNullValueInput | InputJsonValue
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
  }

  export type StepCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    tool: ToolsCreateNestedOneWithoutStepsInput
    workflow: WorkflowCreateNestedOneWithoutStepsInput
    parent?: StepCreateNestedOneWithoutChildrenInput
    children?: StepCreateNestedManyWithoutParentInput
  }

  export type StepUncheckedCreateInput = {
    id?: string
    name: string
    toolId: string
    workflowId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    children?: StepUncheckedCreateNestedManyWithoutParentInput
  }

  export type StepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolsUpdateOneRequiredWithoutStepsNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutStepsNestedInput
    parent?: StepUpdateOneWithoutChildrenNestedInput
    children?: StepUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StepUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StepCreateManyInput = {
    id?: string
    name: string
    toolId: string
    workflowId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
  }

  export type StepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolsCreateInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
    steps?: StepCreateNestedManyWithoutToolInput
    users?: UserToolsCreateNestedManyWithoutToolsInput
  }

  export type ToolsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
    steps?: StepUncheckedCreateNestedManyWithoutToolInput
    users?: UserToolsUncheckedCreateNestedManyWithoutToolsInput
  }

  export type ToolsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
    steps?: StepUpdateManyWithoutToolNestedInput
    users?: UserToolsUpdateManyWithoutToolsNestedInput
  }

  export type ToolsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
    steps?: StepUncheckedUpdateManyWithoutToolNestedInput
    users?: UserToolsUncheckedUpdateManyWithoutToolsNestedInput
  }

  export type ToolsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
  }

  export type ToolsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
  }

  export type ToolsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
  }

  export type UserToolsCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserToolsInput
    tools?: ToolsCreateNestedManyWithoutUsersInput
  }

  export type UserToolsUncheckedCreateInput = {
    id?: string
    userId: string
    tools?: ToolsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserToolsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserToolsNestedInput
    tools?: ToolsUpdateManyWithoutUsersNestedInput
  }

  export type UserToolsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tools?: ToolsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserToolsCreateManyInput = {
    id?: string
    userId: string
  }

  export type UserToolsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserToolsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowRunsCreateInput = {
    id?: string
    status?: $Enums.Status
    workflow: WorkflowCreateNestedOneWithoutWorkflowRunsInput
    runningSteps?: StepRunsCreateNestedManyWithoutWorkflowRunInput
  }

  export type WorkflowRunsUncheckedCreateInput = {
    id?: string
    workflowId: string
    status?: $Enums.Status
    runningSteps?: StepRunsUncheckedCreateNestedManyWithoutWorkflowRunInput
  }

  export type WorkflowRunsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowRunsNestedInput
    runningSteps?: StepRunsUpdateManyWithoutWorkflowRunNestedInput
  }

  export type WorkflowRunsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    runningSteps?: StepRunsUncheckedUpdateManyWithoutWorkflowRunNestedInput
  }

  export type WorkflowRunsCreateManyInput = {
    id?: string
    workflowId: string
    status?: $Enums.Status
  }

  export type WorkflowRunsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type WorkflowRunsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type StepRunsCreateInput = {
    id?: string
    status?: $Enums.Status
    output: JsonNullValueInput | InputJsonValue
    parentStepId?: string | null
    workflowRun: WorkflowRunsCreateNestedOneWithoutRunningStepsInput
  }

  export type StepRunsUncheckedCreateInput = {
    id?: string
    workflowRunId: string
    status?: $Enums.Status
    output: JsonNullValueInput | InputJsonValue
    parentStepId?: string | null
  }

  export type StepRunsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowRun?: WorkflowRunsUpdateOneRequiredWithoutRunningStepsNestedInput
  }

  export type StepRunsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StepRunsCreateManyInput = {
    id?: string
    workflowRunId: string
    status?: $Enums.Status
    output: JsonNullValueInput | InputJsonValue
    parentStepId?: string | null
  }

  export type StepRunsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StepRunsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserToolsListRelationFilter = {
    every?: UserToolsWhereInput
    some?: UserToolsWhereInput
    none?: UserToolsWhereInput
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserToolsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type WorkflowRunsListRelationFilter = {
    every?: WorkflowRunsWhereInput
    some?: WorkflowRunsWhereInput
    none?: WorkflowRunsWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowRunsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    settings?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ToolsScalarRelationFilter = {
    is?: ToolsWhereInput
    isNot?: ToolsWhereInput
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type StepNullableScalarRelationFilter = {
    is?: StepWhereInput | null
    isNot?: StepWhereInput | null
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    toolId?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
    settings?: SortOrder
    firstStep?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    toolId?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
    firstStep?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    toolId?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
    firstStep?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ToolsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    toolLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputType?: SortOrder
    outputType?: SortOrder
    price?: SortOrder
    settingsSchema?: SortOrder
  }

  export type ToolsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ToolsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    toolLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputType?: SortOrder
    outputType?: SortOrder
    price?: SortOrder
  }

  export type ToolsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    toolLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputType?: SortOrder
    outputType?: SortOrder
    price?: SortOrder
  }

  export type ToolsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ToolsListRelationFilter = {
    every?: ToolsWhereInput
    some?: ToolsWhereInput
    none?: ToolsWhereInput
  }

  export type ToolsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserToolsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserToolsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserToolsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StepRunsListRelationFilter = {
    every?: StepRunsWhereInput
    some?: StepRunsWhereInput
    none?: StepRunsWhereInput
  }

  export type StepRunsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowRunsCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
  }

  export type WorkflowRunsMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
  }

  export type WorkflowRunsMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type WorkflowRunsScalarRelationFilter = {
    is?: WorkflowRunsWhereInput
    isNot?: WorkflowRunsWhereInput
  }

  export type StepRunsCountOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    parentStepId?: SortOrder
  }

  export type StepRunsMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    status?: SortOrder
    parentStepId?: SortOrder
  }

  export type StepRunsMinOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    status?: SortOrder
    parentStepId?: SortOrder
  }

  export type UserToolsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToolsCreateWithoutUserInput, UserToolsUncheckedCreateWithoutUserInput> | UserToolsCreateWithoutUserInput[] | UserToolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutUserInput | UserToolsCreateOrConnectWithoutUserInput[]
    createMany?: UserToolsCreateManyUserInputEnvelope
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
  }

  export type WorkflowCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type UserToolsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToolsCreateWithoutUserInput, UserToolsUncheckedCreateWithoutUserInput> | UserToolsCreateWithoutUserInput[] | UserToolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutUserInput | UserToolsCreateOrConnectWithoutUserInput[]
    createMany?: UserToolsCreateManyUserInputEnvelope
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserToolsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToolsCreateWithoutUserInput, UserToolsUncheckedCreateWithoutUserInput> | UserToolsCreateWithoutUserInput[] | UserToolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutUserInput | UserToolsCreateOrConnectWithoutUserInput[]
    upsert?: UserToolsUpsertWithWhereUniqueWithoutUserInput | UserToolsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToolsCreateManyUserInputEnvelope
    set?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    disconnect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    delete?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    update?: UserToolsUpdateWithWhereUniqueWithoutUserInput | UserToolsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToolsUpdateManyWithWhereWithoutUserInput | UserToolsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToolsScalarWhereInput | UserToolsScalarWhereInput[]
  }

  export type WorkflowUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type UserToolsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToolsCreateWithoutUserInput, UserToolsUncheckedCreateWithoutUserInput> | UserToolsCreateWithoutUserInput[] | UserToolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutUserInput | UserToolsCreateOrConnectWithoutUserInput[]
    upsert?: UserToolsUpsertWithWhereUniqueWithoutUserInput | UserToolsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToolsCreateManyUserInputEnvelope
    set?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    disconnect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    delete?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    update?: UserToolsUpdateWithWhereUniqueWithoutUserInput | UserToolsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToolsUpdateManyWithWhereWithoutUserInput | UserToolsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToolsScalarWhereInput | UserToolsScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type StepCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<StepCreateWithoutWorkflowInput, StepUncheckedCreateWithoutWorkflowInput> | StepCreateWithoutWorkflowInput[] | StepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWorkflowInput | StepCreateOrConnectWithoutWorkflowInput[]
    createMany?: StepCreateManyWorkflowInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type WorkflowRunsCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowRunsCreateWithoutWorkflowInput, WorkflowRunsUncheckedCreateWithoutWorkflowInput> | WorkflowRunsCreateWithoutWorkflowInput[] | WorkflowRunsUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunsCreateOrConnectWithoutWorkflowInput | WorkflowRunsCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowRunsCreateManyWorkflowInputEnvelope
    connect?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type StepUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<StepCreateWithoutWorkflowInput, StepUncheckedCreateWithoutWorkflowInput> | StepCreateWithoutWorkflowInput[] | StepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWorkflowInput | StepCreateOrConnectWithoutWorkflowInput[]
    createMany?: StepCreateManyWorkflowInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type WorkflowRunsUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowRunsCreateWithoutWorkflowInput, WorkflowRunsUncheckedCreateWithoutWorkflowInput> | WorkflowRunsCreateWithoutWorkflowInput[] | WorkflowRunsUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunsCreateOrConnectWithoutWorkflowInput | WorkflowRunsCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowRunsCreateManyWorkflowInputEnvelope
    connect?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
  }

  export type StepUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<StepCreateWithoutWorkflowInput, StepUncheckedCreateWithoutWorkflowInput> | StepCreateWithoutWorkflowInput[] | StepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWorkflowInput | StepCreateOrConnectWithoutWorkflowInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutWorkflowInput | StepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: StepCreateManyWorkflowInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutWorkflowInput | StepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: StepUpdateManyWithWhereWithoutWorkflowInput | StepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type WorkflowRunsUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowRunsCreateWithoutWorkflowInput, WorkflowRunsUncheckedCreateWithoutWorkflowInput> | WorkflowRunsCreateWithoutWorkflowInput[] | WorkflowRunsUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunsCreateOrConnectWithoutWorkflowInput | WorkflowRunsCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowRunsUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowRunsUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowRunsCreateManyWorkflowInputEnvelope
    set?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    disconnect?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    delete?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    connect?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    update?: WorkflowRunsUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowRunsUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowRunsUpdateManyWithWhereWithoutWorkflowInput | WorkflowRunsUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowRunsScalarWhereInput | WorkflowRunsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type StepUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<StepCreateWithoutWorkflowInput, StepUncheckedCreateWithoutWorkflowInput> | StepCreateWithoutWorkflowInput[] | StepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWorkflowInput | StepCreateOrConnectWithoutWorkflowInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutWorkflowInput | StepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: StepCreateManyWorkflowInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutWorkflowInput | StepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: StepUpdateManyWithWhereWithoutWorkflowInput | StepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type WorkflowRunsUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowRunsCreateWithoutWorkflowInput, WorkflowRunsUncheckedCreateWithoutWorkflowInput> | WorkflowRunsCreateWithoutWorkflowInput[] | WorkflowRunsUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunsCreateOrConnectWithoutWorkflowInput | WorkflowRunsCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowRunsUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowRunsUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowRunsCreateManyWorkflowInputEnvelope
    set?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    disconnect?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    delete?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    connect?: WorkflowRunsWhereUniqueInput | WorkflowRunsWhereUniqueInput[]
    update?: WorkflowRunsUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowRunsUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowRunsUpdateManyWithWhereWithoutWorkflowInput | WorkflowRunsUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowRunsScalarWhereInput | WorkflowRunsScalarWhereInput[]
  }

  export type ToolsCreateNestedOneWithoutStepsInput = {
    create?: XOR<ToolsCreateWithoutStepsInput, ToolsUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ToolsCreateOrConnectWithoutStepsInput
    connect?: ToolsWhereUniqueInput
  }

  export type WorkflowCreateNestedOneWithoutStepsInput = {
    create?: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutStepsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type StepCreateNestedOneWithoutChildrenInput = {
    create?: XOR<StepCreateWithoutChildrenInput, StepUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: StepCreateOrConnectWithoutChildrenInput
    connect?: StepWhereUniqueInput
  }

  export type StepCreateNestedManyWithoutParentInput = {
    create?: XOR<StepCreateWithoutParentInput, StepUncheckedCreateWithoutParentInput> | StepCreateWithoutParentInput[] | StepUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StepCreateOrConnectWithoutParentInput | StepCreateOrConnectWithoutParentInput[]
    createMany?: StepCreateManyParentInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<StepCreateWithoutParentInput, StepUncheckedCreateWithoutParentInput> | StepCreateWithoutParentInput[] | StepUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StepCreateOrConnectWithoutParentInput | StepCreateOrConnectWithoutParentInput[]
    createMany?: StepCreateManyParentInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ToolsUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<ToolsCreateWithoutStepsInput, ToolsUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ToolsCreateOrConnectWithoutStepsInput
    upsert?: ToolsUpsertWithoutStepsInput
    connect?: ToolsWhereUniqueInput
    update?: XOR<XOR<ToolsUpdateToOneWithWhereWithoutStepsInput, ToolsUpdateWithoutStepsInput>, ToolsUncheckedUpdateWithoutStepsInput>
  }

  export type WorkflowUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutStepsInput
    upsert?: WorkflowUpsertWithoutStepsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutStepsInput, WorkflowUpdateWithoutStepsInput>, WorkflowUncheckedUpdateWithoutStepsInput>
  }

  export type StepUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<StepCreateWithoutChildrenInput, StepUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: StepCreateOrConnectWithoutChildrenInput
    upsert?: StepUpsertWithoutChildrenInput
    disconnect?: StepWhereInput | boolean
    delete?: StepWhereInput | boolean
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutChildrenInput, StepUpdateWithoutChildrenInput>, StepUncheckedUpdateWithoutChildrenInput>
  }

  export type StepUpdateManyWithoutParentNestedInput = {
    create?: XOR<StepCreateWithoutParentInput, StepUncheckedCreateWithoutParentInput> | StepCreateWithoutParentInput[] | StepUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StepCreateOrConnectWithoutParentInput | StepCreateOrConnectWithoutParentInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutParentInput | StepUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StepCreateManyParentInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutParentInput | StepUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StepUpdateManyWithWhereWithoutParentInput | StepUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<StepCreateWithoutParentInput, StepUncheckedCreateWithoutParentInput> | StepCreateWithoutParentInput[] | StepUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StepCreateOrConnectWithoutParentInput | StepCreateOrConnectWithoutParentInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutParentInput | StepUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StepCreateManyParentInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutParentInput | StepUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StepUpdateManyWithWhereWithoutParentInput | StepUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type StepCreateNestedManyWithoutToolInput = {
    create?: XOR<StepCreateWithoutToolInput, StepUncheckedCreateWithoutToolInput> | StepCreateWithoutToolInput[] | StepUncheckedCreateWithoutToolInput[]
    connectOrCreate?: StepCreateOrConnectWithoutToolInput | StepCreateOrConnectWithoutToolInput[]
    createMany?: StepCreateManyToolInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type UserToolsCreateNestedManyWithoutToolsInput = {
    create?: XOR<UserToolsCreateWithoutToolsInput, UserToolsUncheckedCreateWithoutToolsInput> | UserToolsCreateWithoutToolsInput[] | UserToolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutToolsInput | UserToolsCreateOrConnectWithoutToolsInput[]
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<StepCreateWithoutToolInput, StepUncheckedCreateWithoutToolInput> | StepCreateWithoutToolInput[] | StepUncheckedCreateWithoutToolInput[]
    connectOrCreate?: StepCreateOrConnectWithoutToolInput | StepCreateOrConnectWithoutToolInput[]
    createMany?: StepCreateManyToolInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type UserToolsUncheckedCreateNestedManyWithoutToolsInput = {
    create?: XOR<UserToolsCreateWithoutToolsInput, UserToolsUncheckedCreateWithoutToolsInput> | UserToolsCreateWithoutToolsInput[] | UserToolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutToolsInput | UserToolsCreateOrConnectWithoutToolsInput[]
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StepUpdateManyWithoutToolNestedInput = {
    create?: XOR<StepCreateWithoutToolInput, StepUncheckedCreateWithoutToolInput> | StepCreateWithoutToolInput[] | StepUncheckedCreateWithoutToolInput[]
    connectOrCreate?: StepCreateOrConnectWithoutToolInput | StepCreateOrConnectWithoutToolInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutToolInput | StepUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: StepCreateManyToolInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutToolInput | StepUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: StepUpdateManyWithWhereWithoutToolInput | StepUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type UserToolsUpdateManyWithoutToolsNestedInput = {
    create?: XOR<UserToolsCreateWithoutToolsInput, UserToolsUncheckedCreateWithoutToolsInput> | UserToolsCreateWithoutToolsInput[] | UserToolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutToolsInput | UserToolsCreateOrConnectWithoutToolsInput[]
    upsert?: UserToolsUpsertWithWhereUniqueWithoutToolsInput | UserToolsUpsertWithWhereUniqueWithoutToolsInput[]
    set?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    disconnect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    delete?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    update?: UserToolsUpdateWithWhereUniqueWithoutToolsInput | UserToolsUpdateWithWhereUniqueWithoutToolsInput[]
    updateMany?: UserToolsUpdateManyWithWhereWithoutToolsInput | UserToolsUpdateManyWithWhereWithoutToolsInput[]
    deleteMany?: UserToolsScalarWhereInput | UserToolsScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<StepCreateWithoutToolInput, StepUncheckedCreateWithoutToolInput> | StepCreateWithoutToolInput[] | StepUncheckedCreateWithoutToolInput[]
    connectOrCreate?: StepCreateOrConnectWithoutToolInput | StepCreateOrConnectWithoutToolInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutToolInput | StepUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: StepCreateManyToolInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutToolInput | StepUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: StepUpdateManyWithWhereWithoutToolInput | StepUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type UserToolsUncheckedUpdateManyWithoutToolsNestedInput = {
    create?: XOR<UserToolsCreateWithoutToolsInput, UserToolsUncheckedCreateWithoutToolsInput> | UserToolsCreateWithoutToolsInput[] | UserToolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: UserToolsCreateOrConnectWithoutToolsInput | UserToolsCreateOrConnectWithoutToolsInput[]
    upsert?: UserToolsUpsertWithWhereUniqueWithoutToolsInput | UserToolsUpsertWithWhereUniqueWithoutToolsInput[]
    set?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    disconnect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    delete?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    connect?: UserToolsWhereUniqueInput | UserToolsWhereUniqueInput[]
    update?: UserToolsUpdateWithWhereUniqueWithoutToolsInput | UserToolsUpdateWithWhereUniqueWithoutToolsInput[]
    updateMany?: UserToolsUpdateManyWithWhereWithoutToolsInput | UserToolsUpdateManyWithWhereWithoutToolsInput[]
    deleteMany?: UserToolsScalarWhereInput | UserToolsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserToolsInput = {
    create?: XOR<UserCreateWithoutUserToolsInput, UserUncheckedCreateWithoutUserToolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserToolsInput
    connect?: UserWhereUniqueInput
  }

  export type ToolsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ToolsCreateWithoutUsersInput, ToolsUncheckedCreateWithoutUsersInput> | ToolsCreateWithoutUsersInput[] | ToolsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ToolsCreateOrConnectWithoutUsersInput | ToolsCreateOrConnectWithoutUsersInput[]
    connect?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
  }

  export type ToolsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ToolsCreateWithoutUsersInput, ToolsUncheckedCreateWithoutUsersInput> | ToolsCreateWithoutUsersInput[] | ToolsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ToolsCreateOrConnectWithoutUsersInput | ToolsCreateOrConnectWithoutUsersInput[]
    connect?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserToolsNestedInput = {
    create?: XOR<UserCreateWithoutUserToolsInput, UserUncheckedCreateWithoutUserToolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserToolsInput
    upsert?: UserUpsertWithoutUserToolsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserToolsInput, UserUpdateWithoutUserToolsInput>, UserUncheckedUpdateWithoutUserToolsInput>
  }

  export type ToolsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ToolsCreateWithoutUsersInput, ToolsUncheckedCreateWithoutUsersInput> | ToolsCreateWithoutUsersInput[] | ToolsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ToolsCreateOrConnectWithoutUsersInput | ToolsCreateOrConnectWithoutUsersInput[]
    upsert?: ToolsUpsertWithWhereUniqueWithoutUsersInput | ToolsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    disconnect?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    delete?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    connect?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    update?: ToolsUpdateWithWhereUniqueWithoutUsersInput | ToolsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ToolsUpdateManyWithWhereWithoutUsersInput | ToolsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ToolsScalarWhereInput | ToolsScalarWhereInput[]
  }

  export type ToolsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ToolsCreateWithoutUsersInput, ToolsUncheckedCreateWithoutUsersInput> | ToolsCreateWithoutUsersInput[] | ToolsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ToolsCreateOrConnectWithoutUsersInput | ToolsCreateOrConnectWithoutUsersInput[]
    upsert?: ToolsUpsertWithWhereUniqueWithoutUsersInput | ToolsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    disconnect?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    delete?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    connect?: ToolsWhereUniqueInput | ToolsWhereUniqueInput[]
    update?: ToolsUpdateWithWhereUniqueWithoutUsersInput | ToolsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ToolsUpdateManyWithWhereWithoutUsersInput | ToolsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ToolsScalarWhereInput | ToolsScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutWorkflowRunsInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowRunsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type StepRunsCreateNestedManyWithoutWorkflowRunInput = {
    create?: XOR<StepRunsCreateWithoutWorkflowRunInput, StepRunsUncheckedCreateWithoutWorkflowRunInput> | StepRunsCreateWithoutWorkflowRunInput[] | StepRunsUncheckedCreateWithoutWorkflowRunInput[]
    connectOrCreate?: StepRunsCreateOrConnectWithoutWorkflowRunInput | StepRunsCreateOrConnectWithoutWorkflowRunInput[]
    createMany?: StepRunsCreateManyWorkflowRunInputEnvelope
    connect?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
  }

  export type StepRunsUncheckedCreateNestedManyWithoutWorkflowRunInput = {
    create?: XOR<StepRunsCreateWithoutWorkflowRunInput, StepRunsUncheckedCreateWithoutWorkflowRunInput> | StepRunsCreateWithoutWorkflowRunInput[] | StepRunsUncheckedCreateWithoutWorkflowRunInput[]
    connectOrCreate?: StepRunsCreateOrConnectWithoutWorkflowRunInput | StepRunsCreateOrConnectWithoutWorkflowRunInput[]
    createMany?: StepRunsCreateManyWorkflowRunInputEnvelope
    connect?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type WorkflowUpdateOneRequiredWithoutWorkflowRunsNestedInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowRunsInput
    upsert?: WorkflowUpsertWithoutWorkflowRunsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutWorkflowRunsInput, WorkflowUpdateWithoutWorkflowRunsInput>, WorkflowUncheckedUpdateWithoutWorkflowRunsInput>
  }

  export type StepRunsUpdateManyWithoutWorkflowRunNestedInput = {
    create?: XOR<StepRunsCreateWithoutWorkflowRunInput, StepRunsUncheckedCreateWithoutWorkflowRunInput> | StepRunsCreateWithoutWorkflowRunInput[] | StepRunsUncheckedCreateWithoutWorkflowRunInput[]
    connectOrCreate?: StepRunsCreateOrConnectWithoutWorkflowRunInput | StepRunsCreateOrConnectWithoutWorkflowRunInput[]
    upsert?: StepRunsUpsertWithWhereUniqueWithoutWorkflowRunInput | StepRunsUpsertWithWhereUniqueWithoutWorkflowRunInput[]
    createMany?: StepRunsCreateManyWorkflowRunInputEnvelope
    set?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    disconnect?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    delete?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    connect?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    update?: StepRunsUpdateWithWhereUniqueWithoutWorkflowRunInput | StepRunsUpdateWithWhereUniqueWithoutWorkflowRunInput[]
    updateMany?: StepRunsUpdateManyWithWhereWithoutWorkflowRunInput | StepRunsUpdateManyWithWhereWithoutWorkflowRunInput[]
    deleteMany?: StepRunsScalarWhereInput | StepRunsScalarWhereInput[]
  }

  export type StepRunsUncheckedUpdateManyWithoutWorkflowRunNestedInput = {
    create?: XOR<StepRunsCreateWithoutWorkflowRunInput, StepRunsUncheckedCreateWithoutWorkflowRunInput> | StepRunsCreateWithoutWorkflowRunInput[] | StepRunsUncheckedCreateWithoutWorkflowRunInput[]
    connectOrCreate?: StepRunsCreateOrConnectWithoutWorkflowRunInput | StepRunsCreateOrConnectWithoutWorkflowRunInput[]
    upsert?: StepRunsUpsertWithWhereUniqueWithoutWorkflowRunInput | StepRunsUpsertWithWhereUniqueWithoutWorkflowRunInput[]
    createMany?: StepRunsCreateManyWorkflowRunInputEnvelope
    set?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    disconnect?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    delete?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    connect?: StepRunsWhereUniqueInput | StepRunsWhereUniqueInput[]
    update?: StepRunsUpdateWithWhereUniqueWithoutWorkflowRunInput | StepRunsUpdateWithWhereUniqueWithoutWorkflowRunInput[]
    updateMany?: StepRunsUpdateManyWithWhereWithoutWorkflowRunInput | StepRunsUpdateManyWithWhereWithoutWorkflowRunInput[]
    deleteMany?: StepRunsScalarWhereInput | StepRunsScalarWhereInput[]
  }

  export type WorkflowRunsCreateNestedOneWithoutRunningStepsInput = {
    create?: XOR<WorkflowRunsCreateWithoutRunningStepsInput, WorkflowRunsUncheckedCreateWithoutRunningStepsInput>
    connectOrCreate?: WorkflowRunsCreateOrConnectWithoutRunningStepsInput
    connect?: WorkflowRunsWhereUniqueInput
  }

  export type WorkflowRunsUpdateOneRequiredWithoutRunningStepsNestedInput = {
    create?: XOR<WorkflowRunsCreateWithoutRunningStepsInput, WorkflowRunsUncheckedCreateWithoutRunningStepsInput>
    connectOrCreate?: WorkflowRunsCreateOrConnectWithoutRunningStepsInput
    upsert?: WorkflowRunsUpsertWithoutRunningStepsInput
    connect?: WorkflowRunsWhereUniqueInput
    update?: XOR<XOR<WorkflowRunsUpdateToOneWithWhereWithoutRunningStepsInput, WorkflowRunsUpdateWithoutRunningStepsInput>, WorkflowRunsUncheckedUpdateWithoutRunningStepsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UserToolsCreateWithoutUserInput = {
    id?: string
    tools?: ToolsCreateNestedManyWithoutUsersInput
  }

  export type UserToolsUncheckedCreateWithoutUserInput = {
    id?: string
    tools?: ToolsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserToolsCreateOrConnectWithoutUserInput = {
    where: UserToolsWhereUniqueInput
    create: XOR<UserToolsCreateWithoutUserInput, UserToolsUncheckedCreateWithoutUserInput>
  }

  export type UserToolsCreateManyUserInputEnvelope = {
    data: UserToolsCreateManyUserInput | UserToolsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    Steps?: StepCreateNestedManyWithoutWorkflowInput
    workflowRuns?: WorkflowRunsCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    Steps?: StepUncheckedCreateNestedManyWithoutWorkflowInput
    workflowRuns?: WorkflowRunsUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowCreateManyUserInputEnvelope = {
    data: WorkflowCreateManyUserInput | WorkflowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserToolsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserToolsWhereUniqueInput
    update: XOR<UserToolsUpdateWithoutUserInput, UserToolsUncheckedUpdateWithoutUserInput>
    create: XOR<UserToolsCreateWithoutUserInput, UserToolsUncheckedCreateWithoutUserInput>
  }

  export type UserToolsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserToolsWhereUniqueInput
    data: XOR<UserToolsUpdateWithoutUserInput, UserToolsUncheckedUpdateWithoutUserInput>
  }

  export type UserToolsUpdateManyWithWhereWithoutUserInput = {
    where: UserToolsScalarWhereInput
    data: XOR<UserToolsUpdateManyMutationInput, UserToolsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserToolsScalarWhereInput = {
    AND?: UserToolsScalarWhereInput | UserToolsScalarWhereInput[]
    OR?: UserToolsScalarWhereInput[]
    NOT?: UserToolsScalarWhereInput | UserToolsScalarWhereInput[]
    id?: StringFilter<"UserTools"> | string
    userId?: StringFilter<"UserTools"> | string
  }

  export type WorkflowUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    userId?: StringFilter<"Workflow"> | string
    settings?: JsonFilter<"Workflow">
  }

  export type StepCreateWithoutWorkflowInput = {
    id?: string
    name: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    tool: ToolsCreateNestedOneWithoutStepsInput
    parent?: StepCreateNestedOneWithoutChildrenInput
    children?: StepCreateNestedManyWithoutParentInput
  }

  export type StepUncheckedCreateWithoutWorkflowInput = {
    id?: string
    name: string
    toolId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    children?: StepUncheckedCreateNestedManyWithoutParentInput
  }

  export type StepCreateOrConnectWithoutWorkflowInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutWorkflowInput, StepUncheckedCreateWithoutWorkflowInput>
  }

  export type StepCreateManyWorkflowInputEnvelope = {
    data: StepCreateManyWorkflowInput | StepCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowRunsCreateWithoutWorkflowInput = {
    id?: string
    status?: $Enums.Status
    runningSteps?: StepRunsCreateNestedManyWithoutWorkflowRunInput
  }

  export type WorkflowRunsUncheckedCreateWithoutWorkflowInput = {
    id?: string
    status?: $Enums.Status
    runningSteps?: StepRunsUncheckedCreateNestedManyWithoutWorkflowRunInput
  }

  export type WorkflowRunsCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowRunsWhereUniqueInput
    create: XOR<WorkflowRunsCreateWithoutWorkflowInput, WorkflowRunsUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunsCreateManyWorkflowInputEnvelope = {
    data: WorkflowRunsCreateManyWorkflowInput | WorkflowRunsCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWorkflowsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userTools?: UserToolsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userTools?: UserToolsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type StepUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutWorkflowInput, StepUncheckedUpdateWithoutWorkflowInput>
    create: XOR<StepCreateWithoutWorkflowInput, StepUncheckedCreateWithoutWorkflowInput>
  }

  export type StepUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutWorkflowInput, StepUncheckedUpdateWithoutWorkflowInput>
  }

  export type StepUpdateManyWithWhereWithoutWorkflowInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    id?: StringFilter<"Step"> | string
    name?: StringFilter<"Step"> | string
    toolId?: StringFilter<"Step"> | string
    workflowId?: StringFilter<"Step"> | string
    createdAt?: DateTimeFilter<"Step"> | Date | string
    parentId?: StringNullableFilter<"Step"> | string | null
    settings?: JsonFilter<"Step">
    firstStep?: BoolFilter<"Step"> | boolean
    updatedAt?: DateTimeFilter<"Step"> | Date | string
  }

  export type WorkflowRunsUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunsWhereUniqueInput
    update: XOR<WorkflowRunsUpdateWithoutWorkflowInput, WorkflowRunsUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowRunsCreateWithoutWorkflowInput, WorkflowRunsUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunsUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunsWhereUniqueInput
    data: XOR<WorkflowRunsUpdateWithoutWorkflowInput, WorkflowRunsUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowRunsUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowRunsScalarWhereInput
    data: XOR<WorkflowRunsUpdateManyMutationInput, WorkflowRunsUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowRunsScalarWhereInput = {
    AND?: WorkflowRunsScalarWhereInput | WorkflowRunsScalarWhereInput[]
    OR?: WorkflowRunsScalarWhereInput[]
    NOT?: WorkflowRunsScalarWhereInput | WorkflowRunsScalarWhereInput[]
    id?: StringFilter<"WorkflowRuns"> | string
    workflowId?: StringFilter<"WorkflowRuns"> | string
    status?: EnumStatusFilter<"WorkflowRuns"> | $Enums.Status
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTools?: UserToolsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTools?: UserToolsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToolsCreateWithoutStepsInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
    users?: UserToolsCreateNestedManyWithoutToolsInput
  }

  export type ToolsUncheckedCreateWithoutStepsInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
    users?: UserToolsUncheckedCreateNestedManyWithoutToolsInput
  }

  export type ToolsCreateOrConnectWithoutStepsInput = {
    where: ToolsWhereUniqueInput
    create: XOR<ToolsCreateWithoutStepsInput, ToolsUncheckedCreateWithoutStepsInput>
  }

  export type WorkflowCreateWithoutStepsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    workflowRuns?: WorkflowRunsCreateNestedManyWithoutWorkflowInput
    user: UserCreateNestedOneWithoutWorkflowsInput
  }

  export type WorkflowUncheckedCreateWithoutStepsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    settings: JsonNullValueInput | InputJsonValue
    workflowRuns?: WorkflowRunsUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutStepsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
  }

  export type StepCreateWithoutChildrenInput = {
    id?: string
    name: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    tool: ToolsCreateNestedOneWithoutStepsInput
    workflow: WorkflowCreateNestedOneWithoutStepsInput
    parent?: StepCreateNestedOneWithoutChildrenInput
  }

  export type StepUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    toolId: string
    workflowId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
  }

  export type StepCreateOrConnectWithoutChildrenInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutChildrenInput, StepUncheckedCreateWithoutChildrenInput>
  }

  export type StepCreateWithoutParentInput = {
    id?: string
    name: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    tool: ToolsCreateNestedOneWithoutStepsInput
    workflow: WorkflowCreateNestedOneWithoutStepsInput
    children?: StepCreateNestedManyWithoutParentInput
  }

  export type StepUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    toolId: string
    workflowId: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    children?: StepUncheckedCreateNestedManyWithoutParentInput
  }

  export type StepCreateOrConnectWithoutParentInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutParentInput, StepUncheckedCreateWithoutParentInput>
  }

  export type StepCreateManyParentInputEnvelope = {
    data: StepCreateManyParentInput | StepCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ToolsUpsertWithoutStepsInput = {
    update: XOR<ToolsUpdateWithoutStepsInput, ToolsUncheckedUpdateWithoutStepsInput>
    create: XOR<ToolsCreateWithoutStepsInput, ToolsUncheckedCreateWithoutStepsInput>
    where?: ToolsWhereInput
  }

  export type ToolsUpdateToOneWithWhereWithoutStepsInput = {
    where?: ToolsWhereInput
    data: XOR<ToolsUpdateWithoutStepsInput, ToolsUncheckedUpdateWithoutStepsInput>
  }

  export type ToolsUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
    users?: UserToolsUpdateManyWithoutToolsNestedInput
  }

  export type ToolsUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
    users?: UserToolsUncheckedUpdateManyWithoutToolsNestedInput
  }

  export type WorkflowUpsertWithoutStepsInput = {
    update: XOR<WorkflowUpdateWithoutStepsInput, WorkflowUncheckedUpdateWithoutStepsInput>
    create: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutStepsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutStepsInput, WorkflowUncheckedUpdateWithoutStepsInput>
  }

  export type WorkflowUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    workflowRuns?: WorkflowRunsUpdateManyWithoutWorkflowNestedInput
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    workflowRuns?: WorkflowRunsUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type StepUpsertWithoutChildrenInput = {
    update: XOR<StepUpdateWithoutChildrenInput, StepUncheckedUpdateWithoutChildrenInput>
    create: XOR<StepCreateWithoutChildrenInput, StepUncheckedCreateWithoutChildrenInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutChildrenInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutChildrenInput, StepUncheckedUpdateWithoutChildrenInput>
  }

  export type StepUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolsUpdateOneRequiredWithoutStepsNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutStepsNestedInput
    parent?: StepUpdateOneWithoutChildrenNestedInput
  }

  export type StepUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUpsertWithWhereUniqueWithoutParentInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutParentInput, StepUncheckedUpdateWithoutParentInput>
    create: XOR<StepCreateWithoutParentInput, StepUncheckedCreateWithoutParentInput>
  }

  export type StepUpdateWithWhereUniqueWithoutParentInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutParentInput, StepUncheckedUpdateWithoutParentInput>
  }

  export type StepUpdateManyWithWhereWithoutParentInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutParentInput>
  }

  export type StepCreateWithoutToolInput = {
    id?: string
    name: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutStepsInput
    parent?: StepCreateNestedOneWithoutChildrenInput
    children?: StepCreateNestedManyWithoutParentInput
  }

  export type StepUncheckedCreateWithoutToolInput = {
    id?: string
    name: string
    workflowId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
    children?: StepUncheckedCreateNestedManyWithoutParentInput
  }

  export type StepCreateOrConnectWithoutToolInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutToolInput, StepUncheckedCreateWithoutToolInput>
  }

  export type StepCreateManyToolInputEnvelope = {
    data: StepCreateManyToolInput | StepCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type UserToolsCreateWithoutToolsInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserToolsInput
  }

  export type UserToolsUncheckedCreateWithoutToolsInput = {
    id?: string
    userId: string
  }

  export type UserToolsCreateOrConnectWithoutToolsInput = {
    where: UserToolsWhereUniqueInput
    create: XOR<UserToolsCreateWithoutToolsInput, UserToolsUncheckedCreateWithoutToolsInput>
  }

  export type StepUpsertWithWhereUniqueWithoutToolInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutToolInput, StepUncheckedUpdateWithoutToolInput>
    create: XOR<StepCreateWithoutToolInput, StepUncheckedCreateWithoutToolInput>
  }

  export type StepUpdateWithWhereUniqueWithoutToolInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutToolInput, StepUncheckedUpdateWithoutToolInput>
  }

  export type StepUpdateManyWithWhereWithoutToolInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutToolInput>
  }

  export type UserToolsUpsertWithWhereUniqueWithoutToolsInput = {
    where: UserToolsWhereUniqueInput
    update: XOR<UserToolsUpdateWithoutToolsInput, UserToolsUncheckedUpdateWithoutToolsInput>
    create: XOR<UserToolsCreateWithoutToolsInput, UserToolsUncheckedCreateWithoutToolsInput>
  }

  export type UserToolsUpdateWithWhereUniqueWithoutToolsInput = {
    where: UserToolsWhereUniqueInput
    data: XOR<UserToolsUpdateWithoutToolsInput, UserToolsUncheckedUpdateWithoutToolsInput>
  }

  export type UserToolsUpdateManyWithWhereWithoutToolsInput = {
    where: UserToolsScalarWhereInput
    data: XOR<UserToolsUpdateManyMutationInput, UserToolsUncheckedUpdateManyWithoutToolsInput>
  }

  export type UserCreateWithoutUserToolsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserToolsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserToolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserToolsInput, UserUncheckedCreateWithoutUserToolsInput>
  }

  export type ToolsCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
    steps?: StepCreateNestedManyWithoutToolInput
  }

  export type ToolsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    toolLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputType: string
    outputType: string
    price?: number
    settingsSchema: JsonNullValueInput | InputJsonValue
    steps?: StepUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolsCreateOrConnectWithoutUsersInput = {
    where: ToolsWhereUniqueInput
    create: XOR<ToolsCreateWithoutUsersInput, ToolsUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUserToolsInput = {
    update: XOR<UserUpdateWithoutUserToolsInput, UserUncheckedUpdateWithoutUserToolsInput>
    create: XOR<UserCreateWithoutUserToolsInput, UserUncheckedCreateWithoutUserToolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserToolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserToolsInput, UserUncheckedUpdateWithoutUserToolsInput>
  }

  export type UserUpdateWithoutUserToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToolsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ToolsWhereUniqueInput
    update: XOR<ToolsUpdateWithoutUsersInput, ToolsUncheckedUpdateWithoutUsersInput>
    create: XOR<ToolsCreateWithoutUsersInput, ToolsUncheckedCreateWithoutUsersInput>
  }

  export type ToolsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ToolsWhereUniqueInput
    data: XOR<ToolsUpdateWithoutUsersInput, ToolsUncheckedUpdateWithoutUsersInput>
  }

  export type ToolsUpdateManyWithWhereWithoutUsersInput = {
    where: ToolsScalarWhereInput
    data: XOR<ToolsUpdateManyMutationInput, ToolsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ToolsScalarWhereInput = {
    AND?: ToolsScalarWhereInput | ToolsScalarWhereInput[]
    OR?: ToolsScalarWhereInput[]
    NOT?: ToolsScalarWhereInput | ToolsScalarWhereInput[]
    id?: StringFilter<"Tools"> | string
    name?: StringFilter<"Tools"> | string
    description?: StringNullableFilter<"Tools"> | string | null
    toolLink?: StringFilter<"Tools"> | string
    createdAt?: DateTimeFilter<"Tools"> | Date | string
    updatedAt?: DateTimeFilter<"Tools"> | Date | string
    inputType?: StringFilter<"Tools"> | string
    outputType?: StringFilter<"Tools"> | string
    price?: FloatFilter<"Tools"> | number
    settingsSchema?: JsonFilter<"Tools">
  }

  export type WorkflowCreateWithoutWorkflowRunsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    Steps?: StepCreateNestedManyWithoutWorkflowInput
    user: UserCreateNestedOneWithoutWorkflowsInput
  }

  export type WorkflowUncheckedCreateWithoutWorkflowRunsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    settings: JsonNullValueInput | InputJsonValue
    Steps?: StepUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutWorkflowRunsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
  }

  export type StepRunsCreateWithoutWorkflowRunInput = {
    id?: string
    status?: $Enums.Status
    output: JsonNullValueInput | InputJsonValue
    parentStepId?: string | null
  }

  export type StepRunsUncheckedCreateWithoutWorkflowRunInput = {
    id?: string
    status?: $Enums.Status
    output: JsonNullValueInput | InputJsonValue
    parentStepId?: string | null
  }

  export type StepRunsCreateOrConnectWithoutWorkflowRunInput = {
    where: StepRunsWhereUniqueInput
    create: XOR<StepRunsCreateWithoutWorkflowRunInput, StepRunsUncheckedCreateWithoutWorkflowRunInput>
  }

  export type StepRunsCreateManyWorkflowRunInputEnvelope = {
    data: StepRunsCreateManyWorkflowRunInput | StepRunsCreateManyWorkflowRunInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutWorkflowRunsInput = {
    update: XOR<WorkflowUpdateWithoutWorkflowRunsInput, WorkflowUncheckedUpdateWithoutWorkflowRunsInput>
    create: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutWorkflowRunsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutWorkflowRunsInput, WorkflowUncheckedUpdateWithoutWorkflowRunsInput>
  }

  export type WorkflowUpdateWithoutWorkflowRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    Steps?: StepUpdateManyWithoutWorkflowNestedInput
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutWorkflowRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    Steps?: StepUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type StepRunsUpsertWithWhereUniqueWithoutWorkflowRunInput = {
    where: StepRunsWhereUniqueInput
    update: XOR<StepRunsUpdateWithoutWorkflowRunInput, StepRunsUncheckedUpdateWithoutWorkflowRunInput>
    create: XOR<StepRunsCreateWithoutWorkflowRunInput, StepRunsUncheckedCreateWithoutWorkflowRunInput>
  }

  export type StepRunsUpdateWithWhereUniqueWithoutWorkflowRunInput = {
    where: StepRunsWhereUniqueInput
    data: XOR<StepRunsUpdateWithoutWorkflowRunInput, StepRunsUncheckedUpdateWithoutWorkflowRunInput>
  }

  export type StepRunsUpdateManyWithWhereWithoutWorkflowRunInput = {
    where: StepRunsScalarWhereInput
    data: XOR<StepRunsUpdateManyMutationInput, StepRunsUncheckedUpdateManyWithoutWorkflowRunInput>
  }

  export type StepRunsScalarWhereInput = {
    AND?: StepRunsScalarWhereInput | StepRunsScalarWhereInput[]
    OR?: StepRunsScalarWhereInput[]
    NOT?: StepRunsScalarWhereInput | StepRunsScalarWhereInput[]
    id?: StringFilter<"StepRuns"> | string
    workflowRunId?: StringFilter<"StepRuns"> | string
    status?: EnumStatusFilter<"StepRuns"> | $Enums.Status
    output?: JsonFilter<"StepRuns">
    parentStepId?: StringNullableFilter<"StepRuns"> | string | null
  }

  export type WorkflowRunsCreateWithoutRunningStepsInput = {
    id?: string
    status?: $Enums.Status
    workflow: WorkflowCreateNestedOneWithoutWorkflowRunsInput
  }

  export type WorkflowRunsUncheckedCreateWithoutRunningStepsInput = {
    id?: string
    workflowId: string
    status?: $Enums.Status
  }

  export type WorkflowRunsCreateOrConnectWithoutRunningStepsInput = {
    where: WorkflowRunsWhereUniqueInput
    create: XOR<WorkflowRunsCreateWithoutRunningStepsInput, WorkflowRunsUncheckedCreateWithoutRunningStepsInput>
  }

  export type WorkflowRunsUpsertWithoutRunningStepsInput = {
    update: XOR<WorkflowRunsUpdateWithoutRunningStepsInput, WorkflowRunsUncheckedUpdateWithoutRunningStepsInput>
    create: XOR<WorkflowRunsCreateWithoutRunningStepsInput, WorkflowRunsUncheckedCreateWithoutRunningStepsInput>
    where?: WorkflowRunsWhereInput
  }

  export type WorkflowRunsUpdateToOneWithWhereWithoutRunningStepsInput = {
    where?: WorkflowRunsWhereInput
    data: XOR<WorkflowRunsUpdateWithoutRunningStepsInput, WorkflowRunsUncheckedUpdateWithoutRunningStepsInput>
  }

  export type WorkflowRunsUpdateWithoutRunningStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowRunsNestedInput
  }

  export type WorkflowRunsUncheckedUpdateWithoutRunningStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserToolsCreateManyUserInput = {
    id?: string
  }

  export type WorkflowCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
  }

  export type UserToolsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tools?: ToolsUpdateManyWithoutUsersNestedInput
  }

  export type UserToolsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tools?: ToolsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserToolsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    Steps?: StepUpdateManyWithoutWorkflowNestedInput
    workflowRuns?: WorkflowRunsUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    Steps?: StepUncheckedUpdateManyWithoutWorkflowNestedInput
    workflowRuns?: WorkflowRunsUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
  }

  export type StepCreateManyWorkflowInput = {
    id?: string
    name: string
    toolId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
  }

  export type WorkflowRunsCreateManyWorkflowInput = {
    id?: string
    status?: $Enums.Status
  }

  export type StepUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolsUpdateOneRequiredWithoutStepsNestedInput
    parent?: StepUpdateOneWithoutChildrenNestedInput
    children?: StepUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StepUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunsUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    runningSteps?: StepRunsUpdateManyWithoutWorkflowRunNestedInput
  }

  export type WorkflowRunsUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    runningSteps?: StepRunsUncheckedUpdateManyWithoutWorkflowRunNestedInput
  }

  export type WorkflowRunsUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type StepCreateManyParentInput = {
    id?: string
    name: string
    toolId: string
    workflowId: string
    createdAt?: Date | string
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
  }

  export type StepUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolsUpdateOneRequiredWithoutStepsNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutStepsNestedInput
    children?: StepUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StepUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepCreateManyToolInput = {
    id?: string
    name: string
    workflowId: string
    createdAt?: Date | string
    parentId?: string | null
    settings: JsonNullValueInput | InputJsonValue
    firstStep?: boolean
    updatedAt?: Date | string
  }

  export type StepUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutStepsNestedInput
    parent?: StepUpdateOneWithoutChildrenNestedInput
    children?: StepUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StepUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StepUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    firstStep?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserToolsUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserToolsNestedInput
  }

  export type UserToolsUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserToolsUncheckedUpdateManyWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
    steps?: StepUpdateManyWithoutToolNestedInput
  }

  export type ToolsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
    steps?: StepUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    toolLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputType?: StringFieldUpdateOperationsInput | string
    outputType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    settingsSchema?: JsonNullValueInput | InputJsonValue
  }

  export type StepRunsCreateManyWorkflowRunInput = {
    id?: string
    status?: $Enums.Status
    output: JsonNullValueInput | InputJsonValue
    parentStepId?: string | null
  }

  export type StepRunsUpdateWithoutWorkflowRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StepRunsUncheckedUpdateWithoutWorkflowRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StepRunsUncheckedUpdateManyWithoutWorkflowRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    output?: JsonNullValueInput | InputJsonValue
    parentStepId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}