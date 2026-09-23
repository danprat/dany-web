import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/materi")({
  component: MateriLayout,
});

function MateriLayout() {
  return <Outlet />;
}
