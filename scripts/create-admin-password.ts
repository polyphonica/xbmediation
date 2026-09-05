/**
 * One-time (or reset) provisioning of the single admin password. There is
 * deliberately no public sign-up page — this is how the very first password
 * gets set; after that, the business owner changes it himself via
 * /admin/settings.
 *
 * Usage: npx tsx scripts/create-admin-password.ts <password>
 */
import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  const password = process.argv[2];
  if (!password || password.length < 10) {
    console.error(
      "Usage: npx tsx scripts/create-admin-password.ts <password>\n" +
        "(password must be at least 10 characters)",
    );
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminCredential.upsert({
    where: { id: "singleton" },
    create: { id: "singleton", passwordHash },
    update: { passwordHash, failedAttempts: 0, lockedUntil: null },
  });

  console.log("Admin password set.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
