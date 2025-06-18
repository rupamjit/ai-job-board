import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelper";
import { UserResumeTable } from "./userResume";
import { UserNotificationSettingsTable } from "./userNotificationSettings";
import { relations } from "drizzle-orm";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";

export const userTable = pgTable("users",{
    id:varchar().primaryKey(),
    name:varchar().notNull(),
    imageUrl:varchar().notNull(),
    email:varchar().notNull().unique(),
    createdAt,
    updatedAt
})


export const userRelations = relations(userTable, ({ one, many }) => ({
    notificationSettings: one(UserNotificationSettingsTable),
    resume: one(UserResumeTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
  }))