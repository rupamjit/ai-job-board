import { boolean, pgTable, varchar } from "drizzle-orm/pg-core"
import { userTable } from "./user"
import { relations } from "drizzle-orm"
import { createdAt, updatedAt } from "../schemaHelper"

export const UserNotificationSettingsTable = pgTable(
  "user_notification_settings",
  {
    userId: varchar()
      .primaryKey()
      .references(() => userTable.id),
    newJobEmailNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt,
    updatedAt,
  }
)

export const userNotificationSettingsRelations = relations(
  UserNotificationSettingsTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [UserNotificationSettingsTable.userId],
      references: [userTable.id],
    }),
  })
)