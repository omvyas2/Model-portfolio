-- Create feedback table for storing user feedback
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to read and insert feedback
-- This is a public feedback system, so we allow anonymous access
CREATE POLICY "Allow anyone to view feedback" ON public.feedback
  FOR SELECT USING (true);

CREATE POLICY "Allow anyone to insert feedback" ON public.feedback
  FOR INSERT WITH CHECK (true);
