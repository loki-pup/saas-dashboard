CREATE TABLE "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer,
	"rating" integer,
	"user_name" text,
	"user_email" text,
	"message" text
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"url" text,
	"user_id" varchar
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"subscribed" boolean
);
