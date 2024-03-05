-- CreateTable
CREATE TABLE "profile" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_email_key" ON "profile"("email");
