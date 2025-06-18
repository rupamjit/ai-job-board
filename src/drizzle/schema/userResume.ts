import { pgTable, varchar } from "drizzle-orm/pg-core"
import { userTable } from "./user"
import { relations } from "drizzle-orm"
import { createdAt, updatedAt } from "../schemaHelper"

export const UserResumeTable = pgTable("user_resumes", {
  userId: varchar()
    .primaryKey()
    .references(() => userTable.id),
  resumeFileUrl: varchar().notNull(),
  resumeFileKey: varchar().notNull(),
  aiSummary: varchar(),
  createdAt,
  updatedAt,
})

export const userResumeRelations = relations(UserResumeTable, ({ one }) => ({
    user: one(userTable, {
      fields: [UserResumeTable.userId],
      references: [userTable.id],
    }),
  }))