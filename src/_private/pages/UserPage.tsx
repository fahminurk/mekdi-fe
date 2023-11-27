import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserQuery } from "@/action/useUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDeleteUserModal from "@/hooks/useDeleteUserModal";
import useAddUserModal from "@/hooks/useAddUserModal";
import { User } from "@/types";

export default function UserPage() {
  const { data } = useUserQuery();
  const user = data?.data;
  const { onOpen, setUser } = useDeleteUserModal();
  const addAdminModal = useAddUserModal();

  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">USER</div>
        <Button variant={"outline"} onClick={addAdminModal.onOpen}>
          Add
        </Button>
      </div>
      <div className="flex gap-2">
        <Input type="text" placeholder="Search" className="max-w-xs w-full" />
        <Select>
          <SelectTrigger className="max-w-[180px] w-full">
            <SelectValue placeholder="order by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="ASC">ASC</SelectItem>
            <SelectItem value="DESC">DESC</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user?.map((user: User, i: number) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button size={"sm"} variant={"outline"}>
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    onOpen();
                    setUser(user);
                  }}
                  size={"sm"}
                  variant={"destructive"}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
