
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
 * Model Mesure
 * 
 */
export type Mesure = $Result.DefaultSelection<Prisma.$MesurePayload>
/**
 * Model Personnalisation
 * 
 */
export type Personnalisation = $Result.DefaultSelection<Prisma.$PersonnalisationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mesures
 * const mesures = await prisma.mesure.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Mesures
   * const mesures = await prisma.mesure.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mesure`: Exposes CRUD operations for the **Mesure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesures
    * const mesures = await prisma.mesure.findMany()
    * ```
    */
  get mesure(): Prisma.MesureDelegate<ExtArgs>;

  /**
   * `prisma.personnalisation`: Exposes CRUD operations for the **Personnalisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personnalisations
    * const personnalisations = await prisma.personnalisation.findMany()
    * ```
    */
  get personnalisation(): Prisma.PersonnalisationDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Mesure: 'Mesure',
    Personnalisation: 'Personnalisation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    mongodb?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mesure" | "personnalisation"
      txIsolationLevel: never
    }
    model: {
      Mesure: {
        payload: Prisma.$MesurePayload<ExtArgs>
        fields: Prisma.MesureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          findFirst: {
            args: Prisma.MesureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          findMany: {
            args: Prisma.MesureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>[]
          }
          create: {
            args: Prisma.MesureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          createMany: {
            args: Prisma.MesureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MesureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          update: {
            args: Prisma.MesureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          deleteMany: {
            args: Prisma.MesureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MesureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          aggregate: {
            args: Prisma.MesureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesure>
          }
          groupBy: {
            args: Prisma.MesureGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesureGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MesureFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MesureAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MesureCountArgs<ExtArgs>
            result: $Utils.Optional<MesureCountAggregateOutputType> | number
          }
        }
      }
      Personnalisation: {
        payload: Prisma.$PersonnalisationPayload<ExtArgs>
        fields: Prisma.PersonnalisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonnalisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonnalisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>
          }
          findFirst: {
            args: Prisma.PersonnalisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonnalisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>
          }
          findMany: {
            args: Prisma.PersonnalisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>[]
          }
          create: {
            args: Prisma.PersonnalisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>
          }
          createMany: {
            args: Prisma.PersonnalisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonnalisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>
          }
          update: {
            args: Prisma.PersonnalisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>
          }
          deleteMany: {
            args: Prisma.PersonnalisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonnalisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonnalisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnalisationPayload>
          }
          aggregate: {
            args: Prisma.PersonnalisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonnalisation>
          }
          groupBy: {
            args: Prisma.PersonnalisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonnalisationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PersonnalisationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PersonnalisationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PersonnalisationCountArgs<ExtArgs>
            result: $Utils.Optional<PersonnalisationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
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
    | 'createManyAndReturn'
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
  export type Middleware<T = unknown> = (
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
   * Model Mesure
   */

  export type AggregateMesure = {
    _count: MesureCountAggregateOutputType | null
    _avg: MesureAvgAggregateOutputType | null
    _sum: MesureSumAggregateOutputType | null
    _min: MesureMinAggregateOutputType | null
    _max: MesureMaxAggregateOutputType | null
  }

  export type MesureAvgAggregateOutputType = {
    user_id: number | null
    commande_id: number | null
    manches: number | null
    epaules: number | null
    poitrine: number | null
    ventre: number | null
    jambes: number | null
    taille: number | null
    hanche: number | null
    cuisse: number | null
  }

  export type MesureSumAggregateOutputType = {
    user_id: number | null
    commande_id: number | null
    manches: number | null
    epaules: number | null
    poitrine: number | null
    ventre: number | null
    jambes: number | null
    taille: number | null
    hanche: number | null
    cuisse: number | null
  }

  export type MesureMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    commande_id: number | null
    manches: number | null
    epaules: number | null
    poitrine: number | null
    ventre: number | null
    jambes: number | null
    taille: number | null
    hanche: number | null
    cuisse: number | null
    date_enregistrement: Date | null
  }

  export type MesureMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    commande_id: number | null
    manches: number | null
    epaules: number | null
    poitrine: number | null
    ventre: number | null
    jambes: number | null
    taille: number | null
    hanche: number | null
    cuisse: number | null
    date_enregistrement: Date | null
  }

  export type MesureCountAggregateOutputType = {
    id: number
    user_id: number
    commande_id: number
    manches: number
    epaules: number
    poitrine: number
    ventre: number
    jambes: number
    taille: number
    hanche: number
    cuisse: number
    date_enregistrement: number
    _all: number
  }


  export type MesureAvgAggregateInputType = {
    user_id?: true
    commande_id?: true
    manches?: true
    epaules?: true
    poitrine?: true
    ventre?: true
    jambes?: true
    taille?: true
    hanche?: true
    cuisse?: true
  }

  export type MesureSumAggregateInputType = {
    user_id?: true
    commande_id?: true
    manches?: true
    epaules?: true
    poitrine?: true
    ventre?: true
    jambes?: true
    taille?: true
    hanche?: true
    cuisse?: true
  }

  export type MesureMinAggregateInputType = {
    id?: true
    user_id?: true
    commande_id?: true
    manches?: true
    epaules?: true
    poitrine?: true
    ventre?: true
    jambes?: true
    taille?: true
    hanche?: true
    cuisse?: true
    date_enregistrement?: true
  }

  export type MesureMaxAggregateInputType = {
    id?: true
    user_id?: true
    commande_id?: true
    manches?: true
    epaules?: true
    poitrine?: true
    ventre?: true
    jambes?: true
    taille?: true
    hanche?: true
    cuisse?: true
    date_enregistrement?: true
  }

  export type MesureCountAggregateInputType = {
    id?: true
    user_id?: true
    commande_id?: true
    manches?: true
    epaules?: true
    poitrine?: true
    ventre?: true
    jambes?: true
    taille?: true
    hanche?: true
    cuisse?: true
    date_enregistrement?: true
    _all?: true
  }

  export type MesureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesure to aggregate.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesures
    **/
    _count?: true | MesureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesureMaxAggregateInputType
  }

  export type GetMesureAggregateType<T extends MesureAggregateArgs> = {
        [P in keyof T & keyof AggregateMesure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesure[P]>
      : GetScalarType<T[P], AggregateMesure[P]>
  }




  export type MesureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesureWhereInput
    orderBy?: MesureOrderByWithAggregationInput | MesureOrderByWithAggregationInput[]
    by: MesureScalarFieldEnum[] | MesureScalarFieldEnum
    having?: MesureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesureCountAggregateInputType | true
    _avg?: MesureAvgAggregateInputType
    _sum?: MesureSumAggregateInputType
    _min?: MesureMinAggregateInputType
    _max?: MesureMaxAggregateInputType
  }

  export type MesureGroupByOutputType = {
    id: string
    user_id: number
    commande_id: number
    manches: number
    epaules: number
    poitrine: number
    ventre: number
    jambes: number
    taille: number
    hanche: number
    cuisse: number
    date_enregistrement: Date
    _count: MesureCountAggregateOutputType | null
    _avg: MesureAvgAggregateOutputType | null
    _sum: MesureSumAggregateOutputType | null
    _min: MesureMinAggregateOutputType | null
    _max: MesureMaxAggregateOutputType | null
  }

  type GetMesureGroupByPayload<T extends MesureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesureGroupByOutputType[P]>
            : GetScalarType<T[P], MesureGroupByOutputType[P]>
        }
      >
    >


  export type MesureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    commande_id?: boolean
    manches?: boolean
    epaules?: boolean
    poitrine?: boolean
    ventre?: boolean
    jambes?: boolean
    taille?: boolean
    hanche?: boolean
    cuisse?: boolean
    date_enregistrement?: boolean
  }, ExtArgs["result"]["mesure"]>


  export type MesureSelectScalar = {
    id?: boolean
    user_id?: boolean
    commande_id?: boolean
    manches?: boolean
    epaules?: boolean
    poitrine?: boolean
    ventre?: boolean
    jambes?: boolean
    taille?: boolean
    hanche?: boolean
    cuisse?: boolean
    date_enregistrement?: boolean
  }


  export type $MesurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesure"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      commande_id: number
      manches: number
      epaules: number
      poitrine: number
      ventre: number
      jambes: number
      taille: number
      hanche: number
      cuisse: number
      date_enregistrement: Date
    }, ExtArgs["result"]["mesure"]>
    composites: {}
  }

  type MesureGetPayload<S extends boolean | null | undefined | MesureDefaultArgs> = $Result.GetResult<Prisma.$MesurePayload, S>

  type MesureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MesureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MesureCountAggregateInputType | true
    }

  export interface MesureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesure'], meta: { name: 'Mesure' } }
    /**
     * Find zero or one Mesure that matches the filter.
     * @param {MesureFindUniqueArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesureFindUniqueArgs>(args: SelectSubset<T, MesureFindUniqueArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mesure that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MesureFindUniqueOrThrowArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesureFindUniqueOrThrowArgs>(args: SelectSubset<T, MesureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mesure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureFindFirstArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesureFindFirstArgs>(args?: SelectSubset<T, MesureFindFirstArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mesure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureFindFirstOrThrowArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesureFindFirstOrThrowArgs>(args?: SelectSubset<T, MesureFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mesures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesures
     * const mesures = await prisma.mesure.findMany()
     * 
     * // Get first 10 Mesures
     * const mesures = await prisma.mesure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesureWithIdOnly = await prisma.mesure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesureFindManyArgs>(args?: SelectSubset<T, MesureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mesure.
     * @param {MesureCreateArgs} args - Arguments to create a Mesure.
     * @example
     * // Create one Mesure
     * const Mesure = await prisma.mesure.create({
     *   data: {
     *     // ... data to create a Mesure
     *   }
     * })
     * 
     */
    create<T extends MesureCreateArgs>(args: SelectSubset<T, MesureCreateArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mesures.
     * @param {MesureCreateManyArgs} args - Arguments to create many Mesures.
     * @example
     * // Create many Mesures
     * const mesure = await prisma.mesure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesureCreateManyArgs>(args?: SelectSubset<T, MesureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mesure.
     * @param {MesureDeleteArgs} args - Arguments to delete one Mesure.
     * @example
     * // Delete one Mesure
     * const Mesure = await prisma.mesure.delete({
     *   where: {
     *     // ... filter to delete one Mesure
     *   }
     * })
     * 
     */
    delete<T extends MesureDeleteArgs>(args: SelectSubset<T, MesureDeleteArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mesure.
     * @param {MesureUpdateArgs} args - Arguments to update one Mesure.
     * @example
     * // Update one Mesure
     * const mesure = await prisma.mesure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesureUpdateArgs>(args: SelectSubset<T, MesureUpdateArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mesures.
     * @param {MesureDeleteManyArgs} args - Arguments to filter Mesures to delete.
     * @example
     * // Delete a few Mesures
     * const { count } = await prisma.mesure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesureDeleteManyArgs>(args?: SelectSubset<T, MesureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesures
     * const mesure = await prisma.mesure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesureUpdateManyArgs>(args: SelectSubset<T, MesureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mesure.
     * @param {MesureUpsertArgs} args - Arguments to update or create a Mesure.
     * @example
     * // Update or create a Mesure
     * const mesure = await prisma.mesure.upsert({
     *   create: {
     *     // ... data to create a Mesure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesure we want to update
     *   }
     * })
     */
    upsert<T extends MesureUpsertArgs>(args: SelectSubset<T, MesureUpsertArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Mesures that matches the filter.
     * @param {MesureFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mesure = await prisma.mesure.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: MesureFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Mesure.
     * @param {MesureAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mesure = await prisma.mesure.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MesureAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Mesures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCountArgs} args - Arguments to filter Mesures to count.
     * @example
     * // Count the number of Mesures
     * const count = await prisma.mesure.count({
     *   where: {
     *     // ... the filter for the Mesures we want to count
     *   }
     * })
    **/
    count<T extends MesureCountArgs>(
      args?: Subset<T, MesureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MesureAggregateArgs>(args: Subset<T, MesureAggregateArgs>): Prisma.PrismaPromise<GetMesureAggregateType<T>>

    /**
     * Group by Mesure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureGroupByArgs} args - Group by arguments.
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
      T extends MesureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesureGroupByArgs['orderBy'] }
        : { orderBy?: MesureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MesureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesure model
   */
  readonly fields: MesureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Mesure model
   */ 
  interface MesureFieldRefs {
    readonly id: FieldRef<"Mesure", 'String'>
    readonly user_id: FieldRef<"Mesure", 'Int'>
    readonly commande_id: FieldRef<"Mesure", 'Int'>
    readonly manches: FieldRef<"Mesure", 'Float'>
    readonly epaules: FieldRef<"Mesure", 'Float'>
    readonly poitrine: FieldRef<"Mesure", 'Float'>
    readonly ventre: FieldRef<"Mesure", 'Float'>
    readonly jambes: FieldRef<"Mesure", 'Float'>
    readonly taille: FieldRef<"Mesure", 'Float'>
    readonly hanche: FieldRef<"Mesure", 'Float'>
    readonly cuisse: FieldRef<"Mesure", 'Float'>
    readonly date_enregistrement: FieldRef<"Mesure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mesure findUnique
   */
  export type MesureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure findUniqueOrThrow
   */
  export type MesureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure findFirst
   */
  export type MesureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesures.
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesures.
     */
    distinct?: MesureScalarFieldEnum | MesureScalarFieldEnum[]
  }

  /**
   * Mesure findFirstOrThrow
   */
  export type MesureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesures.
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesures.
     */
    distinct?: MesureScalarFieldEnum | MesureScalarFieldEnum[]
  }

  /**
   * Mesure findMany
   */
  export type MesureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Filter, which Mesures to fetch.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesures.
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    distinct?: MesureScalarFieldEnum | MesureScalarFieldEnum[]
  }

  /**
   * Mesure create
   */
  export type MesureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * The data needed to create a Mesure.
     */
    data: XOR<MesureCreateInput, MesureUncheckedCreateInput>
  }

  /**
   * Mesure createMany
   */
  export type MesureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesures.
     */
    data: MesureCreateManyInput | MesureCreateManyInput[]
  }

  /**
   * Mesure update
   */
  export type MesureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * The data needed to update a Mesure.
     */
    data: XOR<MesureUpdateInput, MesureUncheckedUpdateInput>
    /**
     * Choose, which Mesure to update.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure updateMany
   */
  export type MesureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesures.
     */
    data: XOR<MesureUpdateManyMutationInput, MesureUncheckedUpdateManyInput>
    /**
     * Filter which Mesures to update
     */
    where?: MesureWhereInput
  }

  /**
   * Mesure upsert
   */
  export type MesureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * The filter to search for the Mesure to update in case it exists.
     */
    where: MesureWhereUniqueInput
    /**
     * In case the Mesure found by the `where` argument doesn't exist, create a new Mesure with this data.
     */
    create: XOR<MesureCreateInput, MesureUncheckedCreateInput>
    /**
     * In case the Mesure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesureUpdateInput, MesureUncheckedUpdateInput>
  }

  /**
   * Mesure delete
   */
  export type MesureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Filter which Mesure to delete.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure deleteMany
   */
  export type MesureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesures to delete
     */
    where?: MesureWhereInput
  }

  /**
   * Mesure findRaw
   */
  export type MesureFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Mesure aggregateRaw
   */
  export type MesureAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Mesure without action
   */
  export type MesureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
  }


  /**
   * Model Personnalisation
   */

  export type AggregatePersonnalisation = {
    _count: PersonnalisationCountAggregateOutputType | null
    _avg: PersonnalisationAvgAggregateOutputType | null
    _sum: PersonnalisationSumAggregateOutputType | null
    _min: PersonnalisationMinAggregateOutputType | null
    _max: PersonnalisationMaxAggregateOutputType | null
  }

  export type PersonnalisationAvgAggregateOutputType = {
    commande_id: number | null
  }

  export type PersonnalisationSumAggregateOutputType = {
    commande_id: number | null
  }

  export type PersonnalisationMinAggregateOutputType = {
    id: string | null
    commande_id: number | null
    type_produit: string | null
    tissu: string | null
    couleur_boutons: string | null
    couleur_fils: string | null
    date_personnalisation: Date | null
  }

  export type PersonnalisationMaxAggregateOutputType = {
    id: string | null
    commande_id: number | null
    type_produit: string | null
    tissu: string | null
    couleur_boutons: string | null
    couleur_fils: string | null
    date_personnalisation: Date | null
  }

  export type PersonnalisationCountAggregateOutputType = {
    id: number
    commande_id: number
    type_produit: number
    tissu: number
    couleur_boutons: number
    couleur_fils: number
    personnalisations: number
    date_personnalisation: number
    _all: number
  }


  export type PersonnalisationAvgAggregateInputType = {
    commande_id?: true
  }

  export type PersonnalisationSumAggregateInputType = {
    commande_id?: true
  }

  export type PersonnalisationMinAggregateInputType = {
    id?: true
    commande_id?: true
    type_produit?: true
    tissu?: true
    couleur_boutons?: true
    couleur_fils?: true
    date_personnalisation?: true
  }

  export type PersonnalisationMaxAggregateInputType = {
    id?: true
    commande_id?: true
    type_produit?: true
    tissu?: true
    couleur_boutons?: true
    couleur_fils?: true
    date_personnalisation?: true
  }

  export type PersonnalisationCountAggregateInputType = {
    id?: true
    commande_id?: true
    type_produit?: true
    tissu?: true
    couleur_boutons?: true
    couleur_fils?: true
    personnalisations?: true
    date_personnalisation?: true
    _all?: true
  }

  export type PersonnalisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personnalisation to aggregate.
     */
    where?: PersonnalisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnalisations to fetch.
     */
    orderBy?: PersonnalisationOrderByWithRelationInput | PersonnalisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonnalisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnalisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnalisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personnalisations
    **/
    _count?: true | PersonnalisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonnalisationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonnalisationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonnalisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonnalisationMaxAggregateInputType
  }

  export type GetPersonnalisationAggregateType<T extends PersonnalisationAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonnalisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonnalisation[P]>
      : GetScalarType<T[P], AggregatePersonnalisation[P]>
  }




  export type PersonnalisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonnalisationWhereInput
    orderBy?: PersonnalisationOrderByWithAggregationInput | PersonnalisationOrderByWithAggregationInput[]
    by: PersonnalisationScalarFieldEnum[] | PersonnalisationScalarFieldEnum
    having?: PersonnalisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonnalisationCountAggregateInputType | true
    _avg?: PersonnalisationAvgAggregateInputType
    _sum?: PersonnalisationSumAggregateInputType
    _min?: PersonnalisationMinAggregateInputType
    _max?: PersonnalisationMaxAggregateInputType
  }

  export type PersonnalisationGroupByOutputType = {
    id: string
    commande_id: number
    type_produit: string
    tissu: string
    couleur_boutons: string
    couleur_fils: string
    personnalisations: JsonValue
    date_personnalisation: Date
    _count: PersonnalisationCountAggregateOutputType | null
    _avg: PersonnalisationAvgAggregateOutputType | null
    _sum: PersonnalisationSumAggregateOutputType | null
    _min: PersonnalisationMinAggregateOutputType | null
    _max: PersonnalisationMaxAggregateOutputType | null
  }

  type GetPersonnalisationGroupByPayload<T extends PersonnalisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonnalisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonnalisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonnalisationGroupByOutputType[P]>
            : GetScalarType<T[P], PersonnalisationGroupByOutputType[P]>
        }
      >
    >


  export type PersonnalisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commande_id?: boolean
    type_produit?: boolean
    tissu?: boolean
    couleur_boutons?: boolean
    couleur_fils?: boolean
    personnalisations?: boolean
    date_personnalisation?: boolean
  }, ExtArgs["result"]["personnalisation"]>


  export type PersonnalisationSelectScalar = {
    id?: boolean
    commande_id?: boolean
    type_produit?: boolean
    tissu?: boolean
    couleur_boutons?: boolean
    couleur_fils?: boolean
    personnalisations?: boolean
    date_personnalisation?: boolean
  }


  export type $PersonnalisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personnalisation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commande_id: number
      type_produit: string
      tissu: string
      couleur_boutons: string
      couleur_fils: string
      personnalisations: Prisma.JsonValue
      date_personnalisation: Date
    }, ExtArgs["result"]["personnalisation"]>
    composites: {}
  }

  type PersonnalisationGetPayload<S extends boolean | null | undefined | PersonnalisationDefaultArgs> = $Result.GetResult<Prisma.$PersonnalisationPayload, S>

  type PersonnalisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonnalisationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonnalisationCountAggregateInputType | true
    }

  export interface PersonnalisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personnalisation'], meta: { name: 'Personnalisation' } }
    /**
     * Find zero or one Personnalisation that matches the filter.
     * @param {PersonnalisationFindUniqueArgs} args - Arguments to find a Personnalisation
     * @example
     * // Get one Personnalisation
     * const personnalisation = await prisma.personnalisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonnalisationFindUniqueArgs>(args: SelectSubset<T, PersonnalisationFindUniqueArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Personnalisation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonnalisationFindUniqueOrThrowArgs} args - Arguments to find a Personnalisation
     * @example
     * // Get one Personnalisation
     * const personnalisation = await prisma.personnalisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonnalisationFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonnalisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Personnalisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationFindFirstArgs} args - Arguments to find a Personnalisation
     * @example
     * // Get one Personnalisation
     * const personnalisation = await prisma.personnalisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonnalisationFindFirstArgs>(args?: SelectSubset<T, PersonnalisationFindFirstArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Personnalisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationFindFirstOrThrowArgs} args - Arguments to find a Personnalisation
     * @example
     * // Get one Personnalisation
     * const personnalisation = await prisma.personnalisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonnalisationFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonnalisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Personnalisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personnalisations
     * const personnalisations = await prisma.personnalisation.findMany()
     * 
     * // Get first 10 Personnalisations
     * const personnalisations = await prisma.personnalisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personnalisationWithIdOnly = await prisma.personnalisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonnalisationFindManyArgs>(args?: SelectSubset<T, PersonnalisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Personnalisation.
     * @param {PersonnalisationCreateArgs} args - Arguments to create a Personnalisation.
     * @example
     * // Create one Personnalisation
     * const Personnalisation = await prisma.personnalisation.create({
     *   data: {
     *     // ... data to create a Personnalisation
     *   }
     * })
     * 
     */
    create<T extends PersonnalisationCreateArgs>(args: SelectSubset<T, PersonnalisationCreateArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Personnalisations.
     * @param {PersonnalisationCreateManyArgs} args - Arguments to create many Personnalisations.
     * @example
     * // Create many Personnalisations
     * const personnalisation = await prisma.personnalisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonnalisationCreateManyArgs>(args?: SelectSubset<T, PersonnalisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personnalisation.
     * @param {PersonnalisationDeleteArgs} args - Arguments to delete one Personnalisation.
     * @example
     * // Delete one Personnalisation
     * const Personnalisation = await prisma.personnalisation.delete({
     *   where: {
     *     // ... filter to delete one Personnalisation
     *   }
     * })
     * 
     */
    delete<T extends PersonnalisationDeleteArgs>(args: SelectSubset<T, PersonnalisationDeleteArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Personnalisation.
     * @param {PersonnalisationUpdateArgs} args - Arguments to update one Personnalisation.
     * @example
     * // Update one Personnalisation
     * const personnalisation = await prisma.personnalisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonnalisationUpdateArgs>(args: SelectSubset<T, PersonnalisationUpdateArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Personnalisations.
     * @param {PersonnalisationDeleteManyArgs} args - Arguments to filter Personnalisations to delete.
     * @example
     * // Delete a few Personnalisations
     * const { count } = await prisma.personnalisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonnalisationDeleteManyArgs>(args?: SelectSubset<T, PersonnalisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personnalisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personnalisations
     * const personnalisation = await prisma.personnalisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonnalisationUpdateManyArgs>(args: SelectSubset<T, PersonnalisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personnalisation.
     * @param {PersonnalisationUpsertArgs} args - Arguments to update or create a Personnalisation.
     * @example
     * // Update or create a Personnalisation
     * const personnalisation = await prisma.personnalisation.upsert({
     *   create: {
     *     // ... data to create a Personnalisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personnalisation we want to update
     *   }
     * })
     */
    upsert<T extends PersonnalisationUpsertArgs>(args: SelectSubset<T, PersonnalisationUpsertArgs<ExtArgs>>): Prisma__PersonnalisationClient<$Result.GetResult<Prisma.$PersonnalisationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Personnalisations that matches the filter.
     * @param {PersonnalisationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const personnalisation = await prisma.personnalisation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: PersonnalisationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Personnalisation.
     * @param {PersonnalisationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const personnalisation = await prisma.personnalisation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PersonnalisationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Personnalisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationCountArgs} args - Arguments to filter Personnalisations to count.
     * @example
     * // Count the number of Personnalisations
     * const count = await prisma.personnalisation.count({
     *   where: {
     *     // ... the filter for the Personnalisations we want to count
     *   }
     * })
    **/
    count<T extends PersonnalisationCountArgs>(
      args?: Subset<T, PersonnalisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonnalisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personnalisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonnalisationAggregateArgs>(args: Subset<T, PersonnalisationAggregateArgs>): Prisma.PrismaPromise<GetPersonnalisationAggregateType<T>>

    /**
     * Group by Personnalisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnalisationGroupByArgs} args - Group by arguments.
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
      T extends PersonnalisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonnalisationGroupByArgs['orderBy'] }
        : { orderBy?: PersonnalisationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonnalisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonnalisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personnalisation model
   */
  readonly fields: PersonnalisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personnalisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonnalisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Personnalisation model
   */ 
  interface PersonnalisationFieldRefs {
    readonly id: FieldRef<"Personnalisation", 'String'>
    readonly commande_id: FieldRef<"Personnalisation", 'Int'>
    readonly type_produit: FieldRef<"Personnalisation", 'String'>
    readonly tissu: FieldRef<"Personnalisation", 'String'>
    readonly couleur_boutons: FieldRef<"Personnalisation", 'String'>
    readonly couleur_fils: FieldRef<"Personnalisation", 'String'>
    readonly personnalisations: FieldRef<"Personnalisation", 'Json'>
    readonly date_personnalisation: FieldRef<"Personnalisation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Personnalisation findUnique
   */
  export type PersonnalisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * Filter, which Personnalisation to fetch.
     */
    where: PersonnalisationWhereUniqueInput
  }

  /**
   * Personnalisation findUniqueOrThrow
   */
  export type PersonnalisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * Filter, which Personnalisation to fetch.
     */
    where: PersonnalisationWhereUniqueInput
  }

  /**
   * Personnalisation findFirst
   */
  export type PersonnalisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * Filter, which Personnalisation to fetch.
     */
    where?: PersonnalisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnalisations to fetch.
     */
    orderBy?: PersonnalisationOrderByWithRelationInput | PersonnalisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personnalisations.
     */
    cursor?: PersonnalisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnalisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnalisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personnalisations.
     */
    distinct?: PersonnalisationScalarFieldEnum | PersonnalisationScalarFieldEnum[]
  }

  /**
   * Personnalisation findFirstOrThrow
   */
  export type PersonnalisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * Filter, which Personnalisation to fetch.
     */
    where?: PersonnalisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnalisations to fetch.
     */
    orderBy?: PersonnalisationOrderByWithRelationInput | PersonnalisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personnalisations.
     */
    cursor?: PersonnalisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnalisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnalisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personnalisations.
     */
    distinct?: PersonnalisationScalarFieldEnum | PersonnalisationScalarFieldEnum[]
  }

  /**
   * Personnalisation findMany
   */
  export type PersonnalisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * Filter, which Personnalisations to fetch.
     */
    where?: PersonnalisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnalisations to fetch.
     */
    orderBy?: PersonnalisationOrderByWithRelationInput | PersonnalisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personnalisations.
     */
    cursor?: PersonnalisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnalisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnalisations.
     */
    skip?: number
    distinct?: PersonnalisationScalarFieldEnum | PersonnalisationScalarFieldEnum[]
  }

  /**
   * Personnalisation create
   */
  export type PersonnalisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * The data needed to create a Personnalisation.
     */
    data: XOR<PersonnalisationCreateInput, PersonnalisationUncheckedCreateInput>
  }

  /**
   * Personnalisation createMany
   */
  export type PersonnalisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personnalisations.
     */
    data: PersonnalisationCreateManyInput | PersonnalisationCreateManyInput[]
  }

  /**
   * Personnalisation update
   */
  export type PersonnalisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * The data needed to update a Personnalisation.
     */
    data: XOR<PersonnalisationUpdateInput, PersonnalisationUncheckedUpdateInput>
    /**
     * Choose, which Personnalisation to update.
     */
    where: PersonnalisationWhereUniqueInput
  }

  /**
   * Personnalisation updateMany
   */
  export type PersonnalisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personnalisations.
     */
    data: XOR<PersonnalisationUpdateManyMutationInput, PersonnalisationUncheckedUpdateManyInput>
    /**
     * Filter which Personnalisations to update
     */
    where?: PersonnalisationWhereInput
  }

  /**
   * Personnalisation upsert
   */
  export type PersonnalisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * The filter to search for the Personnalisation to update in case it exists.
     */
    where: PersonnalisationWhereUniqueInput
    /**
     * In case the Personnalisation found by the `where` argument doesn't exist, create a new Personnalisation with this data.
     */
    create: XOR<PersonnalisationCreateInput, PersonnalisationUncheckedCreateInput>
    /**
     * In case the Personnalisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonnalisationUpdateInput, PersonnalisationUncheckedUpdateInput>
  }

  /**
   * Personnalisation delete
   */
  export type PersonnalisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
    /**
     * Filter which Personnalisation to delete.
     */
    where: PersonnalisationWhereUniqueInput
  }

  /**
   * Personnalisation deleteMany
   */
  export type PersonnalisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personnalisations to delete
     */
    where?: PersonnalisationWhereInput
  }

  /**
   * Personnalisation findRaw
   */
  export type PersonnalisationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Personnalisation aggregateRaw
   */
  export type PersonnalisationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Personnalisation without action
   */
  export type PersonnalisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnalisation
     */
    select?: PersonnalisationSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const MesureScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    commande_id: 'commande_id',
    manches: 'manches',
    epaules: 'epaules',
    poitrine: 'poitrine',
    ventre: 'ventre',
    jambes: 'jambes',
    taille: 'taille',
    hanche: 'hanche',
    cuisse: 'cuisse',
    date_enregistrement: 'date_enregistrement'
  };

  export type MesureScalarFieldEnum = (typeof MesureScalarFieldEnum)[keyof typeof MesureScalarFieldEnum]


  export const PersonnalisationScalarFieldEnum: {
    id: 'id',
    commande_id: 'commande_id',
    type_produit: 'type_produit',
    tissu: 'tissu',
    couleur_boutons: 'couleur_boutons',
    couleur_fils: 'couleur_fils',
    personnalisations: 'personnalisations',
    date_personnalisation: 'date_personnalisation'
  };

  export type PersonnalisationScalarFieldEnum = (typeof PersonnalisationScalarFieldEnum)[keyof typeof PersonnalisationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Deep Input Types
   */


  export type MesureWhereInput = {
    AND?: MesureWhereInput | MesureWhereInput[]
    OR?: MesureWhereInput[]
    NOT?: MesureWhereInput | MesureWhereInput[]
    id?: StringFilter<"Mesure"> | string
    user_id?: IntFilter<"Mesure"> | number
    commande_id?: IntFilter<"Mesure"> | number
    manches?: FloatFilter<"Mesure"> | number
    epaules?: FloatFilter<"Mesure"> | number
    poitrine?: FloatFilter<"Mesure"> | number
    ventre?: FloatFilter<"Mesure"> | number
    jambes?: FloatFilter<"Mesure"> | number
    taille?: FloatFilter<"Mesure"> | number
    hanche?: FloatFilter<"Mesure"> | number
    cuisse?: FloatFilter<"Mesure"> | number
    date_enregistrement?: DateTimeFilter<"Mesure"> | Date | string
  }

  export type MesureOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
    date_enregistrement?: SortOrder
  }

  export type MesureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MesureWhereInput | MesureWhereInput[]
    OR?: MesureWhereInput[]
    NOT?: MesureWhereInput | MesureWhereInput[]
    user_id?: IntFilter<"Mesure"> | number
    commande_id?: IntFilter<"Mesure"> | number
    manches?: FloatFilter<"Mesure"> | number
    epaules?: FloatFilter<"Mesure"> | number
    poitrine?: FloatFilter<"Mesure"> | number
    ventre?: FloatFilter<"Mesure"> | number
    jambes?: FloatFilter<"Mesure"> | number
    taille?: FloatFilter<"Mesure"> | number
    hanche?: FloatFilter<"Mesure"> | number
    cuisse?: FloatFilter<"Mesure"> | number
    date_enregistrement?: DateTimeFilter<"Mesure"> | Date | string
  }, "id">

  export type MesureOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
    date_enregistrement?: SortOrder
    _count?: MesureCountOrderByAggregateInput
    _avg?: MesureAvgOrderByAggregateInput
    _max?: MesureMaxOrderByAggregateInput
    _min?: MesureMinOrderByAggregateInput
    _sum?: MesureSumOrderByAggregateInput
  }

  export type MesureScalarWhereWithAggregatesInput = {
    AND?: MesureScalarWhereWithAggregatesInput | MesureScalarWhereWithAggregatesInput[]
    OR?: MesureScalarWhereWithAggregatesInput[]
    NOT?: MesureScalarWhereWithAggregatesInput | MesureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mesure"> | string
    user_id?: IntWithAggregatesFilter<"Mesure"> | number
    commande_id?: IntWithAggregatesFilter<"Mesure"> | number
    manches?: FloatWithAggregatesFilter<"Mesure"> | number
    epaules?: FloatWithAggregatesFilter<"Mesure"> | number
    poitrine?: FloatWithAggregatesFilter<"Mesure"> | number
    ventre?: FloatWithAggregatesFilter<"Mesure"> | number
    jambes?: FloatWithAggregatesFilter<"Mesure"> | number
    taille?: FloatWithAggregatesFilter<"Mesure"> | number
    hanche?: FloatWithAggregatesFilter<"Mesure"> | number
    cuisse?: FloatWithAggregatesFilter<"Mesure"> | number
    date_enregistrement?: DateTimeWithAggregatesFilter<"Mesure"> | Date | string
  }

  export type PersonnalisationWhereInput = {
    AND?: PersonnalisationWhereInput | PersonnalisationWhereInput[]
    OR?: PersonnalisationWhereInput[]
    NOT?: PersonnalisationWhereInput | PersonnalisationWhereInput[]
    id?: StringFilter<"Personnalisation"> | string
    commande_id?: IntFilter<"Personnalisation"> | number
    type_produit?: StringFilter<"Personnalisation"> | string
    tissu?: StringFilter<"Personnalisation"> | string
    couleur_boutons?: StringFilter<"Personnalisation"> | string
    couleur_fils?: StringFilter<"Personnalisation"> | string
    personnalisations?: JsonFilter<"Personnalisation">
    date_personnalisation?: DateTimeFilter<"Personnalisation"> | Date | string
  }

  export type PersonnalisationOrderByWithRelationInput = {
    id?: SortOrder
    commande_id?: SortOrder
    type_produit?: SortOrder
    tissu?: SortOrder
    couleur_boutons?: SortOrder
    couleur_fils?: SortOrder
    personnalisations?: SortOrder
    date_personnalisation?: SortOrder
  }

  export type PersonnalisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonnalisationWhereInput | PersonnalisationWhereInput[]
    OR?: PersonnalisationWhereInput[]
    NOT?: PersonnalisationWhereInput | PersonnalisationWhereInput[]
    commande_id?: IntFilter<"Personnalisation"> | number
    type_produit?: StringFilter<"Personnalisation"> | string
    tissu?: StringFilter<"Personnalisation"> | string
    couleur_boutons?: StringFilter<"Personnalisation"> | string
    couleur_fils?: StringFilter<"Personnalisation"> | string
    personnalisations?: JsonFilter<"Personnalisation">
    date_personnalisation?: DateTimeFilter<"Personnalisation"> | Date | string
  }, "id">

  export type PersonnalisationOrderByWithAggregationInput = {
    id?: SortOrder
    commande_id?: SortOrder
    type_produit?: SortOrder
    tissu?: SortOrder
    couleur_boutons?: SortOrder
    couleur_fils?: SortOrder
    personnalisations?: SortOrder
    date_personnalisation?: SortOrder
    _count?: PersonnalisationCountOrderByAggregateInput
    _avg?: PersonnalisationAvgOrderByAggregateInput
    _max?: PersonnalisationMaxOrderByAggregateInput
    _min?: PersonnalisationMinOrderByAggregateInput
    _sum?: PersonnalisationSumOrderByAggregateInput
  }

  export type PersonnalisationScalarWhereWithAggregatesInput = {
    AND?: PersonnalisationScalarWhereWithAggregatesInput | PersonnalisationScalarWhereWithAggregatesInput[]
    OR?: PersonnalisationScalarWhereWithAggregatesInput[]
    NOT?: PersonnalisationScalarWhereWithAggregatesInput | PersonnalisationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Personnalisation"> | string
    commande_id?: IntWithAggregatesFilter<"Personnalisation"> | number
    type_produit?: StringWithAggregatesFilter<"Personnalisation"> | string
    tissu?: StringWithAggregatesFilter<"Personnalisation"> | string
    couleur_boutons?: StringWithAggregatesFilter<"Personnalisation"> | string
    couleur_fils?: StringWithAggregatesFilter<"Personnalisation"> | string
    personnalisations?: JsonWithAggregatesFilter<"Personnalisation">
    date_personnalisation?: DateTimeWithAggregatesFilter<"Personnalisation"> | Date | string
  }

  export type MesureCreateInput = {
    id?: string
    user_id: number
    commande_id: number
    manches: number
    epaules: number
    poitrine: number
    ventre: number
    jambes: number
    taille: number
    hanche: number
    cuisse: number
    date_enregistrement?: Date | string
  }

  export type MesureUncheckedCreateInput = {
    id?: string
    user_id: number
    commande_id: number
    manches: number
    epaules: number
    poitrine: number
    ventre: number
    jambes: number
    taille: number
    hanche: number
    cuisse: number
    date_enregistrement?: Date | string
  }

  export type MesureUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    commande_id?: IntFieldUpdateOperationsInput | number
    manches?: FloatFieldUpdateOperationsInput | number
    epaules?: FloatFieldUpdateOperationsInput | number
    poitrine?: FloatFieldUpdateOperationsInput | number
    ventre?: FloatFieldUpdateOperationsInput | number
    jambes?: FloatFieldUpdateOperationsInput | number
    taille?: FloatFieldUpdateOperationsInput | number
    hanche?: FloatFieldUpdateOperationsInput | number
    cuisse?: FloatFieldUpdateOperationsInput | number
    date_enregistrement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesureUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    commande_id?: IntFieldUpdateOperationsInput | number
    manches?: FloatFieldUpdateOperationsInput | number
    epaules?: FloatFieldUpdateOperationsInput | number
    poitrine?: FloatFieldUpdateOperationsInput | number
    ventre?: FloatFieldUpdateOperationsInput | number
    jambes?: FloatFieldUpdateOperationsInput | number
    taille?: FloatFieldUpdateOperationsInput | number
    hanche?: FloatFieldUpdateOperationsInput | number
    cuisse?: FloatFieldUpdateOperationsInput | number
    date_enregistrement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesureCreateManyInput = {
    id?: string
    user_id: number
    commande_id: number
    manches: number
    epaules: number
    poitrine: number
    ventre: number
    jambes: number
    taille: number
    hanche: number
    cuisse: number
    date_enregistrement?: Date | string
  }

  export type MesureUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    commande_id?: IntFieldUpdateOperationsInput | number
    manches?: FloatFieldUpdateOperationsInput | number
    epaules?: FloatFieldUpdateOperationsInput | number
    poitrine?: FloatFieldUpdateOperationsInput | number
    ventre?: FloatFieldUpdateOperationsInput | number
    jambes?: FloatFieldUpdateOperationsInput | number
    taille?: FloatFieldUpdateOperationsInput | number
    hanche?: FloatFieldUpdateOperationsInput | number
    cuisse?: FloatFieldUpdateOperationsInput | number
    date_enregistrement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MesureUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    commande_id?: IntFieldUpdateOperationsInput | number
    manches?: FloatFieldUpdateOperationsInput | number
    epaules?: FloatFieldUpdateOperationsInput | number
    poitrine?: FloatFieldUpdateOperationsInput | number
    ventre?: FloatFieldUpdateOperationsInput | number
    jambes?: FloatFieldUpdateOperationsInput | number
    taille?: FloatFieldUpdateOperationsInput | number
    hanche?: FloatFieldUpdateOperationsInput | number
    cuisse?: FloatFieldUpdateOperationsInput | number
    date_enregistrement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnalisationCreateInput = {
    id?: string
    commande_id: number
    type_produit: string
    tissu: string
    couleur_boutons: string
    couleur_fils: string
    personnalisations: InputJsonValue
    date_personnalisation?: Date | string
  }

  export type PersonnalisationUncheckedCreateInput = {
    id?: string
    commande_id: number
    type_produit: string
    tissu: string
    couleur_boutons: string
    couleur_fils: string
    personnalisations: InputJsonValue
    date_personnalisation?: Date | string
  }

  export type PersonnalisationUpdateInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    type_produit?: StringFieldUpdateOperationsInput | string
    tissu?: StringFieldUpdateOperationsInput | string
    couleur_boutons?: StringFieldUpdateOperationsInput | string
    couleur_fils?: StringFieldUpdateOperationsInput | string
    personnalisations?: InputJsonValue | InputJsonValue
    date_personnalisation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnalisationUncheckedUpdateInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    type_produit?: StringFieldUpdateOperationsInput | string
    tissu?: StringFieldUpdateOperationsInput | string
    couleur_boutons?: StringFieldUpdateOperationsInput | string
    couleur_fils?: StringFieldUpdateOperationsInput | string
    personnalisations?: InputJsonValue | InputJsonValue
    date_personnalisation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnalisationCreateManyInput = {
    id?: string
    commande_id: number
    type_produit: string
    tissu: string
    couleur_boutons: string
    couleur_fils: string
    personnalisations: InputJsonValue
    date_personnalisation?: Date | string
  }

  export type PersonnalisationUpdateManyMutationInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    type_produit?: StringFieldUpdateOperationsInput | string
    tissu?: StringFieldUpdateOperationsInput | string
    couleur_boutons?: StringFieldUpdateOperationsInput | string
    couleur_fils?: StringFieldUpdateOperationsInput | string
    personnalisations?: InputJsonValue | InputJsonValue
    date_personnalisation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnalisationUncheckedUpdateManyInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    type_produit?: StringFieldUpdateOperationsInput | string
    tissu?: StringFieldUpdateOperationsInput | string
    couleur_boutons?: StringFieldUpdateOperationsInput | string
    couleur_fils?: StringFieldUpdateOperationsInput | string
    personnalisations?: InputJsonValue | InputJsonValue
    date_personnalisation?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type MesureCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
    date_enregistrement?: SortOrder
  }

  export type MesureAvgOrderByAggregateInput = {
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
  }

  export type MesureMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
    date_enregistrement?: SortOrder
  }

  export type MesureMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
    date_enregistrement?: SortOrder
  }

  export type MesureSumOrderByAggregateInput = {
    user_id?: SortOrder
    commande_id?: SortOrder
    manches?: SortOrder
    epaules?: SortOrder
    poitrine?: SortOrder
    ventre?: SortOrder
    jambes?: SortOrder
    taille?: SortOrder
    hanche?: SortOrder
    cuisse?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type PersonnalisationCountOrderByAggregateInput = {
    id?: SortOrder
    commande_id?: SortOrder
    type_produit?: SortOrder
    tissu?: SortOrder
    couleur_boutons?: SortOrder
    couleur_fils?: SortOrder
    personnalisations?: SortOrder
    date_personnalisation?: SortOrder
  }

  export type PersonnalisationAvgOrderByAggregateInput = {
    commande_id?: SortOrder
  }

  export type PersonnalisationMaxOrderByAggregateInput = {
    id?: SortOrder
    commande_id?: SortOrder
    type_produit?: SortOrder
    tissu?: SortOrder
    couleur_boutons?: SortOrder
    couleur_fils?: SortOrder
    date_personnalisation?: SortOrder
  }

  export type PersonnalisationMinOrderByAggregateInput = {
    id?: SortOrder
    commande_id?: SortOrder
    type_produit?: SortOrder
    tissu?: SortOrder
    couleur_boutons?: SortOrder
    couleur_fils?: SortOrder
    date_personnalisation?: SortOrder
  }

  export type PersonnalisationSumOrderByAggregateInput = {
    commande_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MesureDefaultArgs instead
     */
    export type MesureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MesureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonnalisationDefaultArgs instead
     */
    export type PersonnalisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonnalisationDefaultArgs<ExtArgs>

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