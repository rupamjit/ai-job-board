import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { JobListingTable } from "./jobListing";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";

export const OrganizationTable = pgTable("organizations",{
    id:varchar().primaryKey(),
    name:varchar().notNull(),
    imageUrl:varchar().notNull(),
    createdAt,
    updatedAt
})


export const organizationRelations = relations(
    OrganizationTable,
    ({ many }) => ({
      jobListings: many(JobListingTable),
      organizationUserSettings: many(OrganizationUserSettingsTable),
    })
  )