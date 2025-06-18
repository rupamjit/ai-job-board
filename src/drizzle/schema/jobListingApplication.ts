import {
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { JobListingTable } from "./jobListing";
import { userTable } from "./user";
import { relations } from "drizzle-orm";
import { createdAt, updatedAt } from "../schemaHelper";

export const applicationStages = [
  "denied",
  "applied",
  "interested",
  "interviewed",
  "hired",
] as const;
export const applicationStageEnum = pgEnum(
  "job_listing_applications_stage",
  applicationStages
);

export const JobListingApplicationTable = pgTable(
  "job_listing_applications",
  {
    jobListingId: uuid()
      .references(() => JobListingTable.id, { onDelete: "cascade" })
      .notNull(),
    userId: varchar()
      .references(() => userTable.id, { onDelete: "cascade" })
      .notNull(),
    coverLetter: text(),
    rating: integer(),
    stage: applicationStageEnum().notNull().default("applied"),
    createdAt,
    updatedAt,
  },
  (table) => [primaryKey({ columns: [table.jobListingId, table.userId] })]
);


export const jobListingApplicationRelations = relations(
    JobListingApplicationTable,
    ({ one }) => ({
      jobListing: one(JobListingTable, {
        fields: [JobListingApplicationTable.jobListingId],
        references: [JobListingTable.id],
      }),
      user: one(userTable, {
        fields: [JobListingApplicationTable.userId],
        references: [userTable.id],
      }),
    })
  )