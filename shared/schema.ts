import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  stock: integer("stock").notNull().default(10),
});

export const services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  duration: text("duration").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const dogs = pgTable("dogs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  breed: text("breed").notNull(),
  age: text("age").notNull(),
  size: text("size").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  personality: text("personality").notNull(),
  available: integer("available").notNull().default(1),
});

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  price: integer("price").notNull(),
  capacity: integer("capacity").notNull(),
  registered: integer("registered").notNull().default(0),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertDogSchema = createInsertSchema(dogs).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

export type InsertDog = z.infer<typeof insertDogSchema>;
export type Dog = typeof dogs.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
