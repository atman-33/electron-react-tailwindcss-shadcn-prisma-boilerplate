
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
 * Model Dummy
 * 
 */
export type Dummy = $Result.DefaultSelection<Prisma.$DummyPayload>
/**
 * Model Bulletin
 * 
 */
export type Bulletin = $Result.DefaultSelection<Prisma.$BulletinPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dummies
 * const dummies = await prisma.dummy.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Dummies
   * const dummies = await prisma.dummy.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dummy`: Exposes CRUD operations for the **Dummy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dummies
    * const dummies = await prisma.dummy.findMany()
    * ```
    */
  get dummy(): Prisma.DummyDelegate<ExtArgs>;

  /**
   * `prisma.bulletin`: Exposes CRUD operations for the **Bulletin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bulletins
    * const bulletins = await prisma.bulletin.findMany()
    * ```
    */
  get bulletin(): Prisma.BulletinDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Dummy: 'Dummy',
    Bulletin: 'Bulletin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'dummy' | 'bulletin'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Dummy: {
        payload: Prisma.$DummyPayload<ExtArgs>
        fields: Prisma.DummyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DummyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DummyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>
          }
          findFirst: {
            args: Prisma.DummyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DummyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>
          }
          findMany: {
            args: Prisma.DummyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>[]
          }
          create: {
            args: Prisma.DummyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>
          }
          delete: {
            args: Prisma.DummyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>
          }
          update: {
            args: Prisma.DummyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>
          }
          deleteMany: {
            args: Prisma.DummyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DummyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DummyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DummyPayload>
          }
          aggregate: {
            args: Prisma.DummyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDummy>
          }
          groupBy: {
            args: Prisma.DummyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DummyGroupByOutputType>[]
          }
          count: {
            args: Prisma.DummyCountArgs<ExtArgs>,
            result: $Utils.Optional<DummyCountAggregateOutputType> | number
          }
        }
      }
      Bulletin: {
        payload: Prisma.$BulletinPayload<ExtArgs>
        fields: Prisma.BulletinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletinFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletinFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          findFirst: {
            args: Prisma.BulletinFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletinFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          findMany: {
            args: Prisma.BulletinFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          create: {
            args: Prisma.BulletinCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          delete: {
            args: Prisma.BulletinDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          update: {
            args: Prisma.BulletinUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          deleteMany: {
            args: Prisma.BulletinDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BulletinUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BulletinUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          aggregate: {
            args: Prisma.BulletinAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBulletin>
          }
          groupBy: {
            args: Prisma.BulletinGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BulletinGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletinCountArgs<ExtArgs>,
            result: $Utils.Optional<BulletinCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Dummy
   */

  export type AggregateDummy = {
    _count: DummyCountAggregateOutputType | null
    _avg: DummyAvgAggregateOutputType | null
    _sum: DummySumAggregateOutputType | null
    _min: DummyMinAggregateOutputType | null
    _max: DummyMaxAggregateOutputType | null
  }

  export type DummyAvgAggregateOutputType = {
    id: number | null
    int: number | null
    float: number | null
  }

  export type DummySumAggregateOutputType = {
    id: number | null
    int: number | null
    float: number | null
  }

  export type DummyMinAggregateOutputType = {
    id: number | null
    date: Date | null
    int: number | null
    float: number | null
    text: string | null
  }

  export type DummyMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    int: number | null
    float: number | null
    text: string | null
  }

  export type DummyCountAggregateOutputType = {
    id: number
    date: number
    int: number
    float: number
    text: number
    _all: number
  }


  export type DummyAvgAggregateInputType = {
    id?: true
    int?: true
    float?: true
  }

  export type DummySumAggregateInputType = {
    id?: true
    int?: true
    float?: true
  }

  export type DummyMinAggregateInputType = {
    id?: true
    date?: true
    int?: true
    float?: true
    text?: true
  }

  export type DummyMaxAggregateInputType = {
    id?: true
    date?: true
    int?: true
    float?: true
    text?: true
  }

  export type DummyCountAggregateInputType = {
    id?: true
    date?: true
    int?: true
    float?: true
    text?: true
    _all?: true
  }

  export type DummyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dummy to aggregate.
     */
    where?: DummyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dummies to fetch.
     */
    orderBy?: DummyOrderByWithRelationInput | DummyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DummyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dummies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dummies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dummies
    **/
    _count?: true | DummyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DummyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DummySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DummyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DummyMaxAggregateInputType
  }

  export type GetDummyAggregateType<T extends DummyAggregateArgs> = {
        [P in keyof T & keyof AggregateDummy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDummy[P]>
      : GetScalarType<T[P], AggregateDummy[P]>
  }




  export type DummyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DummyWhereInput
    orderBy?: DummyOrderByWithAggregationInput | DummyOrderByWithAggregationInput[]
    by: DummyScalarFieldEnum[] | DummyScalarFieldEnum
    having?: DummyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DummyCountAggregateInputType | true
    _avg?: DummyAvgAggregateInputType
    _sum?: DummySumAggregateInputType
    _min?: DummyMinAggregateInputType
    _max?: DummyMaxAggregateInputType
  }

  export type DummyGroupByOutputType = {
    id: number
    date: Date | null
    int: number | null
    float: number | null
    text: string | null
    _count: DummyCountAggregateOutputType | null
    _avg: DummyAvgAggregateOutputType | null
    _sum: DummySumAggregateOutputType | null
    _min: DummyMinAggregateOutputType | null
    _max: DummyMaxAggregateOutputType | null
  }

  type GetDummyGroupByPayload<T extends DummyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DummyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DummyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DummyGroupByOutputType[P]>
            : GetScalarType<T[P], DummyGroupByOutputType[P]>
        }
      >
    >


  export type DummySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    int?: boolean
    float?: boolean
    text?: boolean
  }, ExtArgs["result"]["dummy"]>

  export type DummySelectScalar = {
    id?: boolean
    date?: boolean
    int?: boolean
    float?: boolean
    text?: boolean
  }


  export type $DummyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dummy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date | null
      int: number | null
      float: number | null
      text: string | null
    }, ExtArgs["result"]["dummy"]>
    composites: {}
  }


  type DummyGetPayload<S extends boolean | null | undefined | DummyDefaultArgs> = $Result.GetResult<Prisma.$DummyPayload, S>

  type DummyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DummyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DummyCountAggregateInputType | true
    }

  export interface DummyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dummy'], meta: { name: 'Dummy' } }
    /**
     * Find zero or one Dummy that matches the filter.
     * @param {DummyFindUniqueArgs} args - Arguments to find a Dummy
     * @example
     * // Get one Dummy
     * const dummy = await prisma.dummy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DummyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DummyFindUniqueArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dummy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DummyFindUniqueOrThrowArgs} args - Arguments to find a Dummy
     * @example
     * // Get one Dummy
     * const dummy = await prisma.dummy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DummyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DummyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dummy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyFindFirstArgs} args - Arguments to find a Dummy
     * @example
     * // Get one Dummy
     * const dummy = await prisma.dummy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DummyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DummyFindFirstArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dummy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyFindFirstOrThrowArgs} args - Arguments to find a Dummy
     * @example
     * // Get one Dummy
     * const dummy = await prisma.dummy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DummyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DummyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dummies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dummies
     * const dummies = await prisma.dummy.findMany()
     * 
     * // Get first 10 Dummies
     * const dummies = await prisma.dummy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dummyWithIdOnly = await prisma.dummy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DummyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DummyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dummy.
     * @param {DummyCreateArgs} args - Arguments to create a Dummy.
     * @example
     * // Create one Dummy
     * const Dummy = await prisma.dummy.create({
     *   data: {
     *     // ... data to create a Dummy
     *   }
     * })
     * 
    **/
    create<T extends DummyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DummyCreateArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Dummy.
     * @param {DummyDeleteArgs} args - Arguments to delete one Dummy.
     * @example
     * // Delete one Dummy
     * const Dummy = await prisma.dummy.delete({
     *   where: {
     *     // ... filter to delete one Dummy
     *   }
     * })
     * 
    **/
    delete<T extends DummyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DummyDeleteArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dummy.
     * @param {DummyUpdateArgs} args - Arguments to update one Dummy.
     * @example
     * // Update one Dummy
     * const dummy = await prisma.dummy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DummyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DummyUpdateArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dummies.
     * @param {DummyDeleteManyArgs} args - Arguments to filter Dummies to delete.
     * @example
     * // Delete a few Dummies
     * const { count } = await prisma.dummy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DummyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DummyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dummies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dummies
     * const dummy = await prisma.dummy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DummyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DummyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dummy.
     * @param {DummyUpsertArgs} args - Arguments to update or create a Dummy.
     * @example
     * // Update or create a Dummy
     * const dummy = await prisma.dummy.upsert({
     *   create: {
     *     // ... data to create a Dummy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dummy we want to update
     *   }
     * })
    **/
    upsert<T extends DummyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DummyUpsertArgs<ExtArgs>>
    ): Prisma__DummyClient<$Result.GetResult<Prisma.$DummyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dummies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyCountArgs} args - Arguments to filter Dummies to count.
     * @example
     * // Count the number of Dummies
     * const count = await prisma.dummy.count({
     *   where: {
     *     // ... the filter for the Dummies we want to count
     *   }
     * })
    **/
    count<T extends DummyCountArgs>(
      args?: Subset<T, DummyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DummyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dummy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DummyAggregateArgs>(args: Subset<T, DummyAggregateArgs>): Prisma.PrismaPromise<GetDummyAggregateType<T>>

    /**
     * Group by Dummy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DummyGroupByArgs} args - Group by arguments.
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
      T extends DummyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DummyGroupByArgs['orderBy'] }
        : { orderBy?: DummyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DummyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDummyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dummy model
   */
  readonly fields: DummyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dummy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DummyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dummy model
   */ 
  interface DummyFieldRefs {
    readonly id: FieldRef<"Dummy", 'Int'>
    readonly date: FieldRef<"Dummy", 'DateTime'>
    readonly int: FieldRef<"Dummy", 'Int'>
    readonly float: FieldRef<"Dummy", 'Float'>
    readonly text: FieldRef<"Dummy", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Dummy findUnique
   */
  export type DummyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * Filter, which Dummy to fetch.
     */
    where: DummyWhereUniqueInput
  }


  /**
   * Dummy findUniqueOrThrow
   */
  export type DummyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * Filter, which Dummy to fetch.
     */
    where: DummyWhereUniqueInput
  }


  /**
   * Dummy findFirst
   */
  export type DummyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * Filter, which Dummy to fetch.
     */
    where?: DummyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dummies to fetch.
     */
    orderBy?: DummyOrderByWithRelationInput | DummyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dummies.
     */
    cursor?: DummyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dummies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dummies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dummies.
     */
    distinct?: DummyScalarFieldEnum | DummyScalarFieldEnum[]
  }


  /**
   * Dummy findFirstOrThrow
   */
  export type DummyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * Filter, which Dummy to fetch.
     */
    where?: DummyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dummies to fetch.
     */
    orderBy?: DummyOrderByWithRelationInput | DummyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dummies.
     */
    cursor?: DummyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dummies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dummies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dummies.
     */
    distinct?: DummyScalarFieldEnum | DummyScalarFieldEnum[]
  }


  /**
   * Dummy findMany
   */
  export type DummyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * Filter, which Dummies to fetch.
     */
    where?: DummyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dummies to fetch.
     */
    orderBy?: DummyOrderByWithRelationInput | DummyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dummies.
     */
    cursor?: DummyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dummies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dummies.
     */
    skip?: number
    distinct?: DummyScalarFieldEnum | DummyScalarFieldEnum[]
  }


  /**
   * Dummy create
   */
  export type DummyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * The data needed to create a Dummy.
     */
    data?: XOR<DummyCreateInput, DummyUncheckedCreateInput>
  }


  /**
   * Dummy update
   */
  export type DummyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * The data needed to update a Dummy.
     */
    data: XOR<DummyUpdateInput, DummyUncheckedUpdateInput>
    /**
     * Choose, which Dummy to update.
     */
    where: DummyWhereUniqueInput
  }


  /**
   * Dummy updateMany
   */
  export type DummyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dummies.
     */
    data: XOR<DummyUpdateManyMutationInput, DummyUncheckedUpdateManyInput>
    /**
     * Filter which Dummies to update
     */
    where?: DummyWhereInput
  }


  /**
   * Dummy upsert
   */
  export type DummyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * The filter to search for the Dummy to update in case it exists.
     */
    where: DummyWhereUniqueInput
    /**
     * In case the Dummy found by the `where` argument doesn't exist, create a new Dummy with this data.
     */
    create: XOR<DummyCreateInput, DummyUncheckedCreateInput>
    /**
     * In case the Dummy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DummyUpdateInput, DummyUncheckedUpdateInput>
  }


  /**
   * Dummy delete
   */
  export type DummyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
    /**
     * Filter which Dummy to delete.
     */
    where: DummyWhereUniqueInput
  }


  /**
   * Dummy deleteMany
   */
  export type DummyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dummies to delete
     */
    where?: DummyWhereInput
  }


  /**
   * Dummy without action
   */
  export type DummyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dummy
     */
    select?: DummySelect<ExtArgs> | null
  }



  /**
   * Model Bulletin
   */

  export type AggregateBulletin = {
    _count: BulletinCountAggregateOutputType | null
    _avg: BulletinAvgAggregateOutputType | null
    _sum: BulletinSumAggregateOutputType | null
    _min: BulletinMinAggregateOutputType | null
    _max: BulletinMaxAggregateOutputType | null
  }

  export type BulletinAvgAggregateOutputType = {
    id: number | null
    isEditing: number | null
  }

  export type BulletinSumAggregateOutputType = {
    id: number | null
    isEditing: number | null
  }

  export type BulletinMinAggregateOutputType = {
    id: number | null
    message: string | null
    isEditing: number | null
    editedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulletinMaxAggregateOutputType = {
    id: number | null
    message: string | null
    isEditing: number | null
    editedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulletinCountAggregateOutputType = {
    id: number
    message: number
    isEditing: number
    editedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BulletinAvgAggregateInputType = {
    id?: true
    isEditing?: true
  }

  export type BulletinSumAggregateInputType = {
    id?: true
    isEditing?: true
  }

  export type BulletinMinAggregateInputType = {
    id?: true
    message?: true
    isEditing?: true
    editedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulletinMaxAggregateInputType = {
    id?: true
    message?: true
    isEditing?: true
    editedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulletinCountAggregateInputType = {
    id?: true
    message?: true
    isEditing?: true
    editedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BulletinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bulletin to aggregate.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bulletins
    **/
    _count?: true | BulletinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletinMaxAggregateInputType
  }

  export type GetBulletinAggregateType<T extends BulletinAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletin[P]>
      : GetScalarType<T[P], AggregateBulletin[P]>
  }




  export type BulletinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinWhereInput
    orderBy?: BulletinOrderByWithAggregationInput | BulletinOrderByWithAggregationInput[]
    by: BulletinScalarFieldEnum[] | BulletinScalarFieldEnum
    having?: BulletinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletinCountAggregateInputType | true
    _avg?: BulletinAvgAggregateInputType
    _sum?: BulletinSumAggregateInputType
    _min?: BulletinMinAggregateInputType
    _max?: BulletinMaxAggregateInputType
  }

  export type BulletinGroupByOutputType = {
    id: number
    message: string
    isEditing: number
    editedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: BulletinCountAggregateOutputType | null
    _avg: BulletinAvgAggregateOutputType | null
    _sum: BulletinSumAggregateOutputType | null
    _min: BulletinMinAggregateOutputType | null
    _max: BulletinMaxAggregateOutputType | null
  }

  type GetBulletinGroupByPayload<T extends BulletinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletinGroupByOutputType[P]>
            : GetScalarType<T[P], BulletinGroupByOutputType[P]>
        }
      >
    >


  export type BulletinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    isEditing?: boolean
    editedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectScalar = {
    id?: boolean
    message?: boolean
    isEditing?: boolean
    editedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BulletinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bulletin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      isEditing: number
      editedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bulletin"]>
    composites: {}
  }


  type BulletinGetPayload<S extends boolean | null | undefined | BulletinDefaultArgs> = $Result.GetResult<Prisma.$BulletinPayload, S>

  type BulletinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BulletinFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BulletinCountAggregateInputType | true
    }

  export interface BulletinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bulletin'], meta: { name: 'Bulletin' } }
    /**
     * Find zero or one Bulletin that matches the filter.
     * @param {BulletinFindUniqueArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BulletinFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BulletinFindUniqueArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bulletin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BulletinFindUniqueOrThrowArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BulletinFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BulletinFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bulletin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindFirstArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BulletinFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BulletinFindFirstArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bulletin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindFirstOrThrowArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BulletinFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BulletinFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bulletins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bulletins
     * const bulletins = await prisma.bulletin.findMany()
     * 
     * // Get first 10 Bulletins
     * const bulletins = await prisma.bulletin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BulletinFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BulletinFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bulletin.
     * @param {BulletinCreateArgs} args - Arguments to create a Bulletin.
     * @example
     * // Create one Bulletin
     * const Bulletin = await prisma.bulletin.create({
     *   data: {
     *     // ... data to create a Bulletin
     *   }
     * })
     * 
    **/
    create<T extends BulletinCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BulletinCreateArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Bulletin.
     * @param {BulletinDeleteArgs} args - Arguments to delete one Bulletin.
     * @example
     * // Delete one Bulletin
     * const Bulletin = await prisma.bulletin.delete({
     *   where: {
     *     // ... filter to delete one Bulletin
     *   }
     * })
     * 
    **/
    delete<T extends BulletinDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BulletinDeleteArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bulletin.
     * @param {BulletinUpdateArgs} args - Arguments to update one Bulletin.
     * @example
     * // Update one Bulletin
     * const bulletin = await prisma.bulletin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BulletinUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BulletinUpdateArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bulletins.
     * @param {BulletinDeleteManyArgs} args - Arguments to filter Bulletins to delete.
     * @example
     * // Delete a few Bulletins
     * const { count } = await prisma.bulletin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BulletinDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BulletinDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bulletins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bulletins
     * const bulletin = await prisma.bulletin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BulletinUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BulletinUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bulletin.
     * @param {BulletinUpsertArgs} args - Arguments to update or create a Bulletin.
     * @example
     * // Update or create a Bulletin
     * const bulletin = await prisma.bulletin.upsert({
     *   create: {
     *     // ... data to create a Bulletin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bulletin we want to update
     *   }
     * })
    **/
    upsert<T extends BulletinUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BulletinUpsertArgs<ExtArgs>>
    ): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bulletins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinCountArgs} args - Arguments to filter Bulletins to count.
     * @example
     * // Count the number of Bulletins
     * const count = await prisma.bulletin.count({
     *   where: {
     *     // ... the filter for the Bulletins we want to count
     *   }
     * })
    **/
    count<T extends BulletinCountArgs>(
      args?: Subset<T, BulletinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bulletin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BulletinAggregateArgs>(args: Subset<T, BulletinAggregateArgs>): Prisma.PrismaPromise<GetBulletinAggregateType<T>>

    /**
     * Group by Bulletin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinGroupByArgs} args - Group by arguments.
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
      T extends BulletinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletinGroupByArgs['orderBy'] }
        : { orderBy?: BulletinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BulletinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bulletin model
   */
  readonly fields: BulletinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bulletin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bulletin model
   */ 
  interface BulletinFieldRefs {
    readonly id: FieldRef<"Bulletin", 'Int'>
    readonly message: FieldRef<"Bulletin", 'String'>
    readonly isEditing: FieldRef<"Bulletin", 'Int'>
    readonly editedAt: FieldRef<"Bulletin", 'DateTime'>
    readonly createdAt: FieldRef<"Bulletin", 'DateTime'>
    readonly updatedAt: FieldRef<"Bulletin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bulletin findUnique
   */
  export type BulletinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where: BulletinWhereUniqueInput
  }


  /**
   * Bulletin findUniqueOrThrow
   */
  export type BulletinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where: BulletinWhereUniqueInput
  }


  /**
   * Bulletin findFirst
   */
  export type BulletinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bulletins.
     */
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }


  /**
   * Bulletin findFirstOrThrow
   */
  export type BulletinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bulletins.
     */
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }


  /**
   * Bulletin findMany
   */
  export type BulletinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Filter, which Bulletins to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }


  /**
   * Bulletin create
   */
  export type BulletinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * The data needed to create a Bulletin.
     */
    data: XOR<BulletinCreateInput, BulletinUncheckedCreateInput>
  }


  /**
   * Bulletin update
   */
  export type BulletinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * The data needed to update a Bulletin.
     */
    data: XOR<BulletinUpdateInput, BulletinUncheckedUpdateInput>
    /**
     * Choose, which Bulletin to update.
     */
    where: BulletinWhereUniqueInput
  }


  /**
   * Bulletin updateMany
   */
  export type BulletinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bulletins.
     */
    data: XOR<BulletinUpdateManyMutationInput, BulletinUncheckedUpdateManyInput>
    /**
     * Filter which Bulletins to update
     */
    where?: BulletinWhereInput
  }


  /**
   * Bulletin upsert
   */
  export type BulletinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * The filter to search for the Bulletin to update in case it exists.
     */
    where: BulletinWhereUniqueInput
    /**
     * In case the Bulletin found by the `where` argument doesn't exist, create a new Bulletin with this data.
     */
    create: XOR<BulletinCreateInput, BulletinUncheckedCreateInput>
    /**
     * In case the Bulletin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletinUpdateInput, BulletinUncheckedUpdateInput>
  }


  /**
   * Bulletin delete
   */
  export type BulletinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Filter which Bulletin to delete.
     */
    where: BulletinWhereUniqueInput
  }


  /**
   * Bulletin deleteMany
   */
  export type BulletinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bulletins to delete
     */
    where?: BulletinWhereInput
  }


  /**
   * Bulletin without action
   */
  export type BulletinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DummyScalarFieldEnum: {
    id: 'id',
    date: 'date',
    int: 'int',
    float: 'float',
    text: 'text'
  };

  export type DummyScalarFieldEnum = (typeof DummyScalarFieldEnum)[keyof typeof DummyScalarFieldEnum]


  export const BulletinScalarFieldEnum: {
    id: 'id',
    message: 'message',
    isEditing: 'isEditing',
    editedAt: 'editedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BulletinScalarFieldEnum = (typeof BulletinScalarFieldEnum)[keyof typeof BulletinScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    
  /**
   * Deep Input Types
   */


  export type DummyWhereInput = {
    AND?: DummyWhereInput | DummyWhereInput[]
    OR?: DummyWhereInput[]
    NOT?: DummyWhereInput | DummyWhereInput[]
    id?: IntFilter<"Dummy"> | number
    date?: DateTimeNullableFilter<"Dummy"> | Date | string | null
    int?: IntNullableFilter<"Dummy"> | number | null
    float?: FloatNullableFilter<"Dummy"> | number | null
    text?: StringNullableFilter<"Dummy"> | string | null
  }

  export type DummyOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    int?: SortOrderInput | SortOrder
    float?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
  }

  export type DummyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DummyWhereInput | DummyWhereInput[]
    OR?: DummyWhereInput[]
    NOT?: DummyWhereInput | DummyWhereInput[]
    date?: DateTimeNullableFilter<"Dummy"> | Date | string | null
    int?: IntNullableFilter<"Dummy"> | number | null
    float?: FloatNullableFilter<"Dummy"> | number | null
    text?: StringNullableFilter<"Dummy"> | string | null
  }, "id">

  export type DummyOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    int?: SortOrderInput | SortOrder
    float?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    _count?: DummyCountOrderByAggregateInput
    _avg?: DummyAvgOrderByAggregateInput
    _max?: DummyMaxOrderByAggregateInput
    _min?: DummyMinOrderByAggregateInput
    _sum?: DummySumOrderByAggregateInput
  }

  export type DummyScalarWhereWithAggregatesInput = {
    AND?: DummyScalarWhereWithAggregatesInput | DummyScalarWhereWithAggregatesInput[]
    OR?: DummyScalarWhereWithAggregatesInput[]
    NOT?: DummyScalarWhereWithAggregatesInput | DummyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dummy"> | number
    date?: DateTimeNullableWithAggregatesFilter<"Dummy"> | Date | string | null
    int?: IntNullableWithAggregatesFilter<"Dummy"> | number | null
    float?: FloatNullableWithAggregatesFilter<"Dummy"> | number | null
    text?: StringNullableWithAggregatesFilter<"Dummy"> | string | null
  }

  export type BulletinWhereInput = {
    AND?: BulletinWhereInput | BulletinWhereInput[]
    OR?: BulletinWhereInput[]
    NOT?: BulletinWhereInput | BulletinWhereInput[]
    id?: IntFilter<"Bulletin"> | number
    message?: StringFilter<"Bulletin"> | string
    isEditing?: IntFilter<"Bulletin"> | number
    editedAt?: DateTimeFilter<"Bulletin"> | Date | string
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
    updatedAt?: DateTimeFilter<"Bulletin"> | Date | string
  }

  export type BulletinOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    isEditing?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BulletinWhereInput | BulletinWhereInput[]
    OR?: BulletinWhereInput[]
    NOT?: BulletinWhereInput | BulletinWhereInput[]
    message?: StringFilter<"Bulletin"> | string
    isEditing?: IntFilter<"Bulletin"> | number
    editedAt?: DateTimeFilter<"Bulletin"> | Date | string
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
    updatedAt?: DateTimeFilter<"Bulletin"> | Date | string
  }, "id">

  export type BulletinOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    isEditing?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BulletinCountOrderByAggregateInput
    _avg?: BulletinAvgOrderByAggregateInput
    _max?: BulletinMaxOrderByAggregateInput
    _min?: BulletinMinOrderByAggregateInput
    _sum?: BulletinSumOrderByAggregateInput
  }

  export type BulletinScalarWhereWithAggregatesInput = {
    AND?: BulletinScalarWhereWithAggregatesInput | BulletinScalarWhereWithAggregatesInput[]
    OR?: BulletinScalarWhereWithAggregatesInput[]
    NOT?: BulletinScalarWhereWithAggregatesInput | BulletinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bulletin"> | number
    message?: StringWithAggregatesFilter<"Bulletin"> | string
    isEditing?: IntWithAggregatesFilter<"Bulletin"> | number
    editedAt?: DateTimeWithAggregatesFilter<"Bulletin"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Bulletin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bulletin"> | Date | string
  }

  export type DummyCreateInput = {
    date?: Date | string | null
    int?: number | null
    float?: number | null
    text?: string | null
  }

  export type DummyUncheckedCreateInput = {
    id?: number
    date?: Date | string | null
    int?: number | null
    float?: number | null
    text?: string | null
  }

  export type DummyUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    int?: NullableIntFieldUpdateOperationsInput | number | null
    float?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DummyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    int?: NullableIntFieldUpdateOperationsInput | number | null
    float?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DummyUpdateManyMutationInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    int?: NullableIntFieldUpdateOperationsInput | number | null
    float?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DummyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    int?: NullableIntFieldUpdateOperationsInput | number | null
    float?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BulletinCreateInput = {
    id: number
    message: string
    isEditing: number
    editedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulletinUncheckedCreateInput = {
    id: number
    message: string
    isEditing: number
    editedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulletinUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isEditing?: IntFieldUpdateOperationsInput | number
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isEditing?: IntFieldUpdateOperationsInput | number
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isEditing?: IntFieldUpdateOperationsInput | number
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isEditing?: IntFieldUpdateOperationsInput | number
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DummyCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    int?: SortOrder
    float?: SortOrder
    text?: SortOrder
  }

  export type DummyAvgOrderByAggregateInput = {
    id?: SortOrder
    int?: SortOrder
    float?: SortOrder
  }

  export type DummyMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    int?: SortOrder
    float?: SortOrder
    text?: SortOrder
  }

  export type DummyMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    int?: SortOrder
    float?: SortOrder
    text?: SortOrder
  }

  export type DummySumOrderByAggregateInput = {
    id?: SortOrder
    int?: SortOrder
    float?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BulletinCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isEditing?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinAvgOrderByAggregateInput = {
    id?: SortOrder
    isEditing?: SortOrder
  }

  export type BulletinMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isEditing?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isEditing?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinSumOrderByAggregateInput = {
    id?: SortOrder
    isEditing?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DummyDefaultArgs instead
     */
    export type DummyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DummyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BulletinDefaultArgs instead
     */
    export type BulletinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BulletinDefaultArgs<ExtArgs>

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