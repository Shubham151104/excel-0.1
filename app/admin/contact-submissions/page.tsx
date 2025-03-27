'use client';

import { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Single fetch on mount with AbortController
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch('/api/contact', {
          signal: abortController.signal,
          method: 'GET',
          headers: {
            'Authorization': 'Bearer 1231'
          }
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = '/admin';
            return;
          }
          throw new Error('Failed to fetch submissions');
        }
        
        const data = await response.json();
        setSubmissions(data);
      } catch (err) {
        if (err.name === 'AbortError') return;
        
        toast({
          title: "Error",
          description: "Failed to load submissions",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function to abort fetch on unmount
    return () => {
      abortController.abort();
    };
  }, []); // Empty dependency array

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer 1231'
        }
      });
      
      if (!response.ok) throw new Error('Failed to refresh');
      
      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to refresh submissions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await fetch('/api/contact/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 1231'
        },
        body: JSON.stringify({ id })
      });

      if (!response.ok) throw new Error('Failed to delete submission');

      // Remove the deleted submission from state
      setSubmissions(submissions.filter(sub => sub._id !== id));
      
      toast({
        variant: "default",
        title: "Success",
        description: "Submission deleted successfully"
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to delete submission",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Form Submissions</h1>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Refresh
        </button>
      </div>
      
      {submissions.length === 0 ? (
        <p className="text-gray-500">No submissions yet.</p>
      ) : (
        <div className="grid gap-4">
          {submissions.map((submission) => (
            <div 
              key={submission._id} 
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <span className="font-semibold">Name:</span> {submission.name}
                </div>
                <div>
                  <span className="font-semibold">Email:</span> {submission.email}
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> {submission.phone || 'N/A'}
                </div>
                <div>
                  <span className="font-semibold">Subject:</span> {submission.subject}
                </div>
                <div className="md:col-span-2">
                  <span className="font-semibold">Message:</span>
                  <p className="mt-1 whitespace-pre-wrap">{submission.message}</p>
                </div>
                <div className="md:col-span-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Submitted on: {new Date(submission.createdAt).toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleDelete(submission._id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 