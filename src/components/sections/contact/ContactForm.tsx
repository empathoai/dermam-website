import { useState, FormEvent } from 'react';
import { contactContent } from '../../../data/contactContent';
import FormField from '../../ui/FormField';
import SelectField from '../../ui/SelectField';
import TextareaField from '../../ui/TextareaField';
import Button from '../../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const { form } = contactContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // MOCK API CALL
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // TRACKING: Lead form submitted
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[32px] border border-sage-soft text-center shadow-xl shadow-sage/5"
      >
        <div className="w-16 h-16 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-serif mb-4">¡Gracias por escribirnos!</h3>
        <p className="text-text-secondary leading-relaxed mb-8 px-4">
          Hemos recibido tu mensaje. Un miembro de nuestro equipo te contactará en menos de 24 horas.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitted(false)}
          className="border-sage text-sage hover:bg-sage hover:text-white"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-border-soft shadow-xl shadow-canvas/50">
      <div className="mb-10">
        <h3 className="text-2xl font-serif mb-2">{form.headline}</h3>
        <p className="text-text-secondary text-sm">{form.subheadline}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField 
            id="name"
            label="Nombre completo"
            required
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            error={errors.name}
          />
          <FormField 
            id="email"
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField 
            id="phone"
            label="Teléfono (opcional)"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
          <SelectField 
            id="treatment"
            label="Tratamiento de interés"
            options={form.treatments}
            placeholder="Selecciona una opción"
            value={formData.treatment}
            onChange={e => setFormData({...formData, treatment: e.target.value})}
          />
        </div>

        <TextareaField 
          id="message"
          label="Mensaje o consulta"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />

        <div className="pt-4">
          <p className="text-[10px] text-text-secondary mb-6 italic">
            {form.privacyNote}
          </p>
          <Button 
            type="submit" 
            isLoading={isSubmitting}
            className="w-full bg-sage hover:bg-sage-deep text-white py-4 shadow-lg shadow-sage/10"
          >
            {form.submitCTA}
          </Button>
        </div>
      </form>
    </div>
  );
}
