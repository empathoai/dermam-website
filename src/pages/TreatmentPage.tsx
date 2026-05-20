import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { tier3Treatments } from '../data/tier3Treatments';
import Tier3TreatmentTemplate from '../components/templates/Tier3TreatmentTemplate';

export default function TreatmentPage() {
  const { treatmentSlug } = useParams<{ treatmentSlug: string }>();

  if (!treatmentSlug) {
      return <Navigate to="/es" replace />;
  }

  const treatment = tier3Treatments.find(t => t.slugEs === treatmentSlug && t.isPublished);

  if (!treatment) {
    // Determine the most relevant hub based on potential slug matches or just fallback to home
    // For now, let's redirect to home or a 404 if we had one.
    // Based on user instructions: facial -> /es/tratamientos-faciales/ etc.
    // But since I don't know the intent of the unknown slug, I'll redirect to home for now.
    return <Navigate to="/es" replace />;
  }

  return <Tier3TreatmentTemplate treatment={treatment} />;
}
