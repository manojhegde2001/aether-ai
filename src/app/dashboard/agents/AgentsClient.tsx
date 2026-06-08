"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, MoreHorizontal, Pencil, Trash } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
}

export default function AgentsClient({ initialAgents }: { initialAgents: Agent[] }) {
  const router = useRouter();
  const [agents, setAgents] = useState(initialAgents);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState<Agent | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    status: "ACTIVE",
  });

  const [isLoading, setIsLoading] = useState(false);

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredAgents.length / itemsPerPage) || 1;
  const paginatedAgents = filteredAgents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEditing) {
        const res = await fetch(`/api/agents/${isEditing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          const updated = await res.json();
          setAgents(agents.map(a => a.id === updated._id ? { ...updated, id: updated._id } : a));
          setIsOpen(false);
          setIsEditing(null);
        }
      } else {
        const res = await fetch("/api/agents", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          const newAgent = await res.json();
          setAgents([{ ...newAgent, id: newAgent._id }, ...agents]);
          setIsOpen(false);
        }
      }
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this agent?")) return;
    try {
      const res = await fetch(`/api/agents/${id}`, { method: "DELETE" });
      if (res.ok) {
        setAgents(agents.filter(a => a.id !== id));
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openEdit = (agent: Agent) => {
    setIsEditing(agent);
    setFormData({
      name: agent.name,
      description: agent.description,
      category: agent.category,
      status: agent.status,
    });
    setIsOpen(true);
  };

  const openCreate = () => {
    setIsEditing(null);
    setFormData({ name: "", description: "", category: "Customer Support", status: "ACTIVE" });
    setIsOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Input 
            placeholder="Search agents..." 
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="max-w-sm bg-background border-border" 
          />
          <Select value={statusFilter} onValueChange={(val) => { setStatusFilter(val || "ALL"); setCurrentPage(1); }}>
            <SelectTrigger className="w-[150px] bg-background border-border">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="ALL">All Statuses</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="INACTIVE">Inactive</SelectItem>
              <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger onClick={openCreate} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white border-0">
            <Plus className="mr-2 h-4 w-4" /> New Agent
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-popover text-popover-foreground border-border">
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Agent" : "Create Agent"}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {isEditing ? "Update your agent's configuration." : "Add a new agent to your workspace."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input 
                  id="description" 
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={val => setFormData({...formData, category: val || ""})}>
                  <SelectTrigger className="bg-background border-border w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="Customer Support">Customer Support</SelectItem>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Workflow Automation">Workflow Automation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {isEditing && (
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={val => setFormData({...formData, status: val || ""})}>
                    <SelectTrigger className="bg-background border-border w-full">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="ACTIVE">Active</SelectItem>
                      <SelectItem value="INACTIVE">Inactive</SelectItem>
                      <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <DialogFooter>
                <Button type="submit" disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 border-0 text-white">
                  {isLoading ? "Saving..." : "Save changes"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border border-white/10 bg-white/5">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAgents.length === 0 ? (
              <TableRow className="border-border hover:bg-muted/50">
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  {agents.length === 0 ? "No agents found. Create your first agent to get started." : "No agents match your filters."}
                </TableCell>
              </TableRow>
            ) : paginatedAgents.map((agent) => (
              <TableRow key={agent.id} className="border-border hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div>{agent.name}</div>
                  <div className="text-xs text-muted-foreground">{agent.description}</div>
                </TableCell>
                <TableCell>{agent.category}</TableCell>
                <TableCell>
                  <Badge variant={agent.status === "ACTIVE" ? "default" : "secondary"} className={agent.status === "ACTIVE" ? "bg-green-500/20 text-green-400 hover:bg-green-500/20 border-green-500/30" : ""}>
                    {agent.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(agent.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(agent)} className="h-8 w-8 text-muted-foreground hover:text-white border border-transparent hover:border-white/10 hover:bg-white/5">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(agent.id)} className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-400/10 border border-transparent hover:border-red-400/20">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="border-border hover:bg-muted/50"
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="border-border hover:bg-muted/50"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
