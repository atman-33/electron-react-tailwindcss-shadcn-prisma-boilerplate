-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bulletin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "is_editing" INTEGER NOT NULL,
    "edited_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_bulletin" ("edited_at", "id", "is_editing", "message") SELECT "edited_at", "id", "is_editing", "message" FROM "bulletin";
DROP TABLE "bulletin";
ALTER TABLE "new_bulletin" RENAME TO "bulletin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
