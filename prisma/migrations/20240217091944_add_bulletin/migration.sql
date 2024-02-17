-- CreateTable
CREATE TABLE "bulletin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "is_editing" INTEGER NOT NULL,
    "edited_at" DATETIME NOT NULL
);
