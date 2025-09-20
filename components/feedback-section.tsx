"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Feedback {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

const supabase = createClient()

export function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchFeedback = async () => {
    try {
      console.log("[v0] Fetching feedback from database...")
      const { data, error } = await supabase.from("feedback").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("[v0] Error fetching feedback:", error)
        throw error
      }

      console.log("[v0] Feedback fetched successfully:", data)
      setFeedbacks(data || [])
      setError(null)
    } catch (err) {
      console.error("[v0] Error in fetchFeedback:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch feedback")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) {
      setError("Please fill in all fields")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      console.log("[v0] Submitting feedback:", { name: name.trim(), message: message.trim(), rating })

      const { data, error } = await supabase
        .from("feedback")
        .insert({
          name: name.trim(),
          message: message.trim(),
          rating,
        })
        .select()
        .single()

      if (error) {
        console.error("[v0] Error inserting feedback:", error)
        throw error
      }

      console.log("[v0] Feedback submitted successfully:", data)

      // Add to local state immediately
      setFeedbacks((prev) => [data, ...prev])

      // Reset form
      setName("")
      setMessage("")
      setRating(5)
    } catch (err) {
      console.error("[v0] Error in handleSubmit:", err)
      setError(err instanceof Error ? err.message : "Failed to submit feedback")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "fill-accent text-accent" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-accent transition-colors" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Feedback</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your thoughts about my work. Your feedback helps me grow and improve as a model.
          </p>
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">Leave Your Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="border-gray-200 focus:border-accent focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Feedback Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Share your thoughts..."
                    rows={4}
                    className="border-gray-200 focus:border-accent focus:ring-accent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Rating</label>
                  {renderStars(rating, true, setRating)}
                </div>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Display */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">What People Are Saying</h3>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading feedback...</p>
            </div>
          ) : feedbacks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No feedback yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {feedbacks.map((feedback) => (
                <Card key={feedback.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-charcoal text-lg">{feedback.name}</h4>
                        <p className="text-sm text-gray-500">{formatDate(feedback.created_at)}</p>
                      </div>
                      {renderStars(feedback.rating)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feedback.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
