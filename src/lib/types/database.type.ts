import type { SQL } from 'drizzle-orm'
import type { PgColumn, PgTable, TableConfig } from 'drizzle-orm/pg-core'

type DBOptions = {
  where?: SQL<unknown>
  pagination?: { limit: number; offset: number }
  orderBy?: PgColumn | SQL<unknown> | SQL.Aliased
}

type DBOptionsWithJoin<JoinTableType extends TableConfig> = DBOptions & {
  join: {
    joinTable: PgTable<JoinTableType>
    joinQuery: SQL<unknown> | undefined
    joinType: 'innerJoin' | 'leftJoin' | 'rightJoin' | 'fullJoin'
  }
}

export type { DBOptions, DBOptionsWithJoin }
