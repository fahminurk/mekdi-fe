import { useUserContext } from "@/context/useUserContext";

export default function DashboardPage() {
  const { payload } = useUserContext();
  return <div>{payload?.email}</div>;
}
