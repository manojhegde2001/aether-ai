"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Trash, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function UsersClient({ initialUsers }: { initialUsers: User[] }) {
  const router = useRouter();
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRoleChange = async (id: string, newRole: string) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });
      if (res.ok) {
        setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u));
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        setUsers(users.filter(u => u.id !== id));
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input 
          placeholder="Search users by email or name..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm bg-white/5 border-white/10" 
        />
      </div>

      <div className="rounded-md border border-white/10 bg-white/5">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  {users.length === 0 ? "No users found." : "No users match your search."}
                </TableCell>
              </TableRow>
            ) : filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={user.role === "ADMIN" ? "bg-purple-500/20 text-purple-400 border-purple-500/30" : "bg-white/5"}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRoleChange(user.id, user.role === "ADMIN" ? "USER" : "ADMIN")} 
                      className="text-muted-foreground hover:text-white"
                    >
                      {user.role === "ADMIN" ? <Shield className="h-4 w-4 mr-1" /> : <ShieldAlert className="h-4 w-4 mr-1" />}
                      Toggle Role
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(user.id)} className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-400/10">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
