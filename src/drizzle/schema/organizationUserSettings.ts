import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  varchar,
} from "drizzle-orm/pg-core";
import { userTable } from "./user";
import { OrganizationTable } from "./organization";
import { relations } from "drizzle-orm";
import { createdAt, updatedAt } from "../schemaHelper";

export const OrganizationUserSettingsTable = pgTable(
  "organization_user_settings",
  {
    userId: varchar()
      .notNull()
      .references(() => userTable.id),
    organizationId: varchar()
      .notNull()
      .references(() => OrganizationTable.id),
    newApplicationEmailNotifications: boolean().notNull().default(false),
    minimumRating: integer(),
    createdAt,
    updatedAt,
  },
  (table) => [primaryKey({ columns: [table.userId, table.organizationId] })]
);


export const organizationUserSettingsRelations = relations(
    OrganizationUserSettingsTable,
    ({ one }) => ({
      user: one(userTable, {
        fields: [OrganizationUserSettingsTable.userId],
        references: [userTable.id],
      }),
      organization: one(OrganizationTable, {
        fields: [OrganizationUserSettingsTable.userId],
        references: [OrganizationTable.id],
      }),
    })
  )