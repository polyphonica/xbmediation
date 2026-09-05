import { requireSession } from "@/lib/session";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default async function AuthenticatedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireSession();

  return (
    <>
      <AdminHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
